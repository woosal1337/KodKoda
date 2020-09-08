require('dotenv').config()
const { palette }  = require('./palette');
const { randomProperty }  = require('./utils');
const { createCanvas } = require('canvas')
const fs = require('fs');
const sys = require('sys');
const path = require('path');
const { promisify } = require('util');
const { Storage } = require('@google-cloud/storage');
const { deflateRaw } = require('zlib');
const storage = new Storage();

const {AVATAR_BUCKET_NAME} = process.env;

console.log(AVATAR_BUCKET_NAME);

exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';
  res.status(200).send(message);
};

exports.generate = async (req, res) => {
    //let message = req.query.message || req.body.message || 'Hello World!';
    //res.status(200).send(message);
    let filename = req.body.filename || req.query.filename;
    let img = generateImage()
    var data = img.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer.from(data, 'base64');
    const tempLocalPath = `tmp/${filename}.png`;
    fs.writeFile(tempLocalPath, buf, {encoding: 'base64'}, function(err){
        if (err) throw err
        console.log('File saved.')
    });

    // Upload result to a different bucket, to avoid re-triggering this function.
    const avatarBucket = storage.bucket(AVATAR_BUCKET_NAME);
    // Upload the Blurred image back into the bucket.
    const gcsPath = `gs://${AVATAR_BUCKET_NAME}/${filename}.png`;

    try {
        await avatarBucket.upload(tempLocalPath, {destination: filename});
        console.log(`Uploaded avatar image to: ${gcsPath}`);
    } catch (err) {
        throw new Error(`Unable to upload avatar image to ${gcsPath}: ${err}`);
    }

    // Delete the temporary file.
    const unlink = promisify(fs.unlink);
    return unlink(tempLocalPath);

    res.status(200).send("Success Generating & Uploading Image")   
  };

const generateImage = () => {
    const width = 400
    const height = 400
    const canv = createCanvas(width, height)
    var plotCanv = canv.getContext('2d') ;
    let palet = randomProperty(palette)
    plotCanv.fillStyle = palet[0];
    plotCanv.fillRect(0, 0, width*2, height*2);
    let reducedPalette = palet.slice(1)
    draw(reducedPalette, canv)
    var img = canv.toDataURL("image/png");
    return img
}

const draw = (reducedPalette, canvas) => {
    'use strict'
    let seed, x, R, D, i, j, pass, s, X, Y;
    seed = Date.now();    // seed for random generaton, can be replaced with hardcoded value
    x = canvas.getContext('2d') ; // 2d canvas context
    // get a seeded random integer between 0-256
    R = () => (Math.sin(++s + i*i) + 1)*1e9 % 256 | 0;
    // get a seeded random integer between 0-4
    D = () => (Math.sin(++s + i*i) + 1)*1e9 % 4 | 0;
    var idx = 0
    var c = reducedPalette[idx]
    // for each sprite (32 rows x 16 columns)
    for(i = 1; i--;) {
        // 4 passes, outline left/right and fill left/right
        for(pass = 4; pass--;)  {       
          // set seed, randomize max sprite pixels, 50-101
          for(s = seed, j = R()/5 + 50|0; j--;) { 
            // X & Y pixel index in sprite
            X = j&7;
            Y = j>>3;
            // small chance of new color
            if (R() < 39) {
              c = reducedPalette[D()]
              x.fillStyle = c
            } else {
                if (R()**2 / 2e3 > X*X + (Y-5)**2) { //&&    
                // stroke first for outline then fill with color
                    x.fillRect( 50 + (7 + i%32*16 - pass%2*2*X + X)*20, 50 +(2 + (i>>5)*16 + Y)*20, 20, 20);
                }
            }
          }
        }
    }

}

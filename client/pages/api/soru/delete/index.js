import db from '../../../../utils/db/firebase_db'
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default (req, res) => {
    const qData = JSON.parse(req.body)
    // ADD SERVER-SIDE VALIDATIONS
    return new Promise((resolve, reject) => {
        const userId = postInfo.userId
        const docRef = db.collection('posts')
                         .doc(postInfo.postId)
 
        docRef.delete()
            .then(() => {
                res.json({status:"success"});
                resolve();
            })
            .catch((error) => {
              res.json({ error });
              res.status(405).end();
              resolve();
            });
    })
};
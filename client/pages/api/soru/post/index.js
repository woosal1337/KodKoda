import db from '../../../../utils/db/firebase_db'
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default (req, res) => {
    const postData = JSON.parse(req.body)
    return new Promise((resolve, reject) => {
        const postsRef = db.collection('posts')
        postsRef
            .add({
                title: postData.title,
                body: postData.text,
                tags: postData.language,
                postType: 1,
                creationDate: firebase.firestore.FieldValue.serverTimestamp(),
                answerCount: 3,
                ownerUserId: postData.userid,
                ownerName: "", 
                votes: 0
            })
            .then((doc) => {
                const data = doc.data();
                res.json({status:"success"})
                resolve()
            })
            .catch((error) => {
              res.json({ error });
              res.status(405).end();
              resolve();
            });
    })
};
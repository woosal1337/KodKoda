import db from '../../../../utils/db/firebase_db'
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default (req, res) => {
    const postInfo = JSON.parse(req.body)
    return new Promise((resolve, reject) => {
      db
        .collection('posts')
        .doc(postInfo.postId)
        .update({
            voteCount: firebase.firestore.FieldValue.increment(1)
        })
        .then((doc) => {
          const data = doc.data();
          db
            .collection('users')
            .doc(postInfo.userId)
            .update({
              upvotes: firebase.firestore.FieldValue.arrayUnion(req.body.postId)
            })
            .then((doc) => {
              res.json({status:"success"})
              resolve()
            })
            .catch((error) => {
              res.json({ error });
              res.status(405).end();
              resolve()
            })
        })
        .catch((error) => {
          res.json({ error });
          res.status(405).end();
          resolve();
        });

    })
};
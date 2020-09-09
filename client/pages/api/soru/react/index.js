import db from '../../../../utils/db/firebase_db'
import Document from 'next/document';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const selectReaction = (reactionType) => {
    switch(reactionType) {
        case 'likeCount':
            return 'likes'
        case 'clapCount':
            return 'claps'
        case 'confusedCount':
            return 'confuseds'
    }
}

export default (req, res) => {
    const reactionInfo = JSON.parse(req.body);
    return new Promise((resolve, reject) => {
      var userRef = db.collection('users').doc(reactionInfo.userId)
      userRef
        .get().then((doc) => {
          
          if (doc.data()[selectReaction(reactionInfo.reaction)].includes(reactionInfo.postId)) {
            res.json({status:"success", reactionExists:true, error:null})
            resolve()
          } else {
            userRef
              .update({
                [selectReaction(reactionInfo.reaction)]: firebase.firestore.FieldValue.arrayUnion(reactionInfo.postId)
              })
              .then((doc) => {
                db
                .collection('posts')
                .doc(reactionInfo.postId)
                .update({
                    [reactionInfo.reaction]: firebase.firestore.FieldValue.increment(1)
                }) 
                .then((doc) => {
                  res.json({status:"success", reactionExists:false, error:null})
                  resolve()
                })
                .catch((error) => {
                  res.json({ error });
                  res.status(405).end();
                  resolve();
                });
              })
              .catch((error) => {
                res.json({ error });
                res.status(405).end();
                resolve()
              })
          }
        }).catch((error) => {
          res.json({ error });
          res.status(405).end();
          resolve()
        })
    })
};
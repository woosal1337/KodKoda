import firebase from '../../../../utils/db/firebase_db'

export default (req, res) => {
    console.log(req.body);
    return new Promise((resolve, reject) => {
      firebase
        .collection('posts')
        .doc(req.body.userId)
        .update({
            voteCount: firebase.firestore.FieldValue.increment(1)
        })
        .then((doc) => {
          const data = doc.data();
          firebase
            .collection('users')
            .doc(req.body.userId)
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
import firebase from '../../../utils/db/firebase_db'

export default (req, res) => {
  return new Promise((resolve, reject) => {
    firebase
      .collection('posts')
      .doc(req.query.id)
      .get()
      .then((doc) => {
        const responses = doc.data().responses;
        firebase 
          .collection('posts')
          .where('__name__', 'in' ,responses)
          .get()
          .then((querySnapshot) => {
              var answers = querySnapshot.docs.map((doc) => doc.data());
              res.json({q:doc.data(),a:answers});
              resolve()
            })
            .catch((error) => {
              res.json({ error });
              resolve()
            });
      })
      .catch((error) => {
        res.json({ error });
        resolve()
      });
  })
};


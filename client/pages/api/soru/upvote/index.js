import firebase from '../../../../utils/db/firebase_db'

export default (req, res) => {
    console.log(req.body);
    /*
    firebase
      .collection('posts')
      .doc(req.query.id)
      .update({
          voteCount: firebase.firestore.FieldValue.increment(1)
      })
      .then((doc) => {
        const responses = doc.data().responses;
        firebase 
          .collection('posts')
          .where('__name__', 'in' ,responses)
          .get()
          .then((querySnapshot) => {
            //console.log(querySnapshot);
            var answers = querySnapshot.docs.map((doc) => doc.data());
            res.json({q:doc.data(),a:answers});
  
            })
            .catch((error) => {
              res.json({ error });
            });
      })
      .catch((error) => {
        res.json({ error });
      });
    */
};
import db from '../../../utils/db/firebase_db'

export default (req, res) => {
  return new Promise((resolve, reject) => {
    db
    .collection("posts")
    .where("postType", "==", 1)
    .orderBy("creationDate", "desc")
    //.startAt((parseInt(req.query.number[0])-1)*15)
    .limit(15)
    .get().then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          var docs = querySnapshot.docs.map((doc) => ({id:doc.id, data:doc.data()}));
          res.json(docs);
          resolve()
        } else {
          var docs = querySnapshot.docs.map((doc) => ({id:doc.id, data:[]}));
          res.json(docs);
          resolve()
        }
      })
      .catch((error) => {
        res.json({ error });
        resolve()
      });
  })
};

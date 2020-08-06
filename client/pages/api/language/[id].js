import db from '../../../utils/db/firebase_db'

export default (req, res) => {
  db
  .collection("posts")
  .where("language", "==", req.query.id)
  .where("postType", "==", 1)
  .limit(10)
  .get().then((querySnapshot) => {
    console.log(querySnapshot);
    var docs = querySnapshot.docs.map((doc) => ({id:doc.id, data:doc.data()}));
    res.json(docs);
    })
    .catch((error) => {
      res.json({ error });
    });
};



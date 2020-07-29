import firebase from '../../utils/db/firebase_db'
import useSWR from 'swr'

console.log(firebase)

export default (req, res) => {
  firebase
  .collection("posts")
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



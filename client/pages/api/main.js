import firebase from '../../utils/db/firebase_db'
import useSWR from 'swr'

export default (req, res) => {
  return new Promise((resolve, reject) => {
    firebase
    .collection("posts")
    .where("postType", "==", 1)
    .limit(10)
    .get().then((querySnapshot) => {
        var docs = querySnapshot.docs.map((doc) => ({id:doc.id, data:doc.data()}));
        res.json(docs);
        resolve()
      })
      .catch((error) => {
        res.json({ error });
        resolve()
      });
  })
};



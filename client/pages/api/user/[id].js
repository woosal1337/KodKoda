import firebase from '../../../utils/db/firebase_db'

console.log(firebase)

export default (req, res) => {
    firebase
        .collection('users')
        .doc(req.query.id)
        .get()
        .then((doc) => {
            res.json(doc.data());
        })
        .catch((error) => {
            res.json({ error });
        });
};


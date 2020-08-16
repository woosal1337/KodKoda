/* globals window */
import { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import cookie from 'js-cookie'
import initFirebase from '../utils/auth/initFirebase'

// Init the Firebase app.
initFirebase()

const createUser = async (email, uid, uname) => 
  fetch('/api/user/create', {
    method: 'POST',
    body: JSON.stringify({ email: email, userId: uid , username: uname })
  }).then((res) => res.json());

const getUsername = (uid, token) => 
  fetch(`/api/user/getUsername/${uid}`, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin"
  }).then((res) => res.json());

const isNewUser = async (uid, email, token) =>  {
  // create random username
  var uname = "user-" + Math.floor(Math.random() * 1000000);
  var userData = {
    id: uid,
    username: uname,
    email,
    token: token,
  }
  cookie.set('auth', userData, {
    expires: 1,
  })
  await createUser(email, uid, uname)
  window.location.assign('/');
}

const isNotNewUser = async (uid, email, token) => {
  var { uname } = await getUsername(uid, token)
  var userData = {
    id: uid,
    username: uname,
    email,
    token: token,
  }
  cookie.set('auth', userData, {
    expires: 1,
  })
  window.location.assign('/');
}


const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: ({ user, additionalUserInfo }, redirectUrl) => {
      // xa is the access token, which can be retrieved through
      // firebase.auth().currentUser.getIdToken()
      const { uid, email, xa } = user
      if (additionalUserInfo.isNewUser) {
        isNewUser(uid, email, xa)
      } else {
        isNotNewUser(uid, email, xa)
      }
      return false;
    },
  },
}

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  )
}

export default FirebaseAuth

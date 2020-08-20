/* globals window */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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

const isNewUser = async (uid, email, token, path) =>  {
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
  path[0] != 'standard' ? window.location.assign(`/${path.join('/')}`) : window.location.assign('/')
}

const isNotNewUser = async (uid, email, token, path) => {
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
  path[0] != 'standard' ? window.location.assign(`/${path.join('/')}`) : window.location.assign('/')
}


const returnConfig = path => {
  return {
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
          isNewUser(uid, email, xa, path)
        } else {
          isNotNewUser(uid, email, xa, path)
        }
        return false;
      }
    }
  }
}

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false)
  const router = useRouter()
  const { path } = router.query

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])

  return (
    <div>
      {renderAuth && path ? (
        <StyledFirebaseAuth
          uiConfig={returnConfig(path)}
          firebaseAuth={firebase.auth()}
        />
      ) :  null }
    </div>
  )
}

export default FirebaseAuth

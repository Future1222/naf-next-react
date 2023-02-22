import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/firebase-storage'
import 'firebase/auth'
require('firebase/functions')

const firebaseConfig = {
  apiKey: process.env.PUBLIC_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STOREAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const firebaseFunctions = firebase.app().functions(process.env.REGION)

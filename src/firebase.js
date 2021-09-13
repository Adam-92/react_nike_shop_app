import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp(
    {
/*         apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId:process.env.REACT_APP_FIREBASE_APP_ID */
        apiKey: "AIzaSyBl82zW1le0rMbhydEg8L4zmOI5cuCH7jU",
        authDomain: "auth-development-62e7a.firebaseapp.com",
        projectId: "auth-development-62e7a",
        storageBucket: "auth-development-62e7a.appspot.com",
        messagingSenderId: "448410017629",
        appId: "1:448410017629:web:9262a02cc9ee759f6792b4"   
    }
)

const auth = firebaseConfig.auth()
export {firebaseConfig ,auth}


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyADFe89abhZyTAf-OfBdlxFXG9zp_bmA6I",
    authDomain: "foodpanda-24808.firebaseapp.com",
    projectId: "foodpanda-24808",
    storageBucket: "foodpanda-24808.appspot.com",
    messagingSenderId: "172545180925",
    appId: "1:172545180925:web:e06c398c9d04011ca86a94"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const auth = getAuth();

function signin() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

export {
    signin
}
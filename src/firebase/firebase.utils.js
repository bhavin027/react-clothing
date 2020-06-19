import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1iCfgxEOgSIiRBdlYRQL-_YvceklQbXM",
    authDomain: "react-clothing-db-7213c.firebaseapp.com",
    databaseURL: "https://react-clothing-db-7213c.firebaseio.com",
    projectId: "react-clothing-db-7213c",
    storageBucket: "react-clothing-db-7213c.appspot.com",
    messagingSenderId: "190020948617",
    appId: "1:190020948617:web:32fdaaada5e91b1c012c58",
    measurementId: "G-C5KWCYD0P6"
}

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
	if(!userAuth) return;

	const userRef=firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}
		catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
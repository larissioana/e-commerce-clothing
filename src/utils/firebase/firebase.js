import {initializeApp} from 'firebase/app';
import {
        getAuth,
        signInWithPopup, 
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithEmailAndPassword,
        signOut
} from 'firebase/auth';
import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
        collection,
        writeBatch,
        getDocs,
        query
} from 'firebase/firestore';

const firebaseConfig =
{
   apiKey: "AIzaSyAda1hZR2FipaGuZVlhnE1Xb3Wj_KEv3Q4",
   authDomain: "clothing-store-70395.firebaseapp.com",
   projectId: "clothing-store-70395",
   storageBucket: "clothing-store-70395.appspot.com",
   messagingSenderId: "380356585346",
   appId: "1:380356585346:web:9c6ce4b9642aa5ffe5919b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
  prompt: "select_account"
});
  
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
const collectionRef = collection(db, collectionKey);
const batch = writeBatch(db);

objectsToAdd.forEach((object) =>
{
  const docRef = doc(collectionRef, object.title.toLowerCase(), object.image)
  batch.set(docRef, object);
});
    
  await batch.commit();
};

export const getCategoriesAndDocuments = async () =>
{
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) =>
  {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()]  = items;
    return acc;
  }, {});
  return categoryMap;
};


export const createUserDocumentFromAuth = async (user, additionalInformation = {}) => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists())
    {
        const {displayName, email} = user;
        const createdAt = new Date();

        try
        {
           await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
        })
        } catch(error)
        {
          console.log('error creating the user', error.message)
        }
    }
    return userDocRef;
  };

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
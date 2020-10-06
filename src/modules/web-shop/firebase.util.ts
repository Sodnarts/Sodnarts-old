import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyALX2BGlv4vVP5oM0XbedGnlSHsps5Gl-o',
    appId: '1:607021720660:web:1ae71561a73bfbf7c0b9c1',
    authDomain: 'sodnarts.firebaseapp.com',
    databaseURL: 'https://sodnarts.firebaseio.com',
    measurementId: 'G-D9DVWSMSNW',
    messagingSenderId: '607021720660',
    projectId: 'sodnarts',
    storageBucket: 'sodnarts.appspot.com',
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey: any, objectsToAdd: any) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach((obj: any) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    const response = await batch.commit();
    return response;
};

export const convertCollectionsSnapshotToMap = (collections: any) => {
    const transformedCollection = collections.docs.map((doc: any) => {
        const { title, items } = doc.data();

        return {
            id: doc.id,
            items,
            routeName: encodeURI(title.toLowerCase()),
            title,
        };
    });

    return transformedCollection.reduce((accumulator: any, collection: any) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export { firebase };

import { Dispatch } from 'redux';
import { convertCollectionsSnapshotToMap, firestore } from 'src/modules/web-shop/firebase.util';
import {
    ICollectionFailureAction,
    ICollections,
    ICollectionStartAction,
    ICollectionSuccessAction,
} from 'src/modules/web-shop/redux/shop/IShop';
import {
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
} from 'src/modules/web-shop/redux/shop/shop.types';

export const fetchCollectionsStart = (): ICollectionStartAction => ({
    type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: ICollections): ICollectionSuccessAction => ({
    payload: collectionsMap,
    type: FETCH_COLLECTIONS_SUCCESS,
});

export const fetchCollectionsFailure = (errorMessage: string): ICollectionFailureAction => ({
    payload: errorMessage,
    type: FETCH_COLLECTIONS_FAILURE,
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch: Dispatch<ICollectionFailureAction | ICollectionStartAction | ICollectionSuccessAction>) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then((snapshot) => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
    };
};

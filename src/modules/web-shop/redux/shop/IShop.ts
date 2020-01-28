import {
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
} from 'src/modules/web-shop/redux/shop/shop.types';

export interface ICollection {
    id: string;
    routeName: string;
    title: string;
    items: IItem[];
}

export interface IItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export interface ICollections {
    mens: ICollection;
    hats: ICollection;
    jackets: ICollection;
    womens: ICollection;
    sneaker: ICollection;
}

export interface ICollectionSuccessAction {
    type: typeof FETCH_COLLECTIONS_SUCCESS;
    payload: ICollections | null;
}

export interface ICollectionStartAction {
    type: typeof FETCH_COLLECTIONS_START;
}

export interface ICollectionFailureAction {
    type: typeof FETCH_COLLECTIONS_FAILURE;
    payload: string | null;
}

export interface ICollectionState {
    collections: ICollections | null;
    errorMessage: string | null;
    isFetching: boolean;
}

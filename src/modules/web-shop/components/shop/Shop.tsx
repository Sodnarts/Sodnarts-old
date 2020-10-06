import React, { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// tslint:disable-next-line: max-line-length
import { CollectionsOverviewContainer } from 'src/modules/web-shop/components/shop/collection-overview/CollectionsOverviewContainer';
// tslint:disable-next-line: max-line-length
import { CollectionPageContainer } from 'src/modules/web-shop/components/shop/collection-page/CollectionContainer';
import { fetchCollectionsStartAsync } from 'src/modules/web-shop/redux/shop/shop.actions';
import { selectIsCollectionFetching } from 'src/modules/web-shop/redux/shop/shop.selectors';

interface IProps {
    fetchCollectionsStartAsync: () => void;
    match: any;
}
// tslint:disable-next-line: no-shadowed-variable
const ShopPageBase = ({ fetchCollectionsStartAsync, match }: IProps) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

    return (
        <div>
            <Route exact={true} path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}:collectionId`} component={CollectionPageContainer} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const ShopPage = connect(mapStateToProps, mapDispatchToProps)(ShopPageBase);

export { ShopPage };

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import 'src/modules/web-shop/components/shop/collection-overview/CollectionsOverviewStyles.scss';
import { CollectionPreview } from 'src/modules/web-shop/components/shop/collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from 'src/modules/web-shop/redux/shop/shop.selectors';

interface IProps {
    collections: any;
}

const CollectionsOverviewBase = ({ collections }: IProps) => (
    <div className="collections-overview">
        {collections.map(({ id, ...props }: any) => (
            <CollectionPreview key={id} {...props} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

const CollectionsOverview = connect(mapStateToProps)(CollectionsOverviewBase);

export { CollectionsOverview };

import React from 'react';
import { connect } from 'react-redux';
import { CollectionItem } from 'src/modules/web-shop/components/shop/collection-item/CollectionItem';
import 'src/modules/web-shop/components/shop/collection-page/CollectionStyles.scss';
import { selectCollection } from 'src/modules/web-shop/redux/shop/shop.selectors';

interface IProps {
    collection: any;
}
const CollectionPageBase = ({ collection }: IProps) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map((item: any) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPage = connect(mapStateToProps)(CollectionPageBase);

export { CollectionPage };

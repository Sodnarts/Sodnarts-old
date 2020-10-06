import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { CustomButton } from 'src/modules/web-shop/components/custom-button/CustomButton';
import 'src/modules/web-shop/components/shop/collection-item/CollectionItemStyles.scss';
import { addItem } from 'src/modules/web-shop/redux/cart/cart.actions';
import { ICartAddItemAction } from 'src/modules/web-shop/redux/cart/ICart';
import { IItem } from 'src/modules/web-shop/redux/shop/IShop';

interface IProps {
    item: IItem;
    addItem: (item: IItem) => void;
}

const CollectionItemBase = (props: IProps) => {
    const { name, price, imageUrl } = props.item;
    const lang = getLanguageFile();

    const handleClick = () => {
        props.addItem(props.item);
    };
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={handleClick} inverted={true}>
                {lang.webShop.shop.addToCart}
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<ICartAddItemAction>) => ({
    addItem: (item: IItem) => dispatch(addItem(item)),
});

const CollectionItem = connect(null, mapDispatchToProps)(CollectionItemBase);

export { CollectionItem };

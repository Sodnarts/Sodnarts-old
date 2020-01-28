import React from 'react';
import { withRouter } from 'react-router-dom';
import { routes } from 'src/common/globals/routes/routes';
import { CollectionItem } from 'src/modules/web-shop/components/shop/collection-item/CollectionItem';
import 'src/modules/web-shop/components/shop/collection-preview/CollectionPreviewStyles.scss';
import { IItem } from 'src/modules/web-shop/redux/shop/IShop';

interface IProps {
    title: string;
    items: IItem[];
    history: any;
    match: any;
    routeName: string;
}
const CollectionPreviewBase = ({ title, items, history, match, routeName }: IProps) => {
    const handleClick = () => {
        history.push(`${routes.webShop.shop}${routeName}`);
    };

    return (
        <div className="collection-preview">
            <h1 className="title" onClick={handleClick}>
                {title.toUpperCase()}
            </h1>
            <div className="preview">
                {items
                    .filter((item: IItem, index: number) => index < 4) // TODO: Extract the length to Config.js file
                    .map((item: IItem) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

const CollectionPreview = withRouter<any, typeof CollectionPreviewBase>(CollectionPreviewBase);

export { CollectionPreview };

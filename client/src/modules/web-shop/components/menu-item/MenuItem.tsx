import React from 'react';
import { withRouter } from 'react-router-dom';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import 'src/modules/web-shop/components/menu-item/MenuItemStyles.scss';

interface IProps {
    title: string;
    imageUrl: string;
    size: number;
    linkUrl: string;
    history: any;
    match: any;
}

const MenuItemBase = ({ title, imageUrl, size, history, linkUrl, match }: IProps) => (
    // tslint:disable-next-line: jsx-no-lambda
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

const MenuItem = withRouter<any, typeof MenuItemBase>(MenuItemBase);

export { MenuItem };

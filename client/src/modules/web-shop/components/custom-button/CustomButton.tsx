import React from 'react';
import 'src/modules/web-shop/components/custom-button/CustomButtonStyles.scss';

interface IProps {
    children: any;
    isGoogleSignIn?: boolean;
    inverted?: boolean;
    onClick: () => void;
}

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }: IProps) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...props}
    >
        {children}
    </button>
);

export { CustomButton };

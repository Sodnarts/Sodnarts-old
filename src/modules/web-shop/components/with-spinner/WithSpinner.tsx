import React from 'react';
import 'src/modules/web-shop/components/with-spinner/WithSpinnerStyles.scss';

const WithSpinner = (WrappedComponent: any) => {
    const Spinner = ({ isLoading, ...otherProps }: any) => {
        return isLoading ? (
            <div className="spinnerOverlay">
                <div className="spinnerContainer" />
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export { WithSpinner };

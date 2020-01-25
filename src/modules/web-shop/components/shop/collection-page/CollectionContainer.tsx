import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CollectionPage } from 'src/modules/web-shop/components/shop/collection-page/CollectionPage';
import { WithSpinner } from 'src/modules/web-shop/components/with-spinner/WithSpinner';
import { selectIsCollectionsLoaded } from 'src/modules/web-shop/redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export { CollectionPageContainer };

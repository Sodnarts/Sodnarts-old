import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// tslint:disable-next-line: max-line-length
import { CollectionsOverview } from 'src/modules/web-shop/components/shop/collection-overview/CollectionsOverview';
import { WithSpinner } from 'src/modules/web-shop/components/with-spinner/WithSpinner';
import { selectIsCollectionFetching } from 'src/modules/web-shop/redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export { CollectionsOverviewContainer };

import { connect } from "react-redux";
import { compose } from 'redux'

import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collectionPage.component";

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsCollectionsLoaded,
});

//the nested function are returning what is needed so just have this function equal those nested ones
// this is not using react just nested functions HOC
const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;
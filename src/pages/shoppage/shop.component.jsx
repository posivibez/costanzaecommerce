import React from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions.js";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors.js";

import "./shop.styles.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component.js";
import CollectionPage from "../../pages/collection/collectionPage.component.js";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  // state = {
  //   loading: true
  // };
  // unsubscribeFromSnapshot = null;

  componentDidMount() {

    const { fetchCollectionsStartAsync } = this.props;
    
    fetchCollectionsStartAsync();
    
  }


  render() {
    
    const { match, isCollectionsLoaded } = this.props;

    return (
      <>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
      </>
    );
  }

} 

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

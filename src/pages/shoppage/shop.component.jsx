import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions.js";

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container';
import CollectionPageContainer from "../../pages/collection/collectionPage.container.js";

import "./shop.styles.scss";

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    //the collectionspage needs to be passed prop because this page is getting the url slug to determine which products to render
    //the collectionsoverview container needs no props because its doing everything itself (mapstatetoprops to get preview items to render & )
    return (
      <>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageContainer {...props} />} />
      </>
    );
  }
} 

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);

import React from "react";

import { Route } from "react-router-dom";

import "./shop.styles.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component.js";
import CollectionPage from "../../pages/collection/collectionPage.component.js";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </>
  );
};

export default ShopPage;

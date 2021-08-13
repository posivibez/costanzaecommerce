import React from 'react';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import './collections-overview.styles.scss';

import CollectionPreview from "../collection-preview/collectionpreview.component";

const CollectionsOverview = ({ shopItems }) => (
    <div>
      {shopItems.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
);

const mapStateToProps = createStructuredSelector({
    shopItems: selectCollectionsForPreview,
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);
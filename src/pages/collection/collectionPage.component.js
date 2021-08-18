import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collectionitem/collectionitem.component.jsx";

import "./collectionPage.styles.scss";

const CollectionPage = ({ collection, ...otherProps }) => {

  return (
    <div className="collection">
      <h1 className="collection__title">{collection.title}</h1>
      <div className="collection__grid">
        {collection.items ? collection.items.map((item) => {
          return (
            <div className="collection__grid__item" key={item.id}>
              <CollectionItem key={item.id} item={item} />
            </div>
          );
        }):''}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

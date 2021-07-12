import React from "react";

import './collectionitem.styles.scss'

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collection_item">
      <div
        className="collection_image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
          <button className="collection_button">
              ADD TO CART
          </button>
      </div>

      <div className="collection_footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

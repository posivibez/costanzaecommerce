import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";

import CustomButton from "../button-custom/buttoncustom.component";

import "./collectionitem.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const {name, imageUrl, price} = item;
  return (
    <div className="collection_item">
      <div
        className="collection_image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <CustomButton inverted collectionPage onClick={() => addItem(item)}>ADD TO CART</CustomButton>

      <div className="collection_footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

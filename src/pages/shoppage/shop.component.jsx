import React from "react";

import "./shop.styles.scss";
import SHOP_DATA from "./shopdata";

import CollectionPreview from "../../components/collection-preview/collectionpreview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
        collections: SHOP_DATA 
    };
  }

  render() {

    const {collections} = this.state;

    return (
        <div>
            {collections
              .map(({id, ...otherProps}) => {
                return <CollectionPreview key={id} {...otherProps} />;
              })}

        </div>

    )
  }
}

export default ShopPage;

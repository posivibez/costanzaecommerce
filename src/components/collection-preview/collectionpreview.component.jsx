import React from "react";

import './collectionpreview.styles.scss'

import CollectionItem from '../collectionitem/collectionitem.component'

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <div className="collection_preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return (
                <CollectionItem
                    key={item.id}
                    item={item}
                />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;

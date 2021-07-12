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
          .map(({id, ...otherProps}) => {
            return (
                <CollectionItem
                    key={id}
                    {...otherProps}
                />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;

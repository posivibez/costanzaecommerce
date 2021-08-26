import React from "react";

import { useSelector } from "react-redux";

import { useParams } from 'react-router-dom';

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collectionitem/collectionitem.component.jsx";

import "./collectionPage.styles.scss";

const CollectionPage = () => {

  const params = useParams();
  const collection = useSelector(selectCollection(params.collectionId));

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

export default CollectionPage;

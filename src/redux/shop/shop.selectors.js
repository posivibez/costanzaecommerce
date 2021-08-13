import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectshop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectshop],
  (shop) => shop.items
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopItems],
    (collection) => collection[collectionUrlParam]
  )
);

import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectshop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectshop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopItems],
    (collections) => collections ? collections[collectionUrlParam] : []
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectshop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectshop],
  shop => !!shop.collections
)
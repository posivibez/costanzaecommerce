// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

//redux thunk middleware is allowing this
//allowing dispatch of function instead of just
//action object type as above
//LOGIC NOW IN SAGAS
// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("Collection");

//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         // updateCollections(collectionsMap);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//         // this.setState({ loading: false });
//       })
//       .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };

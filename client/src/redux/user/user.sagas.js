import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";

export function* getSnapshotFromUserAuth(user, displayName) {
  try {

    const userRef = yield call(createUserProfileDocument, user, displayName);
    const userSnapshot = yield userRef.get();

    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

//GOOGLE SIGN IN ////////************************ */

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

//EMAIL SIGN IN ////////************************ */

export function* signInWithEmail({ payload: { email, password } }) {
  try {

    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}


export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

//CHECK USER SESSION ////////************************ */

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

//SIGN OUT ////////************************ */

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

//SIGN UP ////////************************ */

export function* signInAfterSignUp({ payload: { user, displayName }}) {
  yield getSnapshotFromUserAuth(user, displayName);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user} = yield auth.createUserWithEmailAndPassword(email, password);

    //didnt realize the below was actually defining userRef redundant to call here and then again
    //after sign up success
    // yield createUserProfileDocument(user, { displayName });
    yield put(signUpSuccess({ user, displayName }));

  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

//COMBINE SAGAS ////////************************ */
//IF YOU HAVE A gen function saga that needs to listen for redux action
//it needs to be here!! (if using rootsaga pattern of course)
//other wise will not be able to listen and here the action fire
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(signOutStart),
    call(signUpStart),
    call(onSignUpSuccess)
  ]);
}

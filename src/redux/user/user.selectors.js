import { createSelector } from 'reselect'

//referring to store name
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    //referring to state name in reducer
    (user) => user.currentUser
);
import { createSelector } from "reselect";

const selectHeader = (state) => state.header;

export const selectMobileMenuHidden = createSelector(
  [selectHeader],
  (header) => header.mobileMenuHidden
);
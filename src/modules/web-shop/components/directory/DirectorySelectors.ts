import { createSelector } from 'reselect';

const selectDirectory = (state: any) => state.webShop.directory;

export const selectDirectorySections = createSelector([selectDirectory], (directory) => directory.sections);

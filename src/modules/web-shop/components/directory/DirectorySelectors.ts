import { createSelector } from 'reselect';

const selectDirectory = ({ webShop: { directory } }: any) => directory;

export const selectDirectorySections = createSelector([selectDirectory], (directory) => directory.sections);

import { createSelector } from 'reselect';

// Has to be any for some reason. Entire application crashes into a messy error-message if it's of type IRootState.
const selectDirectory = ({ webShop: { directory } }: any) => directory;

export const selectDirectorySections = createSelector([selectDirectory], (directory) => directory.sections);

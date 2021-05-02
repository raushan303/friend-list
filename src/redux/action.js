import * as actionTypes from './actionTypes';

export const addNewFriend = (data) => ({
  type: actionTypes.ADD_NEW_FRIEND,
  payload: { data },
});
export const deleteFriend = (id) => ({
  type: actionTypes.DELETE_FRIEND,
  payload: { id },
});
export const makeFavouriteFriend = (id) => ({
  type: actionTypes.MAKE_FAVOURITE_FRIEND,
  payload: { id },
});
export const makeUnFavouriteFriend = (id) => ({
  type: actionTypes.MAKE_UN_FAVOURITE_FRIEND,
  payload: { id },
});

import { Data } from '../Data/index';

const init = {
  friendList: Data,
  newId: 5,
};

export default function Reducer(state = init, { type, payload }) {
  switch (type) {
    case 'addNewFriend':
      return {
        ...state,
        newId: state.newId + 1,
        friendList: [payload.data, ...state.friendList],
      };
    case `deleteFriend`:
      return {
        ...state,
        friendList: state.friendList.filter((friend) => friend.id !== payload.id),
      };
    case `makeFavouriteFriend`:
      return {
        ...state,
        friendList: state.friendList.map((friend) => {
          if (friend.id === payload.id)
            return {
              ...friend,
              isFav: true,
            };
          else return friend;
        }),
      };
    case `makeUnFavouriteFriend`:
      return {
        ...state,
        friendList: state.friendList.map((friend) => {
          if (friend.id === payload.id)
            return {
              ...friend,
              isFav: false,
            };
          else return friend;
        }),
      };
    default:
      return state;
  }
}

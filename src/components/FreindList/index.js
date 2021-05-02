import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import { connect } from 'react-redux';

import {
  addNewFriend,
  deleteFriend,
  makeFavouriteFriend,
  makeUnFavouriteFriend,
} from '../../redux/action';

import Pagination from '../Pagination';
import ListComponent from '../ListComponent';

const limit = 4;

function Index({
  newId,
  friendList,
  addNewFriend,
  deleteFriend,
  makeFavouriteFriend,
  makeUnFavouriteFriend,
}) {
  const [friendName, setFriendName] = useState('');
  const [offSet, setOffset] = useState(0);
  const [curFriendList, setCurFriendList] = useState([]);
  const [paginatedFriendList, setPaginatedFriendList] = useState([]);
  const [sortByFav, setSortByFav] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setPaginatedFriendList(curFriendList.slice(offSet, offSet + limit));
  }, [offSet, curFriendList]);

  const getSortedList = (curArray) => {
    const sortedFriendList = [...curArray];
    sortedFriendList.sort((a, b) => b.isFav - a.isFav);
    return sortedFriendList;
  };

  const getSearchedList = (searchString, curArray) => {
    let searchData = [];
    curArray.forEach((friend) => {
      if (friend.name.toUpperCase().match(searchString.toUpperCase())) {
        searchData.push(friend);
      }
    });
    return searchData;
  };

  useEffect(() => {
    if (sortByFav) {
      setCurFriendList(getSortedList(getSearchedList(searchValue, friendList)));
    } else {
      setCurFriendList(getSearchedList(searchValue, friendList));
    }
  }, [friendList]);

  const handleChange = (e) => {
    setFriendName(e.target.value);
  };

  const handleAdd = () => {
    if (friendName !== '') {
      addNewFriend({ id: newId, name: friendName, isFav: false });
      setFriendName('');
    } else alert('Enter name');
  };

  const onEnter = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  const handleCheckBox = (e) => {
    setSortByFav(e.target.checked);
    if (e.target.checked) setCurFriendList(getSortedList(curFriendList));
    else {
      setCurFriendList(getSearchedList(searchValue, friendList));
    }
  };

  const handleFavourite = (friend) => {
    if (friend.isFav) makeUnFavouriteFriend(friend.id);
    else makeFavouriteFriend(friend.id);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (sortByFav) setCurFriendList(getSortedList(getSearchedList(e.target.value, friendList)));
    else setCurFriendList(getSearchedList(e.target.value, friendList));
  };

  return (
    <Wrapper>
      <div className='header'>
        <h1>Friend List</h1>
      </div>
      <input
        value={searchValue}
        onChange={handleSearch}
        className='search-box'
        placeholder='Seach Your Friend'
      />

      <div className='sort-fav-container'>
        <input
          checked={sortByFav}
          onChange={handleCheckBox}
          className='check-box'
          type='checkbox'
        />
        <h3>Sort By Favourite Friend</h3>
      </div>

      {paginatedFriendList.map((friend) => (
        <ListComponent
          friend={friend}
          handleFavourite={handleFavourite}
          deleteFriend={deleteFriend}
        />
      ))}

      <Pagination
        limit={limit}
        listLength={curFriendList.length}
        offSet={offSet}
        setOffset={setOffset}
      />

      <div className='input-container'>
        <input
          onChange={handleChange}
          onKeyPress={onEnter}
          value={friendName}
          className='input-box'
          placeholder='Add New Friend'
        />
        <button onClick={handleAdd} className='add-btn'>
          Add
        </button>
      </div>
    </Wrapper>
  );
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList,
    newId: state.newId,
  };
}

export default connect(mapStateToProps, {
  addNewFriend,
  deleteFriend,
  makeFavouriteFriend,
  makeUnFavouriteFriend,
})(Index);

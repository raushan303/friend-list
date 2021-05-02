import React from 'react';

import Icon from 'react-icons-kit';
import { starEmpty } from 'react-icons-kit/icomoon/starEmpty';
import { starFull } from 'react-icons-kit/icomoon/starFull';
import { ic_delete } from 'react-icons-kit/md/ic_delete';

function Index({ friend, handleFavourite, deleteFriend }) {
  return (
    <div className='friend-box' key={friend.id}>
      <h3>{friend.name}</h3>
      <button onClick={() => handleFavourite(friend)} className='btn fav-btn'>
        <Icon
          style={{ color: friend.isFav ? 'yellow' : '#f2f2f0' }}
          icon={friend.isFav ? starFull : starEmpty}
          size={22}
        />
      </button>
      <button
        onClick={() => {
          if (window.confirm('Are you sure?')) deleteFriend(friend.id);
        }}
        className='btn del-btn'
      >
        <Icon icon={ic_delete} size={20} />
      </button>
    </div>
  );
}

export default Index;

import React from 'react';

function Index({ limit, offSet, setOffset, listLength }) {
  return (
    <div className='pagination-container'>
      {offSet > 0 && (
        <button onClick={() => setOffset((prevState) => prevState - limit)} className='page-btn'>
          {offSet / limit}
        </button>
      )}
      {(offSet > 0 || offSet + limit < listLength) && (
        <button className='page-btn cur-page'>{offSet / limit + 1}</button>
      )}
      {offSet + limit < listLength && (
        <button onClick={() => setOffset((prevState) => prevState + limit)} className='page-btn'>
          {offSet / limit + 2}
        </button>
      )}
    </div>
  );
}

export default Index;

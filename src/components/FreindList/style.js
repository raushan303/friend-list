import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;

  @media (max-width: 800px) {
    padding: 0 20px;
  }

  .header {
    background: #f7f7f7;
  }

  .input-container {
    display: flex;
    align-items: center;
    margin-top: auto;
    margin-bottom: 50px;
    .add-btn {
      height: 50px;
      width: 90px;
      cursor: pointer;
      border: 1px solid #f7f7f7;
    }
  }

  .search-box,
  .input-box {
    height: 60px;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #4a4a48;
    font-size: 24px;
    &:focus {
      outline: none;
    }
  }
  .search-box {
    margin-bottom: 20px;
  }

  .sort-fav-container {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-bottom: 50px;
    .check-box {
      height: 20px;
      width: 20px;
      cursor: pointer;
    }
    h3 {
      margin: 0 0 0 10px;
    }
  }

  .friend-box {
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #82827e;
    h3 {
      text-transform: capitalize;
      margin-left: 20px;
    }
    .btn {
      padding: 10px;
      background: #fff;
      border: 1px solid #e6e6e1;
      cursor: pointer;
      border-radius: 8px;
    }
    .fav-btn {
      margin-left: auto;
    }
    .del-btn {
      margin-left: 20px;
      margin-right: 10px;
    }
  }

  .pagination-container {
    padding: 30px;
    .page-btn {
      padding: 8px 10px;
      cursor: pointer;
      margin-left: 10px;
      border: 1px solid #e6e6e1;
      &:first-child {
        margin-left: 0;
      }
    }
    .cur-page {
      background: #cccccc;
    }
  }
`;

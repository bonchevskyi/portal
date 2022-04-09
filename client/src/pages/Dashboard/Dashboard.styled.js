import styled from 'styled-components';
//import SelectSearch from 'react-select-search';
import Select from 'react-select';
import { DARK, DEFAULT, BRIGHT } from '../../GlobalStyles';
import { AvatarDiv, Avatar } from '../Profile/Profile.styled';
import { Link } from 'react-router-dom';

export const Search = styled.div`
  //justify-content: center;
  //align-items: center;

  // border: 2px solid yellow;
  //padding: 20px;
  //display: flex;
  flex-direction: column;
  //max-width: 70vw;
  width: 100%;
  //max-width: calc(70vw - 97px - 97px);    //OR THIS
  //margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
`;

export const SelectsContainer = styled.div`
  //border: 1px solid red;
  justify-content: center;
  align-items: center;
  padding: 5px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 70vw;
  display: flex;
  font-size: 1rem;
  //text-align: center;
  //flex-direction: column;

  @media screen and (max-width: 1270px) {
    //padding: 10px;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }

  /* @media screen and (max-width: 890px) {
    //max-width: 440px;
    //width: 100%;
    flex-direction: column;
  } */
`;

export const SearchButton = styled.button`
  justify-content: center;
  align-items: center;
  //border: 2px solid blue;
  padding: 20px;
  display: flex;
  margin-left: 25px;
  //height: 22px;
  //max-width: 70vw;
  width: auto;
  max-width: calc(70vw - 97px - 97px);
  border: none;
  outline: none;
  //letter-spacing: 5px;
  //margin: 0 auto;
  //font-size: 1rem;

  //background-color: white;
  //background: ${DARK};
  background: transparent;
  color: white;
  border: 5px solid ${DARK};
  //outline: 50px red;
  //outline-color: red;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 30px;

  &:hover {
    transition: all 0.3s ease-out;
    //background-color: ${BRIGHT};
    background-color: ${DARK};
  }

  @media screen and (max-width: 1270px) {
    flex-direction: column;
    width: 100%;
    padding-bottom: 5px;
    letter-spacing: 5px;
  }
`;

export const WrapSingleSelect = styled.div`
  //width: 420px;
  width: calc(70vw / 3);
  //min-width: 100%;
  //max-width: calc(70vw / 3);

  justify-content: center;
  align-items: center;

  padding: 0 1px;
  //border: 2px solid purple;

  @media screen and (max-width: 1270px) {
    max-width: 800px;
    width: 100%;
    flex-direction: column;
    margin: 0;
  }

  @media screen and (max-width: 890px) {
    //max-width: 440px;
    //width: 100%;
    flex-direction: column;
  }
`;

export const WrapCitySelect = styled(WrapSingleSelect)`
  width: 250px;

  @media screen and (max-width: 1270px) {
    max-width: 800px;
    width: 100%;
    flex-direction: column;
    margin: 0;
  }
`;

export const WrapUniversitySelect = styled(WrapSingleSelect)`
  width: 250px;
`;

export const CustomSelect = styled(Select)`
  * {
    //border-radius: 15px;
    cursor: text;
  }
  .Select__input-container {
    //padding-left: 36px;
    //margin-left: 36px;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    //background: red;
  }

  //MAIN WIDTH HERE

  .Select__control {
    //margin: auto;
    background: ${DARK};
    width: 100%;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    //overflow: hidden;
  }

  .Select__container {
    //color: red;
    //padding-left: 36px;
    //background: blue;
  }

  .Select__placeholder {
    //font-size: smaller;
    color: white;
    padding-left: 36px;
    text-align: center;
  }

  .Select__indicator-separator {
    // display: none;
    //color: red;
  }

  .Select__dropdown-indicator {
    color: white;
    :hover {
      color: ${BRIGHT};
    }
  }

  .Select__control--menu-is-open {
    color: white;
    //background: red;
  }

  /* Top selected name CHANGE!!!!!!!!!!! */
  .Select__single-value {
    //content: 'something';
    color: ${BRIGHT} !important;
    //background-color: red;
    //color: red;
    //content: 'afwafawfs';
    text-align: center;
  }

  /* DROPDOWN MENU */
  .Select__menu {
    //margin: auto;
    //overflow: hidden;
    width: 100%;
    min-width: 220px;
    color: ${BRIGHT} !important;
  }
  .Select__menu-list {
    padding: 0;
    color: white;
  }

  /* DROPDOWN OPTIONS */
  .Select__option {
    cursor: pointer;
    overflow: hidden;
    background: ${DARK};
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;

    /* &:hover {
      transition: all 0.3s ease-out;
      background: red;
    } */
  }

  /* DROPDOWN MENU */

  .Select__option--is-focused {
    //color: black;
    transition: all 0.3s ease-out;
    background: ${DEFAULT};
  }
  .Select__option--is-selected {
    color: ${BRIGHT};
  }
`;

// ===========================DATA FROM API=================================

export const DataContainer = styled.div`
  //border: 10px solid orange;
  width: 100%;
  height: 200px;
  min-height: 220px;
  //justify-content: center;
  align-items: center;

  //display: flex;
  //flex-direction: column;
  display: grid;
  margin: 10px auto;
`;

export const DataDiv = styled.div`
  //border: 5px solid red;
  padding: 10px;
  display: flex;
  //flex-direction: row;
  width: 100%;
  height: 100%;
  //justify-content: center;
  //align-items: center;

  //display: flex;
  //display: inline-flex;
  //background-color: white;
  margin: 10px auto;
  //flex: 1;
`;

export const DataAvatarDiv = styled.div`
  //border: 1px solid blue;
  width: 100px;
  margin: 5px 0;
  //height: 100px;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const DataAvatar = styled.img`
  border: 3px solid ${DARK}; //NEED
  src: ImgName;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const DataInfoDiv = styled.div`
  //border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin: 5px;
  padding: 0;
`;

export const HoverDiv = styled.div`
  //border: 1px solid red;
  display: block;
  width: 100%;
`;

export const HoverData = styled.div`
  //border: 1px solid yellow;
  display: none;
  flex-direction: column;

  &:hover .data {
    display: none;
  }

  &:hover .info {
    display: flex;
  }
`;

// <div class='showhim'>
//     HOVER ME<div class='showme'>hai</div>
//     <div class='ok'>ok</div>
//   </div>;

export const DataTopWrap = styled.button`
  //border: 10px solid red;
  display: flex;
  flex-direction: row;
  background: transparent;
  border: none;
  outline: none;
`;

export const DataPostPath = styled.div`
  //border: 1px solid green;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  margin-left: 0;

  color: white;
  background-color: ${BRIGHT};
  //margin-top: 1px;
  font-size: medium;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  height: 40px;
  //flex: 1;
  //min-height: 0;
  width: 80%;
`;

export const DataPostButton = styled.button`
  //border: 1px solid red;
  //border: none;
  margin: 5px;
  margin-right: 0;
  border-radius: 15px;
  width: 20%;
  height: 40px;
  padding: 5px;
  //BUTTON
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  //display: flex;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  border: 5px solid ${BRIGHT};

  display: inline-block;
  font-size: 16px;
  //border-radius: 30px;

  &:hover {
    transition: all 0.3s ease-out;
    //background-color: ${BRIGHT};
    background-color: ${DARK};
  }
`;

export const DataPostTitle = styled.div`
  border-radius: 5px;
  background-color: white;
  height: 30px;
  margin: 5px;
  padding: 5px;
  //flex: 1;
`;

export const DataPostText = styled.div`
  //border: 1px solid blue;
  overflow: hidden;
  border-radius: 5px;
  background-color: white;
  margin: 5px;
  padding: 10px;
  padding-top: 5px;
  //min-height: 0;
  height: calc(226px - 57px - 45px);
  //NEW
  white-space: pre-wrap;
  word-wrap: break-word; //new
`;

export const PostStats = styled.div`
  //border: 1px solid blue;
  background-color: ${DARK};
  border-radius: 15px;
  color: white;
  width: 100%;
  height: fit-content;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
`;

export const PostAuthor = styled(Link)`
  //border: 1px solid blue;
  background-color: ${DARK};
  color: white;
  width: 100%;
  height: fit-content;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5px;
  padding: 5px;
`;

export const WrapBoth = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  //display: grid;
  margin: 5px;
  padding: 100px;
  justify-content: center;
  align-items: center;
  //width: 100%;
  height: 100%;
  height: 500px;
  padding: 5px;
`;

export const WrapRightTop = styled.div`
  //border: 1px solid pink;
  display: flex;
  //display: grid;
  margin: 5px;
  //padding: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: fit-content;
  max-height: fit-content;
  padding: 5px;
`;

export const WrapRightBottom = styled.div`
  //border: 1px solid green;
  display: flex;
  flex-direction: column;
  //display: grid;
  margin: 5px;

  justify-content: center;
  align-items: center;

  //width: 100%;
  height: 50%;
  padding: 50px;
`;

export const ButtonFull = styled.button`
  //border: 1px solid green;
  background-color: ${BRIGHT};
  text-align: center;
  text-decoration: none;
  align-items: center;
  color: black;
  //display: flex;
  display: grid;
  margin: auto;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  //width: 100%;
  height: 50%;
  padding: 20px;

  width: fit-content;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? `${BRIGHT}` : `${DARK}`)};
  }
`;

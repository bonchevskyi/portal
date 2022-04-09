import styled from 'styled-components';
import Select from 'react-select';
import { Container, Button } from '../../GlobalStyles';
//import { Link } from 'react-router-dom';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';
import { AvatarDiv } from '../Profile/Profile.styled';

export const ProfileInput = styled.input`
  //margin-bottom: 16px;
  //border-radius: 15px;
  //border: 1px solid red;
  color: white;
  font-size: 24px;
  padding-left: 10px;
  text-align: center;
  //background: yellow;
  flex: 2;
  //width: 300px;
`;

export const ProfileDataInput = styled.input`
  //margin-bottom: 25px;
  color: ${DARK};
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  background: white;
  border-radius: 5px;
  border: none;
  padding: 5px 0;
  flex: 5;
  //width: 300px;
`;

export const AvatarDivEdit = styled(AvatarDiv)`
  //border: 3px solid red;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const EditCityLabel = styled.h1`
  //margin-bottom: 16px;
  //border-radius: 15px;
  // border: 3px solid red;
  color: ${DARK};
  font-size: 24px;
  padding-left: 10px;
  text-align: center;
  //background: yellow;
  flex: 2;
  width: 200px;
`;

export const EditImgButton = styled.button`
  background: ${DARK};
  color: white;
  border: none;
  font-size: 16px;
  text-align: center;
  width: 100%;
  height: 80px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${BRIGHT};
  }
`;

export const EditButtonsDiv = styled.div`
  display: inline;
  margin: 0 auto;
`;

export const EditSaveButton = styled.button`
  //display: inline;
  border: none;
  font-size: 16px;
  text-align: center;
  background: ${(props) =>
    props.background ? props.background : 'transperent'};
  //background: green;
  color: ${(props) => (props.color ? props.color : 'white')};
  width: 170px;
  margin: 5px;
  height: 50px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  :disabled {
    opacity: 0.5;
  }
`;

export const EditCustomSelect = styled(Select)`
  * {
    //font-size: 16px;  //PROB IS DEFAULT
    justify-content: center;
    align-items: center;
    text-align: center;
    //height: 40px;
    border-radius: 5px;
    cursor: text;
    font-size: 24px;
    font-weight: 600;
    //color: red;
    color: ${DARK};
  }
  .Select__input-container {
    //color: white;
    //display: none;
    //height: 30px;
    color: ${DARK};
    //background: red;
  }

  //MAIN WIDTH HERE!!!!

  .Select__control {
    //margin: auto;
    background: white;
    //width: 100%; //MOD
    //width: calc(100vw - 1344px);
    width: calc(700px- 204.86px);
    width: 491px;
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: row;
    //overflow: hidden;
  }

  .Select__container {
    //color: red;
    //background: blue;
    display: flex;
    color: ${DARK};
    width: 300px;
  }

  .Select__placeholder {
    //font-size: smaller;
    display: flex;
    width: 300px;
    color: #757575;
  }

  .Select__indicator-separator {
    // display: none;
    color: black;
    background: black;
  }

  .Select__dropdown-indicator {
    color: black;
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
    color: black;
    text-align: center;
  }

  /* DROPDOWN MENU */
  .Select__menu {
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
    background: white;
    color: black;
    display: flex;
    flex-direction: column;
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

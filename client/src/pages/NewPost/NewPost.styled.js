import styled from 'styled-components';
import Select from 'react-select';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const CreateFormWrap = styled.div`
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const CreateFormContent = styled.div`
  //border: 2px solid red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 950px;

  @media screen and (max-width: 425px) {
    padding: 10px;
    width: 100%;
  }
`;

export const CreateFormH1 = styled.div`
  /* border: 1px solid yellow; */
  margin-bottom: 25px;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

export const CreateForm = styled.form`
  //border: 2px solid blue;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CreateFormContainer = styled.div`
  padding: 16px;
  background-color: blue;
`;

export const CreateFormLabel = styled.label`
  margin-bottom: 10px;

  flex-direction: column;
  margin-bottom: 8px;
  font-size: 20px;
  color: #fff;
`;

export const CreateFormInput = styled.input`
  border-radius: 15px;
  width: 750px;
  padding: 15px;
  margin-bottom: 10px;
  display: inline-block;
  border: none;
  background: #fff;
  font-size: 16px;
  height: 38px;

  &:focus {
    background-color: #ddd;
    outline: none;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: 100%;
  }
`;

export const CreateFormSelect = styled.select`
  border-radius: 15px;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #fff;
`;

export const CreateFormOption = styled.option`
  background: #fff;
`;

export const CreateFormError = styled.p`
  color: red;
  margin-bottom: 10px;
  margin-top: 0;
  padding: 0;
`;

export const CreateFormButton = styled.button`
  background-color: #04aa6d;
  font-size: 26px;
  color: white;
  padding: 16px 20px;
  margin-top: 0;
  //margin: 5px 0;
  border: none;
  cursor: pointer;
  width: 750px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  :disabled {
    opacity: 0.5;
  }
`;

export const CreateFormLink = styled.a`
  color: ${BRIGHT};
`;

export const CreateText = styled.p`
  text-align: center;
  margin: auto;
  color: #fff;
  font-size: 14px;
`;

export const CreateWrapSingleSelect = styled.div`
  width: calc(70vw / 3);
  justify-content: center;
  align-items: center;
  padding: 0 1px;

  @media screen and (max-width: 1270px) {
    max-width: 440px;
    flex-direction: column;
    margin: 0;
  }

  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;

export const NewCustomSelect = styled(Select)`
  * {
    justify-content: center;
    align-items: center;
    text-align: center;
    //height: 40px;
    border-radius: 15px;
    cursor: text;
  }
  .Select__input-container {
    color: black;
  }

  .Select__control {
    background: white;
    width: 750px;
    border-radius: 15px;
    border: none;
    display: flex;
    flex-direction: row;
  }

  .Select__container {
    display: flex;
    color: black;
    width: 300px;
  }

  .Select__placeholder {
    display: flex;
    color: black;
    width: 300px;
  }

  .Select__indicator-separator {
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
  }

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
    transition: all 0.3s ease-out;
    background: ${DEFAULT};
  }
  .Select__option--is-selected {
    color: ${BRIGHT};
  }
`;

export const WrapperTextArea = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: 750px;
  border-radius: 15px;
  background: white;
  padding: 25px 25px 30px;
`;

export const TextAreaLabelH2 = styled.h2`
  color: ${(props) => (props.color === 'red' ? 'red' : 'black')};
  font-size: 16px;
  text-align: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 330px;
  margin: auto;
  color: black;
  font-size: 16px;
  resize: none;
  outline: none;
  padding: 15px;
  border-radius: 5px;

  margin-top: 10px;
  border-color: green;
  max-height: 330px;

  :is(:focus, :valid) {
    border-width: 2px;
    padding: 10px;
    border-color: ${DEFAULT};
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

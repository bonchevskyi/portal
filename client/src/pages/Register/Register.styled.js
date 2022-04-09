import styled from 'styled-components';
//import { Container } from '../../GlobalStyles';
//import { Link } from 'react-router-dom';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const FormWrap = styled.div`
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  /* border: 2px solid red; */

  height: 100%;
  margin: auto;
  width: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    padding: 10px;
    width: 100%;
  }
`;

export const FormH1 = styled.div`
  /* border: 1px solid blue; */
  margin-bottom: 25px;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

export const Form = styled.form`
  box-sizing: border-box;
  justify-content: center;
`;

export const FormContainer = styled.div`
  padding: 16px;
  background-color: blue;
`;

export const FormLabel = styled.label`
  //border: 1px solid red;

  flex-direction: column;
  font-size: 20px;
  color: #fff;
`;

export const FormInput = styled.input`
  border-radius: 15px;
  width: 450px;
  padding: 15px;
  margin: 5px 0 5px 0;
  display: inline-block;
  border: none;
  background: #fff;

  &:focus {
    background-color: #ddd;
    outline: none;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: 100%;
  }
`;

export const FormSelect = styled.select`
  border-radius: 15px;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #fff;
`;

export const FormOption = styled.option`
  background: #fff;
`;

export const FormError = styled.p`
  color: red;
  margin-bottom: 10px;
  margin-top: 0;
  padding: 0;
`;

export const ErrorWrap = styled.div`
  margin-bottom: 10px;
  margin-top: 5px;
  padding: 0px;
  //border: solid 1px red;
`;

export const FormButton = styled.button`
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 24px;

  &:hover {
    opacity: 1;
  }
`;

export const FormLink = styled.a`
  color: ${DARK};
`;

export const FormSignIn = styled(FormContainer)`
  background-color: #f1f1f1;
  text-align: center;
`;

// CSOACOA

export const Text = styled.p`
  text-align: center;
  margin: auto;
  color: #fff;
  font-size: 14px;
`;

export const Wrap = styled.div`
  color: #fff;
  padding: 40px 0 40px 0;
  background: ${DEFAULT};
`;

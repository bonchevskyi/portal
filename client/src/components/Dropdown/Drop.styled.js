import styled from 'styled-components';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  //background-color: red;
  //background-color: green;
  //box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled.li`
  align-items: center;
  justify-content: center;
  display: inline-block;
  width: 170px;
  border-radius: 4px;
  cursor: pointer;

  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const DropDownBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0;
  width: 170px;
  padding-right: 10px;
  height: 45px;
  cursor: pointer;

  font-size: 17px;
  outline: none;
  border: none;

  border-radius: 4px;
  white-space: nowrap;

  &:hover ${DropDownContent} {
    display: block;
    background: red;
  }

  @media screen and (max-width: 1100px) {
    width: 70vw;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const DropDownItem = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: black;
  width: 170px;
  padding: 12px 16px;
  //background: blue;
  text-align: center;
  text-decoration: none;

  font-size: 17px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${BRIGHT};
    //cursor: pointer;
  }
`;

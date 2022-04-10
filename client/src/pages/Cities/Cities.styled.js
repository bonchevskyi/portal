import styled from 'styled-components';

import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const UniList = styled.div`
  display: grid;
  padding: 10px;
  width: auto;
  grid-template-columns: auto auto auto;
  //grid-template-rows: auto auto auto;
  grid-gap: 15px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const UniListElem = styled.button`
  //border: 2px solid yellow;
  border-radius: 15px;
  padding: 10px;
  font-size: 24px;
  text-align: center;
  margin: 10px;
  margin-left: 0px;
  cursor: pointer;
  background-color: #fff;
  width: 250px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: ${BRIGHT};
  }
`;

export const UniListRow = styled.p`
  display: table;
  clear: both;
`;

export const UniListColumn = styled.p`
  float: left;
  width: 50%;
  padding: 10px;
`;

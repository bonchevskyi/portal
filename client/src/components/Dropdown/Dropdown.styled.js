import styled from 'styled-components';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const DropdownMenu = styled.div`
  background: red;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;

  .li {
    background: rgb(0, 212, 212);
    cursor: pointer;

    &:hover {
      background: rgb(0, 175, 175);
    }
  }

  .clicked {
    display: none;
  }
`;

export const DropdownLink = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;

  @media screen and (max-width: 890px) {
    .fa-caret-down {
      display: none;
    }
  }
`;

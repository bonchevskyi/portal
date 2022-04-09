import styled from 'styled-components';
import { Container, WrapGlobal } from '../../GlobalStyles';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const LoadingWrap = styled.div`
  //height: 100%;
  //margin: auto;
  //padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 400px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center; // centers in the flex direction and the default flex-direction is row
  align-items: center; // centers perpendicular to the flex direction
  height: 100vh; // 100% view height
  width: 100%; // 100% view width
  position: absolute; // so it goes behind the current content
  color: redf;
  padding: 59px 0 59px 0;
  background: ${DEFAULT};
  height: 897px;
`;

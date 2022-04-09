import styled from 'styled-components';
import {
  DEFAULT,
  DARK,
  BRIGHT,
  WrapGlobal,
  Container,
} from '../../GlobalStyles';

export const LoadingWrap = styled(WrapGlobal)`
  //height: 100%;
  //width: 100%;
  /* height: 100%; */
  /* width: 100vw; */

  height: 100vh;
  //position: absolute;
  background: ${DEFAULT};
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  //position: fixed;

  z-index: 999;
  //box-sizing: border-box;
`;

export const LoadingContainer = styled(Container)`
  //display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  color: redf;
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background: red;
  //height: 100vh;
`;

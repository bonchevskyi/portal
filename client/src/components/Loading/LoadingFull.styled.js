import styled from 'styled-components';
import {
  DEFAULT,
  DARK,
  BRIGHT,
  WrapGlobal,
  Container,
} from '../../GlobalStyles';

export const LoadingWrap = styled(WrapGlobal)`
  height: 100vh;
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
  z-index: 999;
`;

export const LoadingContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  color: redf;
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background: red;
`;

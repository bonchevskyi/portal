import styled from 'styled-components';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 400px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  color: redf;
  padding: 59px 0 59px 0;
  background: ${DEFAULT};
  height: 897px;
`;

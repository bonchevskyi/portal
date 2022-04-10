import styled from 'styled-components';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const InfoSec = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 0;
  background: transparent;
`;

export const InfoContainer = styled.div`
  //z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 70vw;
  //margin: auto;
  margin-top: 30px;
  margin-bottom: 0px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const InfoRow = styled.div`
  border: solid 1px white;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  //margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  //border: solid 2px yellow;
  height: 350px;
  margin: 5px;
  padding-right: 15px;
  padding-left: 15px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-basis: 30%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  //border: solid 3px pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 100%;
  justify-content: center;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const InfoButton = styled.button`
  width: 600px;
  height: 50px;
  font-size: 30px;
  border-radius: 15px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 44px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? 'black' : '${DEFAULT}')};

  /* MOD */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ImgWrapper = styled.div`
  //border: solid 1px blue;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0;
  padding: 10px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  //border: 1px solid red;
  padding: 0;
  margin: 0 auto;

  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
  display: inline-block;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

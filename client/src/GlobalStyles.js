import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const DEFAULT = '#1b5c3e';
export const DARK = '#0d2d10';
export const BRIGHT = '#2e9c69';

const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  scroll-behavior: smooth;
  font-family: 'Trebuchet MS', sans-serif;  
  //font-size: 1em;

  &::-webkit-scrollbar {
  width: 0.5vw;
}

&::-webkit-scrollbar-track {
  background-color: ${DEFAULT};
  background-clip: content-box;

}

&::-webkit-scrollbar-thumb {
  background-color: ${DARK};
  border-radius: 0;
  border: none;  

  :hover{
    background-color: ${BRIGHT};
  }
} 


}

body{
  height: 100%;
}
`;

export const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.position === 'centered' ? 'center' : 'normal'};
  align-items: ${(props) => (props.align === 'centered' ? 'center' : 'normal')};
  width: 100%;
  max-width: 70vw; //CHECK
  margin-right: auto;
  margin-left: auto;
  min-height: calc(100vh - 80px - 300px - 10px - 10px);

  @media screen and (max-width: 890px) {
    max-width: 100vw; //CHECK
    padding-left: 0px;
    padding-right: 0px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const WrapGlobal = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${DEFAULT};
`;

export const Button = styled.button`
  width: fit-content;
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#fff' : '#1b5c3e')};
  white-space: nowrap;
  padding: ${({ paddBig }) => (paddBig ? '12px 64px' : '10px 20px')};
  color: black;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-size: 17px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? `${BRIGHT}` : `${DARK}`)};
  }

  @media screen and (max-width: 1100px) {
    width: 700px;
  }
`;

export const ButtonNav = styled(Button)`
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0;
  width: 170px;
  padding-right: 10px;
  height: 45px;

  @media screen and (max-width: 1100px) {
    width: 200px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const FullLine = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${BRIGHT};
  border-radius: 15px;
`;

export const FaqStyle = styled.div`
  height: auto;
  width: 70%;
  border-radius: 15px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .faq-title {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: ${DARK};
    border-radius: 15px;
  }
`;

export default GlobalStyles;

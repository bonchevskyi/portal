import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const DEFAULT = '#1b5c3e';
export const DARK = '#0d2d10';
export const BRIGHT = '#2e9c69';

const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  //padding: 0;
  scroll-behavior: smooth;
  font-family: 'Trebuchet MS', sans-serif;  
  //font-size: 1em;
  //font-size: 1em;

  &::-webkit-scrollbar {
  width: 0.5vw;
  // =======
}

&::-webkit-scrollbar-track {
  background-color: ${DEFAULT};
  //box-shadow: inset 0 0 10px ${DARK};
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
  //min-height: 100vh;
  height: 100%;
  
  //display: flex;
  //flex-direction: column;
  //background: #1b5c3e;   
  //background: ${DEFAULT};  
}
`;

export const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column; //NEW
  justify-content: ${(props) =>
    props.position === 'centered' ? 'center' : 'normal'};
  align-items: ${(props) => (props.align === 'centered' ? 'center' : 'normal')};
  //min-height: 401px; //WAS

  //min-height: calc(100vh - 80px - 300px);
  /* min-height: 50vh; */
  width: 100%;
  max-width: 70vw; //CHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECK
  //margin: auto;
  //margin-top: 30px;
  //margin-bottom: 30px;
  //margin-top: auto;

  margin-right: auto;
  margin-left: auto;

  //background: green; //NEW
  //border: 5px solid green;

  /* position: relative; */
  /* padding-bottom: 60px; */
  /* was padding 200px */

  min-height: calc(100vh - 80px - 300px - 10px - 10px);

  @media screen and (max-width: 890px) {
    //WAS 768 px
    //min-height: 100vh;
    max-width: 100vw; //CHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECK
    padding-left: 0px;
    padding-right: 0px;
    margin-right: auto;
    margin-left: auto;
    //background: red;
  }
`;

export const WrapGlobal = styled.div`
  //color: #fff;
  //padding: 48px 0 48px 0;
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${DEFAULT};
  //min-height: calc(100vh - 80px - 300px);
`;

// export const CenterGlobal = styled.div`
//   display: flex;
//   flex-direction: column; //NEW
//   justify-content: center;
//   align-items: center;
// `;

// export const ButtonNav = styled.button`
//   width: 125px;
//   border-radius: 4px;
//   background: ${({ primary }) => (primary ? '#fff' : '#1b5c3e')};
//   white-space: nowrap;
//   padding: ${({ paddBig }) => (paddBig ? '12px 64px' : '10px 20px')};
//   color: black;
//   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
//   outline: none;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     transition: all 0.3s ease-out;
//     background: #fff;
//     background: ${({ primary }) => (primary ? '#2e9c69' : '#0D2D10')};
//   }

//   @media screen and (max-width: 960px) {
//     width: 100%;
//   }
// `;

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

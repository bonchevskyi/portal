import styled from 'styled-components';
import { Container, Button } from '../../GlobalStyles';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const ProfileContainer = styled(Container)`
  //border: 5px solid red;
  display: flex;
  margin: 0;
`;

export const MainDiv = styled.div`
  //border: 1px solid red;
  margin-top: auto; //MOD to 0 or 10px
  margin-bottom: auto;
  display: flex;
  padding: 10px;
`;

export const DataDiv = styled.div`
  //border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: 10px;
  margin-bottom: 0;
  margin-top: 0;
  width: fit-content;
  padding-bottom: 0;
  padding-top: 0;
`;

export const ProfileDataContainer = styled.div`
  //border: 2px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  padding: 5px 0;
  //margin: auto;     INTERESTING
`;

export const ProfileLabel = styled.h1`
  //border: 1px solid red;
  color: ${DARK};
  font-size: 24px;
  padding-left: 10px;
  text-align: center;
  flex: 2;
`;

export const ProfileDataElement = styled.div`
  //border: 1px solid red;
  color: ${DARK};
  height: auto;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  background: white;
  border: none;
  border-radius: 5px;
  padding: 5px 0;
  flex: 5;
`;

export const AvatarDiv = styled.div`
  //border: 1px solid violet;
  width: 205px;
  min-height: 295px;
  margin-left: auto;
`;

export const Avatar = styled.img`
  border: 3px solid ${DARK}; //NEED
  src: imageName;
  border-radius: 50%;
  margin-top: 50px;
  width: 200px;
  height: 200px;
  flex: 1;
`;

export const Text = styled.p`
  //border: 2px solid orange;
  margin-top: auto;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  border-radius: 15px;
  background: ${DARK};
`;

export const ButtonDiv = styled.div`
  //border: 2px solid red;
  display: flex;
  flex-direction: column;
  width: 10%;
  margin-right: auto;
  margin-left: auto;
`;

export const SingleButton = styled(Button)`
  //border: 2px solid pink;
  display: flex;
  color: ${(props) => (props.color ? props.color : 'white')};
  //color: white;
  background: ${(props) =>
    props.background ? props.background : 'transperent'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  opacity: 0.5;
  font-size: 26px;
  height: auto;

  &:hover {
    background: ${(props) =>
      props.background ? props.background : 'transperent'};
    opacity: 1;
  }
`;

export const DateInfo = styled.div`
  border: none;
  //border: 1px solid orange;
  justify-content: center;
  background: white;
  color: black;
  align-items: center;
  text-align: center;
  max-width: 100%;
  width: 90%;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 0;
`;

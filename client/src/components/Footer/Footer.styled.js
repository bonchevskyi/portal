import styled from 'styled-components';
import { FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const FooterContainer = styled.div`
  background-color: #0d2d10;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  //position: fixed;
  //position: static; //default

  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 890px) {
    height: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const FooterLinksContainer = styled.div`
  //border: 1px solid blue;
  max-width: 1000px;
  width: 100%;
  display: flex;
  //justify-content: center;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //width: 90%;
  }
`;

export const SocialMedia = styled.section`
  //border: 1px solid yellowgreen;
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  margin-top: auto;
`;

export const FooterLinksWrapper = styled.div`
  //border: 1px solid blue;
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  margin: auto;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLinkItems = styled.div`
  //border: 1px solid red;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: left;
  width: 200px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${DEFAULT};
    transition: 0.3s ease-out;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaHandsHelping)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const WrapFooter = styled.div`
  margin-top: auto;
`;

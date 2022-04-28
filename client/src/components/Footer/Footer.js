import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  WrapFooter,
} from './Footer.styled';

function Footer() {
  return (
    <WrapFooter>
      <FooterContainer>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>FAQ</FooterLinkTitle>
              <FooterLink to='/faq'>Czemu powstał?</FooterLink>
              <FooterLink to='/faq'>Dla kogo jest?</FooterLink>
              <FooterLink to='/faq'>Jak to działa?</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Masz pytania?</FooterLinkTitle>
              <FooterLink to='/'>Jak to działa?</FooterLink>
              <FooterLink to='/'>Brakuje twojej uczelni?</FooterLink>
              <FooterLink to='/'>Znalazłeś/łaś błąd?</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Popularne miasta</FooterLinkTitle>
              <FooterLink to='/?city=21'>Rzeszów</FooterLink>
              <FooterLink to='/?city=12'>Kraków</FooterLink>
              <FooterLink to='/?city=26'>Warszawa</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Kontakt</FooterLinkTitle>
              <FooterLink to='/'>Email</FooterLink>
              <FooterLink to='/'>Discord</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialLogo to='/'>
            <SocialIcon />
            StudUniHelp
          </SocialLogo>
          <WebsiteRights>
            StudUniHelp © {new Date().getFullYear()}
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMedia>
      </FooterContainer>
    </WrapFooter>
  );
}

export default Footer;

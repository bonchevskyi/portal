import styled from 'styled-components';
import { FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';
import Dashboard from '../../pages/Dashboard/Dashboard';

export const Nav = styled.nav`
  //width: 100vw; // 100% view width
  width: 100%; // 100% view width
  background: #0d2d10;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;

  z-index: 1;
  /* min-height: 50vh; */
  width: 100%;
  //max-width: 100%;
  max-width: 90vw;
  //max-width: 1700px;
  //max-width: 1300px;

  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
  //background: red;

  /* position: relative; */
  /* padding-bottom: 60px; */
  /* was padding 200px */

  @media screen and (max-width: 1100px) {
    padding-left: 30px;
    padding-right: 30px;
    max-width: 100%;
  }
`;

export const NavLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaHandsHelping)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0d2d10;
    //background: red;
  }
`;

export const NavItem = styled.li`
  //border: 2px solid red;
  height: 80px;
  width: fit-content;
  //text-align: center;
  //justify-content: center;
  //align-items: center;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 1100px) {
    width: 200px;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  //border: 2px solid blue;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1100px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: ${DEFAULT};
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtn = styled.li`
  @media screen and (max-width: 1100px) {
    //border: 2px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 70px;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

export const NavBtnLink = styled(Link)`
  //border: 2px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const NavDropDownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  //padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

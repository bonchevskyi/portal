import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
//import axios from '../../axios-instance';
//import GlobalStyles from '../../GlobalStyles';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';
import { Button, ButtonNav } from '../../GlobalStyles';
//import Drop from '../Dropdown/Drop';
import {
  DropDownBtn,
  DropDownLi,
  DropDownContent,
  DropDownItem,
} from '../Dropdown/Drop.styled';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavDropDownLink,
} from './Navbar.styled';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GrLogout, GrLogin } from 'react-icons/gr';

//AiFillPlusCircle, AiFillPlusSquare

function Navbar() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [dropdown, setDropdown] = useState(false);

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    console.log('<--------------!LOGGING OUT!---------------->');
    axios
      .get(`/logout`)
      .then((response) => {
        //console.log('LOGGING OUT');
        //console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.log('Logout EROOR: ', error);
      });

    setAuth({});
    localStorage.removeItem('auth');
    //localStorage.removeItem('user_id');
  };

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [navbarLoged, setNavbar] = useState(false);

  const [username, setUsername] = useState('');

  //var cleanupFunction = false;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1100) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  const checkNavLogin = async () => {
    //console.log('CHECKING LOGIN IN NAVBAR....');
    try {
      const response = await axios.get('/login');
      //console.log('Response data - ', response?.data);
      setUsername(response?.data?.username);
      //const currentResp = response?.data?.loggedIn;
      if (response?.data?.loggedIn === true) {
        var username = response?.data?.username;
        var role_id = response?.data?.role_id;
        var user_id = response?.data?.user_id;
        setNavbar(true);
        setAuth({ user_id, username, role_id }); //WAS!!!
      } else if (response?.data?.loggedIn === false) {
        setNavbar(false);
        setAuth({});
        localStorage.removeItem('auth');
        //localStorage.removeItem('user_id');
      }
    } catch (error) {
      console.log('Navbar check GET data ERROR: ', error);
    }
  };

  //CHECK LOGIN
  useEffect(() => {
    console.log('WE ARE HERE: ', location?.pathname);
    console.log('FROM:', from);

    checkNavLogin();

    if (Object.keys(auth).length > 0) {
      setNavbar(true);
      setAuth(auth);
    } else {
      setNavbar(false);
    }

    setUsername(auth.username);

    return () => {};
  }, [location]);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              StudUniHelp
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            {navbarLoged ? (
              // =========== AUTHORIZED NAV ==========
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks to='/' onClick={closeMobileMenu}>
                    Szukaj
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='/cities' onClick={closeMobileMenu}>
                    Miasta
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='/regulations' onClick={closeMobileMenu}>
                    Regulamin
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='/faq' onClick={closeMobileMenu}>
                    FAQ
                  </NavLinks>
                </NavItem>

                {/* <ButtonNav primary>
                      <AiOutlinePlusCircle color={DARK} size='30px' />
                      &nbsp; DROPDOWN
                    </ButtonNav> */}

                <NavBtn>
                  {button ? (
                    <NavBtnLink to={`/post/create`}>
                      <ButtonNav primary>
                        &nbsp; DODAJ POST &nbsp;
                        <AiOutlinePlusCircle color={DARK} size='30px' />
                      </ButtonNav>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to={`/post/create`}>
                      <ButtonNav onClick={closeMobileMenu} fontBig primary>
                        &nbsp; DODAJ POST &nbsp;
                        <AiOutlinePlusCircle color={DARK} size='30px' />
                      </ButtonNav>
                    </NavBtnLink>
                  )}
                </NavBtn>
                <NavBtn>
                  <DropDownLi>
                    <NavDropDownLink
                      to={`/profile/${username}`}
                      onClick={closeMobileMenu}
                    >
                      <DropDownBtn>
                        PROFIL &nbsp;
                        <GrLogout color={DARK} size='25px' />
                      </DropDownBtn>
                    </NavDropDownLink>
                    <DropDownContent>
                      <NavDropDownLink to={`/profile/${username}/edit`}>
                        <DropDownItem>Edytuj</DropDownItem>
                      </NavDropDownLink>
                      {/* <NavDropDownLink to={`/profile/${username}/posts`}>
                        <DropDownItem>Moje publikacje</DropDownItem>
                      </NavDropDownLink> */}
                      <NavDropDownLink to={`#`} onClick={logout}>
                        <DropDownItem>Wyloguj</DropDownItem>
                      </NavDropDownLink>
                    </DropDownContent>
                  </DropDownLi>
                </NavBtn>
              </NavMenu>
            ) : (
              // =========== UNAUTHORIZED NAV ==========
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks to='/' onClick={closeMobileMenu}>
                    Na główną
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='/cities' onClick={closeMobileMenu}>
                    Miasta
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='/regulations' onClick={closeMobileMenu}>
                    Regulamin
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='/faq' onClick={closeMobileMenu}>
                    FAQ
                  </NavLinks>
                </NavItem>
                <NavBtn>
                  {button ? (
                    <NavBtnLink to='/login'>
                      <ButtonNav primary>LOGOWANIE</ButtonNav>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to='/login'>
                      <ButtonNav onClick={closeMobileMenu} fontBig primary>
                        <GrLogin color={DARK} size='25px' />
                        &nbsp; LOGOWANIE
                      </ButtonNav>
                    </NavBtnLink>
                  )}
                </NavBtn>
                <NavBtn>
                  {button ? (
                    <NavBtnLink to='/register'>
                      <ButtonNav primary>REJESTRACJA</ButtonNav>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to='/register'>
                      <ButtonNav onClick={closeMobileMenu} fontBig primary>
                        REJESTRACJA
                      </ButtonNav>
                    </NavBtnLink>
                  )}
                </NavBtn>
              </NavMenu>
            )}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

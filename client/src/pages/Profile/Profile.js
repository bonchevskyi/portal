import React, { useState, useEffect } from 'react';
import { Container, WrapGlobal } from '../../GlobalStyles';
import {
  useNavigate,
  useLocation,
  useParams,
  Navigate,
} from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
//import Cookies from 'js-cookie';
//import withAuth from '../../components/withAuth';

import {
  Wrap,
  Text,
  Avatar,
  ProfileContainer,
  ProfileDataElement,
  ProfileLabel,
  ProfileDataContainer,
  MainDiv,
  DataDiv,
  ButtonDiv,
  AvatarDiv,
  SingleButton,
  DateInfo,
} from './Profile.styled';
import useAuth from '../../hooks/useAuth';

//import { ProfileLabel } from '../NewPost/NewPost.styled';

function Profile() {
  const navigate = useNavigate();

  const { auth } = useAuth();

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  const [profileData, setProfileData] = useState({});

  var params = useParams();

  //console.log('Params ====== ', params);
  //const userID = Cookies.get('userID');
  //console.log('USER ID: ', userID);
  // const { itemId, otherParam } = route.params;

  //var navigate = useNavigate();
  //const location = useLocation();

  //console.log(location.userData);

  //console.log('getData = ', userProfile);

  useEffect(() => {
    loadScreen(700);
    const userProfile = params.username;
    //console.log('getData = ', userProfile);
    axios
      .post(`/profile/`, {
        userProfile: userProfile,
      })
      .then((response) => {
        //console.log('Profile response: ', response.data.invalidUser);
        if (response.data.invalidUser === true) {
          navigate('/404');
        } else {
          console.log(response.data[0]);
          setProfileData(response.data[0]);
        }
      });
    return () => {
      //console.log('!!!!!!!CLEANUP !!!!!!!!!!!!!!!!!!!');
      //isMounted = false;
      setIsLoadiing(false);
    };
  }, []);

  const options = {
    // weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  var newCreated = new Date(profileData.created).toLocaleDateString(
    'en-GB',
    options
  );

  var newUpdated = new Date(profileData.updated).toLocaleDateString(
    'en-GB',
    options
  );

  //console.log(newCreated);
  var imageName = require('../../images/avatar-nobg-white.png');

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container position='centered' align='centered'>
            <ProfileContainer>
              <Text>Witaj, {profileData.username}!</Text>
              <MainDiv>
                <AvatarDiv>
                  <Avatar src={imageName}></Avatar>
                  <DateInfo>
                    <p>Konto utworzone:</p>
                    <p>{newCreated}</p>
                    <p>Ostatnia aktualizacja:</p>
                    <p>{newUpdated}</p>
                  </DateInfo>
                </AvatarDiv>
                <DataDiv>
                  <ProfileDataContainer>
                    <ProfileLabel>Imię</ProfileLabel>
                    <ProfileDataElement>
                      {profileData.firstname}
                    </ProfileDataElement>
                  </ProfileDataContainer>

                  <ProfileDataContainer>
                    <ProfileLabel>Nazwisko</ProfileLabel>
                    <ProfileDataElement>
                      {profileData.lastname}
                    </ProfileDataElement>
                  </ProfileDataContainer>

                  {/* <ProfileDataContainer>
                  <ProfileLabel>Role </ProfileLabel>
                  <ProfileDataElement>
                    {profileData.role_name}
                  </ProfileDataElement>
                </ProfileDataContainer> */}

                  <ProfileDataContainer>
                    <ProfileLabel>Miasto </ProfileLabel>
                    <ProfileDataElement>{profileData.city}</ProfileDataElement>
                  </ProfileDataContainer>

                  <ProfileDataContainer>
                    <ProfileLabel>Email </ProfileLabel>
                    <ProfileDataElement>{profileData.email}</ProfileDataElement>
                  </ProfileDataContainer>

                  <ProfileDataContainer>
                    <ProfileLabel>O mnie</ProfileLabel>
                    <ProfileDataElement>
                      {profileData.about
                        ? profileData.about.trim()
                        : 'Brak informacji...'}
                    </ProfileDataElement>
                  </ProfileDataContainer>

                  {/* <ProfileDataContainer>
                  {' '}
                  <ProfileLabel>Created </ProfileLabel>
                  <ProfileDataElement>{profileData.created}</ProfileDataElement>
                </ProfileDataContainer>

                <ProfileDataContainer>
                  <ProfileLabel>Updated </ProfileLabel>
                  <ProfileDataElement>{profileData.updated}</ProfileDataElement>
                </ProfileDataContainer> */}
                </DataDiv>
                {/* <ButtonDiv>
                  <SingleButton background='orange '>EDIT</SingleButton>
                   <SingleButton background='orange'>CHANGE</SingleButton> 
                   <SingleButton background='red'>DELETE</SingleButton> 
                </ButtonDiv> */}
              </MainDiv>
            </ProfileContainer>
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default Profile;

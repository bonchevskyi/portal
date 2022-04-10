import React, { useState, useEffect } from 'react';
import { Container, WrapGlobal } from '../../GlobalStyles';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

import {
  Text,
  Avatar,
  ProfileContainer,
  ProfileDataElement,
  ProfileLabel,
  ProfileDataContainer,
  MainDiv,
  DataDiv,
  AvatarDiv,
  DateInfo,
} from './Profile.styled';
import useAuth from '../../hooks/useAuth';

function Profile() {
  const navigate = useNavigate();

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  const [profileData, setProfileData] = useState({});

  var params = useParams();

  useEffect(() => {
    loadScreen(700);
    const userProfile = params.username;
    axios
      .post(`/profile/`, {
        userProfile: userProfile,
      })
      .then((response) => {
        if (response.data.invalidUser === true) {
          navigate('/404');
        } else {
          setProfileData(response.data[0]);
        }
      });
    return () => {
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
                </DataDiv>
              </MainDiv>
            </ProfileContainer>
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default Profile;

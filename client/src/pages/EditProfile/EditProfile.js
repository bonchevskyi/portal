import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Container, WrapGlobal } from '../../GlobalStyles';
import { useNavigate, useParams } from 'react-router-dom';
import validateData from '../../Validation/ValidateEdit';
import validatePwd from '../../Validation/ValidatePwd';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { FormError } from '../Register/Register.styled';

import {
  Text,
  Avatar,
  ProfileContainer,
  ProfileLabel,
  ProfileDataContainer,
  MainDiv,
  DataDiv,
} from '../Profile/Profile.styled';

import {
  ProfileDataInput,
  EditCustomSelect,
  EditCityLabel,
  EditSaveButton,
  EditButtonsDiv,
  AvatarDivEdit,
} from './EditProfile.styled';

function EditProfile() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const goBack = () => navigate(-1);

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    password2: '',
    about: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);
  const [isDisabledSave, setisDisabledSave] = useState(true);
  const [isPassMenu, setisPassMenu] = useState(false);

  var params = useParams();

  const usernamePar = params.username;

  // =========== FOR CITIES ===========

  const initialValuesCity = {
    id: '',
    name: '',
    selectedCity: [],
  };

  const [selectedCity, setCityOptions] = useState(initialValuesCity);
  const [inputCity, setInputCity] = useState({});

  const getCities = async () => {
    const response = await axios.get('/get-cities');
    const data = response.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.name,
    }));
    setCityOptions(options);
  };

  function clearFields() {
    setisPassMenu(!isPassMenu);
    document.getElementById('password').value = '';
    document.getElementById('password2').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('about').value = '';
    document.getElementById('city').value = '';
  }

  const handleMenuOpenCity = () => {
    //console.log('City MENU was OPENED');
  };

  const handleChangeCity = (e) => {
    setisDisabledSave(false);
    setInputCity({ id: e.value, name: e.label });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    loadScreen(700);
    setisDisabledSave(true);

    if (isPassMenu === true) {
      //console.log('User wanted to save password');
      const resltPwd = validatePwd(formValues);
      setFormErrors(resltPwd);
      setIsSubmit(true);
    } else if (isPassMenu === false) {
      //console.log('User wanted to save data!');
      const resltData = validateData(formValues);
      setFormErrors(resltData);
      setIsSubmit(true);
    }
  };

  var imageName = require('../../images/avatar-nobg-white.png');

  useEffect(() => {
    loadScreen(700);
    getCities();

    return () => {
      //console.log('cleanup edit');
      //setInputCity({});
      //setCityOptions(initialValuesCity);
      //setIsLoadiing(false);
    };
  }, []);

  useEffect(() => {
    setisDisabledSave(true);
    if (
      formValues.fname.trim() ||
      formValues.lname.trim() ||
      formValues.email.trim() ||
      formValues.about.trim() ||
      formValues.password.trim() ||
      formValues.password2.trim()
    ) {
      //console.log('HAVE DATA');
      setisDisabledSave(false);
    }
    return () => {
      //console.log('======= LOADING ======');
      setIsLoadiing(false);
    };
  }, [formValues]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log('=====0 ERRORS======');
      //console.log('Pass menu?', isPassMenu);
      if (isPassMenu === true) {
        const changePassword = async () => {
          try {
            const response = await axios.post('/change-pass', {
              passwordPass: formValues.password,
              user_idPass: auth.user_id,
            });
            const data = response.data;
            //console.log(data);
          } catch (error) {
            console.log('Password change error: ', error);
          }
        };
        changePassword();
        //navigate(`/profile/${usernamePar}`);
        navigate(`/`);
        alert('Password changed successfully!');
      } else if (isPassMenu === false) {
        var objToSend = {};

        if (formValues.fname.trim()) {
          objToSend.firstname = formValues.fname;
        }
        if (formValues.lname.trim()) {
          objToSend.lastname = formValues.lname;
        }
        if (formValues.email.trim()) {
          objToSend.email = formValues.email;
        }
        if (formValues.about.trim()) {
          objToSend.about = formValues.about;
        }
        if (inputCity.id) {
          objToSend.city_id = inputCity.id;
        }

        const checkUniqueEmail = async () => {
          try {
            const response = await axios.post('/unique', {
              email: objToSend.email,
            });
            if (response?.data[0]?.uniqueInfo === 3) {
              formErrors.email = 'Email jest już zarejestrowany!';
              //console.log('Email jest już zarejestrowany!');
              alert('Email jest już zarejestrowany!');
              navigate(`/profile/${usernamePar}/edit`);
              //return errors;
            } else if (response?.data[0]?.uniqueInfo === 4) {
              //console.log('Email is UNIQUE');
            }
          } catch (error) {
            console.log(error);
          }
        };
        checkUniqueEmail();

        const changeData = async () => {
          try {
            const response = await axios.post('/change-data', {
              user_idData: auth.user_id,
              dataObj: objToSend,
            });
            const data = response.data;
            //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>DATA WAS SENT');
          } catch (error) {
            console.log('Data change error: ', error);
          }
        };
        changeData();

        alert('Przesyłanie wprowadzonych danych...');
        navigate(`/profile/${usernamePar}`);
      }
    }
  }, [formErrors]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container position='centered' align='centered'>
            <ProfileContainer>
              <Text>
                Tutaj możesz zmienić swoje dane oraz hasło, {usernamePar}
              </Text>
              <MainDiv>
                <AvatarDivEdit>
                  <Avatar src={imageName}></Avatar>
                  {/* <DateInfo>
                    <EditImgButton>Change Avatar</EditImgButton>
                  </DateInfo> */}
                </AvatarDivEdit>
                {/* PASS OR NO PASS */}
                {isPassMenu ? (
                  <DataDiv>
                    <ProfileDataContainer>
                      <ProfileLabel>Nowe hasło</ProfileLabel>
                      <ProfileDataInput
                        name='password'
                        type='password'
                        id='password'
                        maxLength={16}
                        placeholder={'Nowe hasło...'}
                        onChange={handleChange}
                        defaultValue={formValues.password}
                      ></ProfileDataInput>
                    </ProfileDataContainer>

                    <ProfileDataContainer>
                      <ProfileLabel>Powtórzenie hasła</ProfileLabel>
                      <ProfileDataInput
                        type='password'
                        name='password2'
                        id='password2'
                        defaultValue={formValues.password2}
                        onChange={handleChange}
                        maxLength={16}
                        placeholder='Powtórzenie hasła...'
                      ></ProfileDataInput>
                    </ProfileDataContainer>
                  </DataDiv>
                ) : (
                  <DataDiv>
                    <ProfileDataContainer>
                      <ProfileLabel>Imię</ProfileLabel>
                      <ProfileDataInput
                        name='fname'
                        id='fname'
                        maxLength={32}
                        placeholder={'Imię...'}
                        onChange={handleChange}
                        defaultValue={formValues.fname}
                      ></ProfileDataInput>
                    </ProfileDataContainer>

                    <ProfileDataContainer>
                      <ProfileLabel>Nazwisko</ProfileLabel>
                      <ProfileDataInput
                        name='lname'
                        id='lname'
                        maxLength={32}
                        placeholder={'Nazwisko...'}
                        onChange={handleChange}
                        defaultValue={formValues.lname}
                      ></ProfileDataInput>
                    </ProfileDataContainer>
                    <ProfileDataContainer>
                      <EditCityLabel>Nowe miasto</EditCityLabel>
                      <EditCustomSelect
                        classNamePrefix={'Select'}
                        name='city'
                        id='city'
                        onMenuOpen={handleMenuOpenCity}
                        options={selectedCity}
                        onChange={handleChangeCity}
                        placeholder={'Nowe miasto'}
                        noOptionsMessage={() => 'Nie znaleziono opcji!'}
                        defaultValue={selectedCity.value}
                        require
                      />
                    </ProfileDataContainer>

                    <ProfileDataContainer>
                      <ProfileLabel>Nowy email</ProfileLabel>
                      <ProfileDataInput
                        name='email'
                        type='email'
                        id='email'
                        maxLength={64}
                        placeholder={'Nowy email...'}
                        onChange={handleChange}
                        defaultValue={formValues.email}
                      ></ProfileDataInput>
                    </ProfileDataContainer>

                    <ProfileDataContainer>
                      <ProfileLabel>O mnie</ProfileLabel>
                      <ProfileDataInput
                        name='about'
                        id='about'
                        maxLength={45}
                        placeholder={'O mnie...'}
                        onChange={handleChange}
                        defaultValue={formValues.about}
                      ></ProfileDataInput>
                    </ProfileDataContainer>
                  </DataDiv>
                )}

                {/* <ButtonDiv>
                   <SingleButton background='green'>SAVE</SingleButton> 
                   <SingleButton background='orange'>CHANGE</SingleButton> 
                   <SingleButton background='red'>DELETE</SingleButton> 
                </ButtonDiv> */}
              </MainDiv>
              <EditButtonsDiv>
                <EditSaveButton background='red' onClick={goBack}>
                  ANULUJ
                </EditSaveButton>
                <EditSaveButton
                  background='orange'
                  onClick={() => {
                    clearFields();
                  }}
                >
                  {isPassMenu ? 'ZMIEŃ DANE' : 'ZMIEŃ HASŁO'}
                </EditSaveButton>
                <EditSaveButton
                  background='green'
                  onClick={handleSave}
                  disabled={isDisabledSave}
                >
                  {isPassMenu ? 'ZAPISZ HASŁO' : 'ZAPISZ NOWE DANE'}
                </EditSaveButton>
              </EditButtonsDiv>
            </ProfileContainer>
            <FormError>{formErrors.fname}</FormError>
            <FormError>{formErrors.lname}</FormError>
            <FormError>{formErrors.email}</FormError>
            <FormError>{formErrors.password}</FormError>
            <FormError>{formErrors.password2}</FormError>
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default EditProfile;

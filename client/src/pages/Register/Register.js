import React, { useState, useEffect } from 'react';
import { Container, WrapGlobal } from '../../GlobalStyles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import validate from '../../Validation/ValidateInfo';
//import IsLoadingHOC from '../../components/Loading/IsLoadingHOC';
import Loading from '../../components/Loading/Loading';

import {
  Form,
  FormButton,
  FormContent,
  FormLabel,
  FormInput,
  FormSelect,
  FormOption,
  FormH1,
  FormError,
  Wrap,
  FormLink,
  Text,
  ErrorWrap,
} from './Register.styled';

function Register() {
  var navigate = useNavigate();
  //const { setLoading } = props;

  //GET cities from DB
  const [cityList, setCityList] = useState([]);

  const getCities = () => {
    axios.get('/get-cities').then((response) => {
      setCityList(response.data);
      //console.log(response);
    });
  };
  //===================================

  // const displayCities = (cityList) => {
  //   return cityList.map((val, key) => <FormOption value={val.id}>{val.name}</FormOption>);
  // };

  // var select = document.getElementById('city');
  // var value = select.options[select.selectedIndex].value;

  //VALIDATE NEW
  const initialValues = {
    username: '',
    email: '',
    password: '',
    password2: '',
    fname: '',
    lname: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selects, setSelects] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoadiing(false);
  //   }, 2500);
  // });

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //setFormErrors(formErrors);
    //console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadScreen(700);
    const reslt = validate(formValues);
    //console.log('======= RESULT HANDLE: ', reslt);
    //console.log('RESULT: ', reslt);
    //console.log('reslt.username = ', reslt.username);
    setFormErrors(reslt);
    //formErrors.username = reslt.username;
    //console.log('USERNAME in handleSubmit - ', formErrors.username);
    //console.log('Form errors handle submit ', formErrors);
    setIsSubmit(true);
  };

  //console.log('Form errors outside handle submit', formErrors);

  useEffect(() => {
    loadScreen(700);
    getCities();
    //setLoading(true);
    return () => {
      console.log(
        '!!!!!!!!!!!!!!!!!!!!!!!!!!CLEANUP REGISTER!!!!!!!!!!!!!!!!!!!'
      );
      //isMounted = false;
      setIsLoadiing(false);
    };
  }, []);

  useEffect(() => {
    console.log('>>>>>FORM ERRORS CHANGED!<<<<<<');
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const registerUser = async () => {
        try {
          const response = await axios.post('/register', {
            username: formValues.username,
            password: formValues.password,
            email: formValues.email,
            city_id: selects,
            fname: formValues.fname,
            lname: formValues.lname,
          });
          console.log('Registered successfully!');
          navigate('/login');
        } catch (error) {
          console.log('Register error: ', error);
        }
      };
      registerUser();
    }
  }, [formErrors]);

  //console.log('=== Form errors before RETURN', formErrors.username);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container position='centered' align='centered'>
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className='ui message success'>REGISTERED successfully</div>
            ) : (
              <div></div>
            )} */}
            <FormContent>
              <FormH1>Rejestracja</FormH1>
              <Form onSubmit={handleSubmit}>
                <FormLabel htmlFor='for'>Nazwa użytkownika</FormLabel>
                <FormInput
                  type='text'
                  name='username'
                  placeholder='Nazwa użytkownika...'
                  value={formValues.username}
                  onChange={handleChange}
                ></FormInput>
                <ErrorWrap>
                  <FormError>{formErrors.username}</FormError>
                </ErrorWrap>

                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput
                  type='text'
                  name='email'
                  placeholder='Email...'
                  value={formValues.email}
                  onChange={handleChange}
                ></FormInput>
                <ErrorWrap>
                  <FormError>{formErrors.email}</FormError>
                </ErrorWrap>

                <FormLabel htmlFor='for'>Hasło</FormLabel>
                <FormInput
                  type='password'
                  name='password'
                  placeholder='Hasło...'
                  value={formValues.password}
                  onChange={handleChange}
                ></FormInput>
                <ErrorWrap>
                  <FormError>{formErrors.password}</FormError>
                </ErrorWrap>

                <FormLabel htmlFor='for'>Powtórz hasło</FormLabel>
                <FormInput
                  type='password'
                  name='password2'
                  placeholder='Powtórz hasło...'
                  value={formValues.password2}
                  onChange={handleChange}
                ></FormInput>
                <FormError>{formErrors.password2}</FormError>

                <FormLabel htmlFor='for'>Miasto</FormLabel>
                <FormSelect
                  value={selects}
                  onChange={(e) => setSelects(e.target.value)}
                  type='select'
                  name='city'
                  placeholder=''
                  required
                >
                  {cityList.map((val, key) => (
                    <FormOption key={val.id} value={val.id}>
                      {val.name}
                    </FormOption>
                  ))}
                </FormSelect>

                <FormLabel htmlFor='for'>Imię (nieobowiązkowe)</FormLabel>
                <FormInput
                  type='text'
                  name='fname'
                  placeholder='Imię...'
                  value={formValues.fname}
                  onChange={handleChange}
                ></FormInput>
                <FormError>{formErrors.fname}</FormError>

                <FormLabel htmlFor='for'>Nazwisko (nieobowiązkowe)</FormLabel>
                <FormInput
                  type='text'
                  name='lname'
                  placeholder='Nazwisko...'
                  value={formValues.lname}
                  onChange={handleChange}
                ></FormInput>
                <FormError>{formErrors.lname}</FormError>
                {/* <Text style={{ color: 'orange' }}>* - Pole wymagane</Text> */}
                <Text>
                  Tworząc konto, wyrażasz zgodę na nasze{' '}
                  <FormLink href='#'>Warunki & Prywatność</FormLink>
                </Text>
                <FormButton type='submit'>Stwórz konto</FormButton>

                <Text>
                  Już masz konto? <FormLink href='/login'>Logowanie</FormLink>
                </Text>
              </Form>
            </FormContent>
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default Register;

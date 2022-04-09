import { useState, useEffect } from 'react';
import { Container, WrapGlobal } from '../../GlobalStyles';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

//import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import validate from '../../Validation/ValidateInfo';
import {
  Form,
  FormButton,
  FormContent,
  FormLabel,
  FormInput,
  FormH1,
  FormError,
  FormLink,
  Text,
  Wrap,
} from './Login.styled';

function Login() {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  {
    /* ... */
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role_ID, setRoleID] = useState(0);
  //var role_id = 0;

  const [loginStatus, setLoginStatus] = useState('');
  const [userData, setUserData] = useState('');

  const [isLoading, setIsLoadiing] = useState(false);

  //const { signin } = useAuth();

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  const loginUser = async (e) => {
    loadScreen(700);
    e.preventDefault();

    //console.log('Username = ', username);
    //console.log('Password = ', password);

    if (!username.trim() || !password.trim()) {
      setLoginStatus('Provide profile or username!');
    } else {
      try {
        const response = await axios.post('/login', {
          username: username,
          password: password,
        });
        if (!Array.isArray(response.data)) {
          setLoginStatus(response.data);
          //console.log(Array.isArray(response.data));
        } else {
          //console.log('==== Response DATA =====', response.data[0]);

          //console.log('DATA: ', response.data[0]);
          setLoginStatus(response?.data[0]?.username);
          setRoleID(response?.data[0]?.role_id);
          //console.log('RESP ID');
          //console.log(response?.data[0]?.role_id);
          var role_id = response?.data[0]?.role_id;

          var user_id = response?.data[0]?.id;

          //console.log(user_id);
          setUserData(response.data[0]);

          const authObj = { user_id, username, role_id };

          setAuth({ user_id, username, role_id });
          localStorage.setItem('auth', JSON.stringify(authObj));
          //localStorage.setItem('user_id', JSON.stringify({ user_id }));

          //signin(username, () => navigate(from, { replace: true }));

          console.log('HERE we navigate: ', from);

          navigate(from, { replace: true });

          //navigate('/profile');
          //console.log('User info:'userData);
          //gotoProfile(response.data[0].username);
        }
      } catch (error) {
        console.log('Login POST data ERROR: ', error);
      }
    }
  };

  useEffect(() => {
    loadScreen(700);

    if (Object.keys(auth).length > 0) {
      console.log('ALREADY LOGED IN!');
      navigate(from, { replace: true });
    }

    return () => {
      setIsLoadiing(false);
    };
  }, []);

  const gotoProfile = (userData) => {
    //console.log('Sending data: ', userData);
    //console.log('Sending username: ', userData.username);
    //navigate('/profile', { state: userData });

    navigate(`/profile/${userData}`);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container position='centered'>
            <FormContent>
              <FormH1>Logowanie</FormH1>
              <Form onSubmit={loginUser}>
                <FormLabel htmlFor='username'>Nazwa użytkownika</FormLabel>
                <FormInput
                  type='text'
                  name='username'
                  placeholder='Nazwa użytkownika...'
                  onChange={(e) => setUsername(e.target.value)}
                ></FormInput>

                <FormLabel htmlFor='password'>Hasłó</FormLabel>
                <FormInput
                  type='password'
                  name='password'
                  placeholder='Hasłó...'
                  onChange={(e) => setPassword(e.target.value)}
                ></FormInput>
                <FormError>{loginStatus}</FormError>

                <p></p>
                <FormButton type='submit'>Zaloguj się</FormButton>
                <Text>
                  Jeszcze nie masz konta? &nbsp;
                  <FormLink href='/register'>Rejestracja</FormLink>
                </Text>
              </Form>
            </FormContent>
          </Container>
        </WrapGlobal>
      )}

      {}
    </>
  );
}

export default Login;

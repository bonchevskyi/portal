import axios from 'axios';

export default function ValidateInfo(values) {
  const errors = {};
  const usernameRegex = /^[a-zA-Z0-9\-_]+$/;

  // CHECK FOR UNIQUE USERNAME AND EMAIl

  const checkUniqueUsername = async () => {
    try {
      const response = await axios.post('/unique', {
        username: values.username,
      });
      if (response?.data[0]?.uniqueInfo === 1) {
        console.log('Username NOT OK');
        errors.username = 'Username is already taken!';
        return errors;
      } else if (response?.data[0]?.uniqueInfo === 2) {
        //console.log('Username is UNIQUE');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkUniqueEmail = async () => {
    try {
      const response = await axios.post('/unique', {
        email: values.email,
      });
      if (response?.data[0]?.uniqueInfo === 3) {
        console.log('email NOT OK');
        errors.email = 'Email jest już zarejestrowany!';
        return errors;
      } else if (response?.data[0]?.uniqueInfo === 4) {
        //console.log('Email is UNIQUE');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Username validation
  if (!values.username.trim()) {
    errors.username = 'Nazwa użytkownika jest wymagana!';
  } else if (!usernameRegex.test(values.username.trim())) {
    errors.username = 'Dozwolone znaki: (a-z), (A-Z), (0-9), "_", "-" ';
  } else if (values.username.length < 3) {
    errors.username = 'Nazwa użytkownika musi mieć minimum 3 znaki!';
  } else if (values.username.length > 16) {
    errors.username = 'Nazwa użytkownika musi mieć maksymalnie 16 znaków!';
  } else if (values.username.trim()) {
    checkUniqueUsername();
  }

  //Email validation
  if (!values.email.trim()) {
    errors.email = 'Email jest wymagany!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email jest nieprawidłowy!';
  } else if (values.email.trim()) {
    checkUniqueEmail();
  }

  //Password validation
  if (!values.password.trim()) {
    errors.password = 'Hasło jest wymagane!';
  } else if (values.password.length < 6) {
    errors.password = 'Hasło musi mieć minimum 6 znaków!';
  } else if (values.password.length > 16) {
    errors.password = 'Hasło musi mieć maksymaknie 16 znaków!';
  }

  //Password match validation
  if (!values.password2.trim()) {
    errors.password2 = 'Powtórzenie hasła jest wymagane!';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Hasła nie pasują do siebie!';
  }

  if (/\d/.test(values.fname)) {
    errors.fname = 'Imię jest nieprawidłowe!';
  }

  if (/\d/.test(values.lname)) {
    errors.lname = 'Nazwisko jest nieprawidłowe!';
  }

  return errors;
}

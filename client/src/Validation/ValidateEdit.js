import axios from 'axios';

export default function ValidateEdit(values) {
  const errors = {};

  const checkUniqueEmail = async () => {
    try {
      const response = await axios.post('/unique', {
        email: values.email,
      });
      if (response?.data[0]?.uniqueInfo === 3) {
        errors.email = 'Email jest już zarejestrowany!';
        return errors;
      } else if (response?.data[0]?.uniqueInfo === 4) {
        //console.log('Email is UNIQUE');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (values.email.trim()) {
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email jest nieprawidłowy!';
    } else if (values.email) {
      checkUniqueEmail();
    }
  }

  if (/\d/.test(values.fname)) {
    errors.fname = 'Imię jest nieprawidłowe!';
  }

  if (/\d/.test(values.lname)) {
    errors.lname = 'Nazwisko jest nieprawidłowe!';
  }

  return errors;
}

import axios from 'axios';

export default function ValidateEdit(values) {
  //const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errors = {};

  const checkUniqueEmail = async () => {
    try {
      const response = await axios.post('/unique', {
        email: values.email,
      });
      if (response?.data[0]?.uniqueInfo === 3) {
        //console.log('email NOT OK');
        errors.email = 'Email jest już zarejestrowany!';
        return errors;
      } else if (response?.data[0]?.uniqueInfo === 4) {
        //console.log('Email is UNIQUE');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Email validation
  //console.log('EEEEEEEEEEEEEEEEEEEEEEEEEE');
  //console.log(values.email);
  //console.log(values.email == 0);

  if (values.email.trim()) {
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email jest nieprawidłowy!';
    } else if (values.email) {
      //console.log('TRIMMMMM', values.email);
      checkUniqueEmail();
    }
  }

  // /\d/.test("Hello123World!")    TRUE

  if (/\d/.test(values.fname)) {
    errors.fname = 'Imię jest nieprawidłowe!';
  }

  if (/\d/.test(values.lname)) {
    errors.lname = 'Nazwisko jest nieprawidłowe!';
  }

  //console.log('===========ERRORS IN DATA BEFORE RETURN: ', errors);

  return errors;
}

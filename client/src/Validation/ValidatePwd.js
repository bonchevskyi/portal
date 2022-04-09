export default function ValidateEdit(values) {
  const errors = {};

  //Password validation
  if (values.password.length < 6) {
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

  console.log('===========ERRORS IN PWD BEFORE RETURN: ', errors);

  return errors;
}

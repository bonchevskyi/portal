import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { Container, WrapGlobal } from '../../GlobalStyles';
import {
  CreateForm,
  CreateFormContent,
  CreateFormH1,
  CreateFormLabel,
  CreateFormInput,
  CreateFormButton,
  CreateFormSelect,
  CreateText,
  CreateFormError,
  CreateFormLink,
  NewCustomSelect,
  WrapperTextArea,
  TextArea,
  TextAreaLabelH2,
} from './NewPost.styled';

function NewPost() {
  const navigate = useNavigate();

  const [isDisabledUni, setisDisabledUni] = useState(true);
  const [isDisabledDep, setisDisabledDep] = useState(true);
  const [isDisabledSearch, setisDisabledSearch] = useState(true);

  const [charCountArea, setCharCountArea] = useState(0);
  const [charCountTitle, setCharCountTitle] = useState(0);
  const [title, setTitle] = useState('');
  const [textarea, setTextarea] = useState('');
  const [textareaColor, setTextareaColor] = useState('');
  const [titleColor, setTitleColor] = useState('');

  const { auth } = useAuth();

  //const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(() => {
    const json = localStorage.getItem('formValues');
    const saved = JSON.parse(json);
    return saved || {};
  });

  // const [charCounts, setCharCounts] = useState(() => {
  //   const json = localStorage.getItem('charCounts');
  //   const saved = JSON.parse(json);
  //   return saved || {};
  // });

  //const [title, setTitle] = useState('');

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    //console.log('LOADING STARTED');
    setTimeout(() => {
      setIsLoadiing(false);
      //console.log('LOADING ENDED');
    }, timeMS);
  };

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

  const handleMenuOpenCity = () => {
    console.log('MENU City was OPENED');
  };

  const handleChangeCity = (e) => {
    console.log('City was selected');

    //check
    setInputCity({ id: e.value, name: e.label }); //dawadaw
    if (e.value) getUniversities(e.value); //damn
    setInputUni({});
    setUniOptions(initialValuesUni);
    setisDisabledUni(false);
    setInputDep({});
    setDepOptions(initialValuesDep);
    setisDisabledDep(true);
  };

  // =========== FOR UNIVERSITY ===========

  const initialValuesUni = {
    id: '',
    name: '',
    selectedUni: [],
  };

  const [selectedUni, setUniOptions] = useState(initialValuesUni);
  const [inputUni, setInputUni] = useState({});

  const getUniversities = async (cityID) => {
    const response = await axios.post('/get-universities', { city_id: cityID });
    const data = response.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.name,
    }));
    setUniOptions(options);
  };

  const handleChangeUniversity = (e) => {
    console.log('Uni was selected');
    setInputUni({ id: e.value, name: e.label });
    getDepartments(e.value);
    setInputDep({});
    setDepOptions(initialValuesDep);
    setisDisabledDep(false);
  };

  // =========== FOR DEPARTMENT ===========

  const initialValuesDep = {
    id: '',
    name: '',
    selectedDep: [],
  };

  const [selectedDep, setDepOptions] = useState(initialValuesDep);
  const [inputDep, setInputDep] = useState({});

  const getDepartments = async (uniID) => {
    const response = await axios.post('/get-departments', {
      university_id: uniID,
    });
    const data = response.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.name,
    }));
    setDepOptions(options);
  };

  const handleChangeDepartment = (e) => {
    console.log('Dep was selected');
    setInputDep({ id: e.value, name: e.label });
    setisDisabledSearch(false);
  };

  // ==============================================

  const charMaxTitle = 158;
  const charMaxArea = 8192;

  // const handleErrors = () => {
  //   //console.log('Error COLOR CHANGE');
  //   if (charCountTitle > charMaxTitle) {
  //     setTitleColor('red');
  //     setFormErrors({ title: 'Too many chars in TITLE' });
  //   } else if (charCountTitle <= charMaxTitle) {
  //     setTitleColor('');
  //   }

  //   if (charCountArea > charMaxArea) {
  //     setTextareaColor('red');
  //   } else if (charCountArea <= charMaxArea) {
  //     setTextareaColor('');
  //   }
  // };

  //
  const createPost = async (e) => {
    e.preventDefault();
    loadScreen(700);
    //console.log('CREATING POST!');
    //console.log(title);
    //console.log(textarea);
    //console.log(inputCity.id);
    //console.log(inputUni.id);
    //console.log(inputDep.id);

    //console.log('====formValues===');
    //console.log(formValues);
    localStorage.setItem('formValues', JSON.stringify(formValues));
    // localStorage.setItem(
    //   'charCounts',
    //   JSON.stringify({
    //     charCountTitle: charCountTitle,
    //     charCountArea: charCountArea,
    //   })
    // );

    if (
      Object.keys(inputCity).length > 0 &&
      Object.keys(inputUni).length > 0 &&
      Object.keys(inputDep).length > 0
    ) {
      console.log('ALL VALUES SELECTED!');
      localStorage.removeItem('formValues');

      //const jsonID = localStorage.getItem('user_id');
      //const user_id = JSON.parse(jsonID);
      //const user_id = auth.user_id;

      //console.log('ABOUT USER_ID');
      ///console.log(user_id);
      //console.log(typeof user_id);

      // const jsonAuth = localStorage.getItem('auth');
      // const auth = JSON.parse(jsonAuth);

      var username = auth.username;

      try {
        const response = await axios.post('/post/new', {
          user_id: auth.user_id,
          title: title,
          text: textarea,
          city_id: inputCity.id,
          university_id: inputUni.id,
          department_id: inputDep.id,
          //major_id: inputMajor.id
        });
        //console.log('RESPONSE POST');
        //console.log(response?.data);

        //console.log('before navigate', username);

        alert('Post created succesfully! Redirecting...');
        navigate(`/profile/${username}`);
      } catch (error) {
        console.log('Create POST ERROR: ', error);
      }
    } else {
      console.log('SELECT ALL VALUES!');
    }
  };

  useEffect(() => {
    loadScreen(700);
    getCities();
    //setInputVal('STARTED');
    setTitle('');
    setTextarea('');
    setisDisabledSearch(true);

    //const jsonFormData = localStorage.getItem('formValues');
    //const formData = JSON.parse(jsonFormData);

    // const jsonCharCount = localStorage.getItem('charCounts');
    //const charCounts = JSON.parse(jsonCharCount);

    //setCharCountArea(charCounts.charCountArea);
    //setCharCountTitle(charCounts.charCountTitle);

    //console.log(formData);

    // if (Object.keys(formData).length > 0) {
    //   console.log('YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');
    //   setTitle(formData.title);
    //   setTextarea(formData.textarea);
    // }

    // console.log(' ====== TEXTAREA ====');
    // const textareaH = document.getElementById('textarea');
    // console.log(textarea);
    // textareaH.addEventListener('keyup', (e) => {
    //   textareaH.style.height = '60px';
    //   let scHeight = e.target.scrollHeight;
    //   console.log('HEIGHT', scHeight);
    //   textareaH.style.height = `${scHeight}px`;
    // });

    return () => {
      console.log(
        '!!!!!!!!!!!!!!!!!!!!!!!!!!CLEANUP DASHBOARD!!!!!!!!!!!!!!!!!!!'
      );
      setInputCity({});
      setCityOptions(initialValuesCity);
      setInputUni({});
      setUniOptions(initialValuesUni);
      setInputDep({});
      setDepOptions(initialValuesDep);
      setIsLoadiing(false);
    };
  }, []);

  // useEffect(() => {
  //   handleErrors();
  // }, [charCountTitle, charCountArea]);

  useEffect(() => {
    //console.log('===== TITLE OR TEXTAREA CHANGED =========');
    setFormValues({ title: title, textarea: textarea });
    // const timer = setTimeout(() => {
    //   console.log('TIMEOUT ENDED');
    //   //setCount('Timeout called!');
    // }, 1000);
    // return () => clearTimeout(timer);
  }, [title, textarea]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container>
            <CreateFormContent>
              {/* <CreateFormH1>TWORZENIE NOWEJ PUBLIKACJI</CreateFormH1> */}
              {/* <Form onSubmit={loginUser}> */}
              <CreateForm onSubmit={createPost}>
                <CreateFormLabel htmlFor='title'>Tytuł</CreateFormLabel>
                <TextAreaLabelH2 color={titleColor}>
                  Liczba znaków: {charCountTitle} (max: {charMaxTitle})
                </TextAreaLabelH2>
                <br></br>
                <CreateFormInput
                  type='text'
                  name='title'
                  maxLength={charMaxTitle}
                  placeholder='Title...'
                  value={title}
                  onChange={(e) => {
                    setCharCountTitle(e.target.value.length);
                    setTitle(e.target.value);
                  }}
                  required
                ></CreateFormInput>

                {/* ========= TEXT AREA =========== */}

                <CreateFormLabel htmlFor='area'>Treść</CreateFormLabel>
                <WrapperTextArea>
                  <TextAreaLabelH2 color={textareaColor}>
                    Liczba znaków: {charCountArea} (max: {charMaxArea})
                  </TextAreaLabelH2>

                  <TextArea
                    //maxlength='50'
                    maxLength={charMaxArea}
                    id='textarea'
                    value={textarea}
                    placeholder='Opisz swoje pytanie...'
                    onChange={(e) => {
                      setCharCountArea(e.target.value.length);
                      setTextarea(e.target.value);
                    }}
                    required
                  ></TextArea>
                </WrapperTextArea>

                {/* ========= TEXT AREA =========== */}
                <br />

                <CreateFormLabel htmlFor='title'>
                  Wybierz odpowiednie dla Ciebie opcje
                </CreateFormLabel>
                <NewCustomSelect
                  classNamePrefix={'Select'}
                  //name='city'
                  onMenuOpen={handleMenuOpenCity}
                  options={selectedCity}
                  onChange={handleChangeCity}
                  placeholder={'Wybierz Miasto'}
                  noOptionsMessage={() => 'Nie znaleziono opcji!'}
                  //email = el)}
                  // cacheOptions
                  // defaultOptions
                  value={selectedCity.value}
                  //getOptionLabel={(e) => console.log(e)}
                  //getOptionValue={(e) => console.log(e)}
                  // loadOptions={cityList}
                  // onInputChange={handleInputChange}
                />
                <br />
                <NewCustomSelect
                  classNamePrefix={'Select'}
                  // key={`my_unique_select_key__${JSON.stringify(
                  //   selectedUni.value
                  // )}`}
                  // id={'city_label_ID'}
                  //inputId={inputID}
                  options={selectedUni}
                  onChange={handleChangeUniversity}
                  placeholder={'Wybierz Uniwersytet'}
                  noOptionsMessage={() => 'Nie znaleziono opcji!'}
                  isDisabled={isDisabledUni}
                  //inputValue={inputVal}
                  //onInputChange={}
                  //isDisabledUni
                  // cacheOptions
                  // defaultOptions
                  value={selectedUni.value}
                  //getOptionLabel={(e) => console.log(e)}
                  //getOptionValue={(e) => console.log(e)}
                  // loadOptions={cityList}
                  // onInputChange={handleInputChange}
                  // onChange={handleChange}
                />
                <br />

                <NewCustomSelect
                  classNamePrefix={'Select'}
                  options={selectedDep}
                  onChange={handleChangeDepartment}
                  placeholder={'Wybierz Wydział'}
                  noOptionsMessage={() => 'Nie znaleziono opcji!'}
                  isDisabled={isDisabledDep}
                  // cacheOptions
                  // defaultOptions
                  value={selectedDep.value}
                  //getOptionLabel={(e) => console.log(e)}
                  //getOptionValue={(e) => console.log(e)}
                  // loadOptions={cityList}
                  // onInputChange={handleInputChange}
                  // onChange={handleChange}
                />
                <br />

                {/* <CreateFormError>{formErrors.title}</CreateFormError> */}
                {/* <CreateFormError>{formErrors.text}</CreateFormError> */}
                <CreateFormButton type='submit' disabled={isDisabledSearch}>
                  UTWÓRZ PUBLIKACJE
                </CreateFormButton>
                {/* <CreateText>
                Jeszcze nie masz konta? &nbsp;
                <CreateFormLink href='/register'>Załóż konto</CreateFormLink>
              </CreateText> */}
              </CreateForm>
            </CreateFormContent>
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default NewPost;

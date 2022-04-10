import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { Container, WrapGlobal } from '../../GlobalStyles';
import {
  CreateForm,
  CreateFormContent,
  CreateFormLabel,
  CreateFormInput,
  CreateFormButton,
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

  const [formValues, setFormValues] = useState(() => {
    const json = localStorage.getItem('formValues');
    const saved = JSON.parse(json);
    return saved || {};
  });

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
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
    setInputCity({ id: e.value, name: e.label });
    if (e.value) getUniversities(e.value);
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

  // ===========================================

  const charMaxTitle = 158;
  const charMaxArea = 8192;

  const createPost = async (e) => {
    e.preventDefault();
    loadScreen(700);
    localStorage.setItem('formValues', JSON.stringify(formValues));

    if (
      Object.keys(inputCity).length > 0 &&
      Object.keys(inputUni).length > 0 &&
      Object.keys(inputDep).length > 0
    ) {
      console.log('ALL VALUES SELECTED!');
      localStorage.removeItem('formValues');

      var username = auth.username;

      try {
        const response = await axios.post('/post/new', {
          user_id: auth.user_id,
          title: title,
          text: textarea,
          city_id: inputCity.id,
          university_id: inputUni.id,
          department_id: inputDep.id,
        });
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
    setTitle('');
    setTextarea('');
    setisDisabledSearch(true);

    return () => {
      setInputCity({});
      setCityOptions(initialValuesCity);
      setInputUni({});
      setUniOptions(initialValuesUni);
      setInputDep({});
      setDepOptions(initialValuesDep);
      setIsLoadiing(false);
    };
  }, []);

  useEffect(() => {
    setFormValues({ title: title, textarea: textarea });
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

                <CreateFormLabel htmlFor='area'>Treść</CreateFormLabel>
                <WrapperTextArea>
                  <TextAreaLabelH2 color={textareaColor}>
                    Liczba znaków: {charCountArea} (max: {charMaxArea})
                  </TextAreaLabelH2>

                  <TextArea
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
                <br />
                <CreateFormLabel htmlFor='title'>
                  Wybierz odpowiednie dla Ciebie opcje
                </CreateFormLabel>
                <NewCustomSelect
                  classNamePrefix={'Select'}
                  onMenuOpen={handleMenuOpenCity}
                  options={selectedCity}
                  onChange={handleChangeCity}
                  placeholder={'Wybierz Miasto'}
                  noOptionsMessage={() => 'Nie znaleziono opcji!'}
                  value={selectedCity.value}
                />
                <br />
                <NewCustomSelect
                  classNamePrefix={'Select'}
                  options={selectedUni}
                  onChange={handleChangeUniversity}
                  placeholder={'Wybierz Uniwersytet'}
                  noOptionsMessage={() => 'Nie znaleziono opcji!'}
                  isDisabled={isDisabledUni}
                  value={selectedUni.value}
                />
                <br />

                <NewCustomSelect
                  classNamePrefix={'Select'}
                  options={selectedDep}
                  onChange={handleChangeDepartment}
                  placeholder={'Wybierz Wydział'}
                  noOptionsMessage={() => 'Nie znaleziono opcji!'}
                  isDisabled={isDisabledDep}
                  value={selectedDep.value}
                />
                <br />
                <CreateFormButton type='submit' disabled={isDisabledSearch}>
                  UTWÓRZ PUBLIKACJE
                </CreateFormButton>
              </CreateForm>
            </CreateFormContent>
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default NewPost;

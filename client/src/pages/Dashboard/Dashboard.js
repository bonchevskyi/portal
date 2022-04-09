import React, { useEffect } from 'react';
import {
  Link,
  useSearchParams,
  useParams,
  useLocation,
} from 'react-router-dom';
import { Container, WrapGlobal } from '../../GlobalStyles';
import { useState } from 'react';
//import SelectSearch from 'react-select-search';
//import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import Drop from '../../components/Dropdown/Drop';

import {
  CustomSelect,
  DataContainer,
  SelectsContainer,
  WrapSingleSelect,
  WrapCitySelect,
  SearchButton,
  Search,
  DataDiv,
  DataAvatarDiv,
  DataAvatar,
  DataPostTitle,
  DataPostText,
  DataInfoDiv,
  WrapRightBoth,
  PostStats,
  DataPostPath,
  WrapRightBottom,
  WrapRightTop,
  WrapBoth,
  ButtonFull,
  HoverData,
  HoverDiv,
  DataTopWrap,
  DataPostButton,
} from './Dashboard.styled';

import { Avatar, AvatarDiv } from '../Profile/Profile.styled';
import { InfoSection } from '../../components';
import {
  dashboardLandingObj,
  dashboardNoDataObj,
} from '../../components/InfoSection/Data';

const Dashboard = () => {
  const [isDisabledUni, setisDisabledUni] = useState(true);
  const [isDisabledDep, setisDisabledDep] = useState(true);
  const [isDataZero, setisDataZero] = useState(false);

  const [newCreated, setNewCreated] = useState('');
  const [newUpdated, setNewUpdated] = useState('');

  const [defaultCityLabel, setDefaultCityLabel] = useState('');
  const [defaultUniversityLabel, setDefaultUniversityLabel] = useState('');
  const [defaultDepartmentLabel, setDefaultDepartmentLabel] = useState('');

  const [showDiv, setShowDiv] = useState(false);

  //var urlParams = useParams();
  //console.log('=============== PARAMS IN DASH: ', params);

  const { search } = useLocation();
  console.log('=========SEARCH LOCATION PARAMS IN DASH', search);

  const [searchParams, setSearchParams] = useSearchParams({});
  const [currentParams, setCurrentParams] = useSearchParams({});

  const cityParam = parseInt(searchParams.get('city'));
  const uniParam = parseInt(searchParams.get('university'));
  const depParam = parseInt(searchParams.get('department'));

  console.log('SEARCH PARAMS: ', [cityParam, uniParam, depParam]);

  //console.log('ENTRIES');
  //console.log(searchParams.entries());

  //let params = useSearchParams({});

  //const [searchParams] = useSearchParams();

  const [inputVal, setInputVal] = useState('');

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState();

  const [isLoading, setIsLoadiing] = useState(false);
  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    //console.log('LOADING STARTED');
    setTimeout(() => {
      setIsLoadiing(false);
      //console.log('LOADING ENDED');
    }, timeMS);
  };

  const getDefaultCityLabel = async () => {
    if (cityParam) {
      const response = await axios.post('/get-city-label', {
        city_id: cityParam,
      });
      const data = response.data[0];
      setDefaultCityLabel(data.name);
    }
  };

  const getDefaultUniversityLabel = async () => {
    if (uniParam) {
      const response = await axios.post('/get-university-label', {
        university_id: uniParam,
      });
      const data = response.data[0];
      setDefaultUniversityLabel(data.name);
    }
  };

  const getDefaultDepartmentLabel = async () => {
    if (depParam) {
      const response = await axios.post('/get-department-label', {
        department_id: depParam,
      });
      const data = response.data[0];
      setDefaultDepartmentLabel(data.name);
    }
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

    // if (cityParam == options?.value) {
    //   console.log('BULOOOOOOOOOOOOOOOOO');
    //   setDefaultCityLabel();
    // }
    setCityOptions(options);
  };

  const handleMenuOpenCity = () => {
    console.log('MENU City was OPENED');
    //setisDisabledUni(true);
    //setisDisabledDep(false);
  };

  const handleChangeCity = (e) => {
    console.log('City was selected');
    //params.push('city', e.value);
    setSearchParams({ city: e.value });
    //setInputVal(inputUni.name);
    //setInputVal(selectedUni.value);
    //setInputVal('');

    //check
    setInputCity({ id: e.value, name: e.label });
    if (e.value) getUniversities(e.value);
    setInputUni({});
    setUniOptions(initialValuesUni);
    setisDisabledUni(false);

    setInputDep({});
    setDepOptions(initialValuesDep);
    setisDisabledDep(true);

    //document.getElementById('city_label_ID').innerHTML = 'Item to be uploaded';
    //setUniPlaceholder('Zmiana');
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
    //params.push('university', e.value);
    //setSearchParams({ university: e.value });
    //setSearchParamsZ({ university: e.value });
    //setSearchParamsZ({ university: e.value });
    //setSearchParamsZ({ university: e.value });
    setSearchParams({
      city: inputCity.id,
      university: e.value,
    });

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

    //params.push('department', e.value);
    //setSearchParams({ department: e.value });
    setSearchParams({
      city: inputCity.id,
      university: inputUni.id,
      department: e.value,
    });
    setInputDep({ id: e.value, name: e.label });
  };

  // // load options using API call
  // const loadOptionsCities = () => {
  //   const response = axios.get('/get-cities');
  //   const json = JSON.stringify(response.data);
  //   console.log('LOADED DATA: ', json);
  //   return json;
  // };

  // =========== FOR SEARCH | POSTS ===========

  const [posts, setPosts] = useState({});
  const [canRender, setCanRender] = useState(false);

  const handleSearch = async () => {
    loadScreen(700);
    //setisDataZero(false);

    setPosts({});
    //console.log([...params.entries()]);
    console.log('SEARCH!');
    setisDisabledUni(true);
    setisDisabledDep(true);
    //console.log(inputCity);

    if (
      Object.keys(inputCity).length > 0 ||
      Object.keys(inputUni).length > 0 ||
      Object.keys(inputDep).length > 0 ||
      cityParam ||
      uniParam ||
      depParam
    ) {
      //setSearchParams({});
      console.log('WE WANT TO SEARCH!');
      //var objToSend = { inputCity, inputUni, inputDep };
      setInputCity({});
      setInputUni({});
      setInputDep({});
      var sParams = Object.fromEntries([...searchParams]);
      var stringParams = Object.entries(sParams);
      console.log('SEARCH PARAMS BEFORE AXIOS:', stringParams);
      console.log('CITY PARAMS BEFORE AXIOS:', sParams?.city);
      try {
        const response = await axios.post('/search', null, {
          params: {
            city_id: sParams?.city,
            university_id: sParams?.university,
            department_id: sParams?.department,
          },
        });
        const data = response.data;
        console.log('DATA === ', data);
        if (data.length == 0) {
          setisDataZero(true);
          console.log('<<<<< DATA IS 0');
        }
        const psts = Array.from(data);
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PSTS created', psts);

        //setNewCreated(TMPnewCreated);
        //setNewUpdated(TMPnewUpdated);
        setPosts(psts);
        console.log('=====================DATA', data[0]);
      } catch (error) {
        console.log('Search data ERROR: ', error);
      }
      setCanRender(true);
      //setInputDep({ id: e.value, name: e.label });
    }

    //loadScreen(1000);
  };

  useEffect(() => {
    loadScreen(700);
    getCities();
    getDefaultCityLabel();
    getDefaultUniversityLabel();
    getDefaultDepartmentLabel();
    setCanRender(false);
    //setInputVal('STARTED');
    //setSearchParams({});
    setisDisabledUni(true);
    setisDisabledDep(true);
    //setPosts({});

    return () => {
      console.log(
        '!!!!!!!!!!!!!!!!!!!!!!!!!!CLEANUP DASHBOARD!!!!!!!!!!!!!!!!!!!'
      );
      // setInputCity({});
      // setCityOptions(initialValuesCity);
      // setInputUni({});
      // setUniOptions(initialValuesUni);
      // setInputDep({});
      // setDepOptions(initialValuesDep);
      setNewCreated('');
      setNewUpdated('');
      setIsLoadiing(false);
    };
  }, []);

  // useEffect(() => {
  //   setCurrentParams(Object.fromEntries([...searchParams]));
  //   console.log('CURRENT PARAMS:', currentParams); // get new values onchange
  // }, [searchParams]);

  // useEffect(() => {
  //   console.log('INPUT CITY CHANGED!');
  //   setInputUni({});
  //   setUniOptions(initialValuesUni);

  //   return () => {
  //     console.log(
  //       '!!!!!!!!!!!!!!!!!!!!!!!!!!CLEANUP ON UNI!!!!!!!!!!!!!!!!!!!'
  //     );
  //     //setIsLoadiing(true);
  //   };
  // }, [inputCity]);

  var imageName = require('../../images/avatar-nobg-white.png');

  const options = {
    // weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container>
            <Search>
              <SelectsContainer>
                <WrapCitySelect>
                  <CustomSelect
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
                    defaultValue={{
                      label: defaultCityLabel || 'Wybierz Miasto',
                      value: cityParam,
                    }}
                    //getOptionLabel={(e) => console.log(e)}
                    //getOptionValue={(e) => console.log(e)}
                    // loadOptions={cityList}
                    // onInputChange={handleInputChange}
                  />
                </WrapCitySelect>
                <br />
                {/* UNI SELECT */}
                <WrapSingleSelect>
                  <CustomSelect
                    classNamePrefix={'Select'}
                    options={selectedUni}
                    onChange={handleChangeUniversity}
                    placeholder={'Wybierz Uniwersytet'}
                    noOptionsMessage={() => 'Nie znaleziono opcji!'}
                    isDisabled={isDisabledUni}
                    value={selectedUni.value}
                    defaultValue={{
                      label: defaultUniversityLabel || 'Wybierz Uniwersytet',
                      value: uniParam,
                    }}
                    //getOptionLabel={(e) => console.log(e)}
                    //getOptionValue={(e) => console.log(e)}
                    // loadOptions={cityList}
                    // onInputChange={handleInputChange}
                    // onChange={handleChange}
                  />
                </WrapSingleSelect>
                <br />
                <WrapSingleSelect>
                  <CustomSelect
                    classNamePrefix={'Select'}
                    options={selectedDep}
                    onChange={handleChangeDepartment}
                    placeholder={'Wybierz Wydział'}
                    noOptionsMessage={() => 'Nie znaleziono opcji!'}
                    isDisabled={isDisabledDep}
                    // cacheOptions
                    // defaultOptions
                    value={selectedDep.value}
                    defaultValue={{
                      label: defaultDepartmentLabel || 'Wybierz Wydział',
                      value: depParam,
                    }}
                    //getOptionLabel={(e) => console.log(e)}
                    //getOptionValue={(e) => console.log(e)}
                    // loadOptions={cityList}
                    // onInputChange={handleInputChange}
                    // onChange={handleChange}
                  />
                </WrapSingleSelect>
                <br />
                <SearchButton onClick={handleSearch}>SZUKAJ</SearchButton>
              </SelectsContainer>
            </Search>

            {/* <p>CHOSEN CITY VALUE NAME: {inputCity.name}</p>
            <p>CHOSEN CITY VALUE ID: {inputCity.id}</p>

            <p>CHOSEN UNI VALUE NAME: {inputUni.name}</p>
            <p>CHOSEN UNI VALUE ID: {inputUni.id}</p>

            <p>CHOSEN DEP VALUE NAME: {inputDep.name}</p>
            <p>CHOSEN DEP VALUE ID: {inputDep.id}</p> */}

            <br />

            {canRender ? (
              <>
                {isDataZero ? (
                  <>
                    <InfoSection {...dashboardNoDataObj} />
                  </>
                ) : (
                  <>
                    {posts.map((post, key) => (
                      <DataDiv>
                        <DataInfoDiv>
                          <DataTopWrap>
                            <DataPostPath>
                              {post.city_name} &#8594; {post.university_name}{' '}
                              &#8594; {post.department_name}
                            </DataPostPath>

                            <DataPostButton as='a' href={`/post/${post.id}`}>
                              ZOBACZ PEŁNĄ PUBLIKACJĘ
                            </DataPostButton>
                          </DataTopWrap>
                          <DataPostTitle key={key.title} value={post.title}>
                            {post.title}
                          </DataPostTitle>
                          <DataPostText key={key.text} value={post.text}>
                            {post.text}
                          </DataPostText>
                        </DataInfoDiv>

                        <WrapRightTop>
                          <PostStats>
                            Stworzony:{' '}
                            {new Date(post.created).toLocaleDateString(
                              'en-GB',
                              options
                            )}{' '}
                            <br /> Zaktualizowany:{' '}
                            {new Date(post.updated).toLocaleDateString(
                              'en-GB',
                              options
                            )}
                          </PostStats>
                          <DataAvatarDiv>
                            <DataAvatar src={imageName}></DataAvatar>
                          </DataAvatarDiv>
                          <PostStats as='a' href={`/profile/${post.username}`}>
                            by: {post.username}
                          </PostStats>
                        </WrapRightTop>
                        {/* <WrapRightBottom>
                              <ButtonFull>FULL POST</ButtonFull>
                            </WrapRightBottom> */}
                      </DataDiv>
                    ))}
                  </>
                )}
              </>
            ) : (
              <>
                <InfoSection {...dashboardLandingObj} />
              </>
            )}

            <br />
          </Container>
        </WrapGlobal>
      )}
    </>
  );
};

export default Dashboard;

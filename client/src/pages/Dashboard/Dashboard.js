import React, { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Container, WrapGlobal } from '../../GlobalStyles';
import { useState } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { InfoSection } from '../../components';
import {
  dashboardLandingObj,
  dashboardNoDataObj,
} from '../../components/InfoSection/Data';

import {
  CustomSelect,
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
  PostStats,
  DataPostPath,
  WrapRightTop,
  DataTopWrap,
  DataPostButton,
} from './Dashboard.styled';

const Dashboard = () => {
  const [isDisabledUni, setisDisabledUni] = useState(true);
  const [isDisabledDep, setisDisabledDep] = useState(true);
  const [isDataZero, setisDataZero] = useState(false);

  const [defaultCityLabel, setDefaultCityLabel] = useState('');
  const [defaultUniversityLabel, setDefaultUniversityLabel] = useState('');
  const [defaultDepartmentLabel, setDefaultDepartmentLabel] = useState('');

  const { search } = useLocation();

  const [searchParams, setSearchParams] = useSearchParams({});

  const cityParam = parseInt(searchParams.get('city'));
  const uniParam = parseInt(searchParams.get('university'));
  const depParam = parseInt(searchParams.get('department'));

  const [isLoading, setIsLoadiing] = useState(false);
  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
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
    setCityOptions(options);
  };

  const handleMenuOpenCity = () => {
    //console.log('MENU City was OPENED');
    //setisDisabledUni(true);
    //setisDisabledDep(false);
  };

  const handleChangeCity = (e) => {
    //console.log('City was selected');
    setSearchParams({ city: e.value });
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
    //console.log('Uni was selected');
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
    //console.log('Dep was selected');
    setSearchParams({
      city: inputCity.id,
      university: inputUni.id,
      department: e.value,
    });
    setInputDep({ id: e.value, name: e.label });
  };

  // =========== FOR SEARCH | POSTS ===========

  const [posts, setPosts] = useState({});
  const [canRender, setCanRender] = useState(false);

  const handleSearch = async () => {
    loadScreen(700);

    setPosts({});
    setCanRender(false);
    setisDisabledUni(true);
    setisDisabledDep(true);

    if (
      Object.keys(inputCity).length > 0 ||
      Object.keys(inputUni).length > 0 ||
      Object.keys(inputDep).length > 0 ||
      cityParam ||
      uniParam ||
      depParam
    ) {
      setInputCity({});
      setInputUni({});
      setInputDep({});
      var sParams = Object.fromEntries([...searchParams]);
      //var stringParams = Object.entries(sParams);
      try {
        const response = await axios.post('/search', null, {
          params: {
            city_id: sParams?.city,
            university_id: sParams?.university,
            department_id: sParams?.department,
          },
        });
        const data = response.data;
        if (data.length == 0) {
          setisDataZero(true);
        } else {
          setisDataZero(false);
        }
        const psts = Array.from(data);
        setPosts(psts);
      } catch (error) {
        console.log('Search data ERROR: ', error);
      }
      setCanRender(true);
    }
  };

  useEffect(() => {
    loadScreen(700);
    getCities();
    getDefaultCityLabel();
    getDefaultUniversityLabel();
    getDefaultDepartmentLabel();
    setCanRender(false);
    setisDisabledUni(true);
    setisDisabledDep(true);

    return () => {
      setIsLoadiing(false);
    };
  }, []);

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
                    onMenuOpen={handleMenuOpenCity}
                    options={selectedCity}
                    onChange={handleChangeCity}
                    placeholder={'Wybierz Miasto'}
                    noOptionsMessage={() => 'Nie znaleziono opcji!'}
                    value={selectedCity.value}
                    defaultValue={{
                      label: defaultCityLabel || 'Wybierz Miasto',
                      value: cityParam,
                    }}
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
                  />
                </WrapSingleSelect>
                <br />
                <WrapSingleSelect>
                  <CustomSelect
                    classNamePrefix={'Select'}
                    options={selectedDep}
                    onChange={handleChangeDepartment}
                    placeholder={'Wybierz Wydzia??'}
                    noOptionsMessage={() => 'Nie znaleziono opcji!'}
                    isDisabled={isDisabledDep}
                    value={selectedDep.value}
                    defaultValue={{
                      label: defaultDepartmentLabel || 'Wybierz Wydzia??',
                      value: depParam,
                    }}
                  />
                </WrapSingleSelect>
                <br />
                <SearchButton onClick={handleSearch}>SZUKAJ</SearchButton>
              </SelectsContainer>
            </Search>

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
                              ZOBACZ PE??N?? PUBLIKACJ??
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

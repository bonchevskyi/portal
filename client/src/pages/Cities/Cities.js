import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, WrapGlobal } from '../../GlobalStyles';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import {
  UniList,
  UniListColumn,
  UniListElem,
  UniListP,
  UniListRow,
} from './Cities.styled';

function Cities() {
  const [cityList, setCityList] = useState([]);

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  const getCities = async () => {
    try {
      const response = await axios.get('/get-cities');
      setCityList(response?.data);
      console.log('DATA:', response?.data);
    } catch (error) {
      console.log('Cities GET data ERROR: ', error);
    }
  };

  useEffect(() => {
    //const abortControler = new AbortController();

    loadScreen(700);
    getCities();

    return () => {
      setIsLoadiing(false);
    };
  }, []);

  const displayCities = (cityList) => {
    return cityList.map((val, key) => (
      <UniListElem as='a' href={`/?city=${val.id}`} key={key.id} value={val.id}>
        {val.name}
      </UniListElem>
    ));
  };

  // console.log('EZ');

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container position='centered' align='centered'>
            <UniList>{displayCities(cityList)}</UniList>
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default Cities;

import React, { useState, useEffect } from 'react';
import Loading from './Loading/Loading';
import { Link } from 'react-router-dom';
import { Container, WrapGlobal } from '../GlobalStyles';
import { notAuthObj } from './InfoSection/Data';
import InfoSection from './InfoSection/InfoSection';

const NotFound = () => {
  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  useEffect(() => {
    //const abortControler = new AbortController();

    loadScreen(700);

    return () => {
      setIsLoadiing(false);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container position='centered' align='centered'>
            <InfoSection {...notAuthObj} />
          </Container>
        </WrapGlobal>
      )}
    </>
  );
};

export default NotFound;

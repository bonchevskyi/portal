import React, { useState, useEffect } from 'react';
import Loading from './Loading/Loading';
import { Container, WrapGlobal } from '../GlobalStyles';
import InfoSection from './InfoSection/InfoSection';
import { notFoundObj } from './InfoSection/Data';

const NotFound = () => {
  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  useEffect(() => {
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
            <InfoSection {...notFoundObj} />
          </Container>
        </WrapGlobal>
      )}
    </>
  );
};

export default NotFound;

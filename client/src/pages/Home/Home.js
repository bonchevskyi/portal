import React, { useState, useEffect } from 'react';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from '../../components/InfoSection/Data';
import { InfoSection } from '../../components';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button, Container, WrapGlobal } from '../../GlobalStyles';
import Loading from '../../components/Loading/Loading';

function Home() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

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
      //console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!CLEANUP UNI!!!!!!!!!!!!!!!!!!!');
      //isMounted = false;
      setIsLoadiing(false);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjFour} />
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default Home;

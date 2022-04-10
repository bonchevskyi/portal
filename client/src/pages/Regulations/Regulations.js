import React, { useState, useEffect } from 'react';
import { InfoSection } from '../../components';
import { Container, WrapGlobal } from '../../GlobalStyles';
import Loading from '../../components/Loading/Loading';
import { regulationsObj } from '../../components/InfoSection/Data';

function Regulations() {
  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  useEffect(() => {
    const abortControler = new AbortController();
    loadScreen(700);

    return () => {
      setIsLoadiing(true);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container position='centered' align='centered'>
            <InfoSection {...regulationsObj} />
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default Regulations;

import React, { useState, useEffect } from 'react';
import { Container, WrapGlobal, FaqStyle } from '../../GlobalStyles';
import Loading from '../../components/Loading/Loading';
import Faq from 'react-faq-component';

function FAQ() {
  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    setTimeout(() => {
      setIsLoadiing(false);
    }, timeMS);
  };

  const data = {
    title: 'FAQ ',
    rows: [
      {
        title: 'Jak to działa?',
        content: `Logujesz się &#8594; Tworzysz publikacje odnośnie pomocy w twoim pytaniu &#8594; Dostajesz odpowiedź.`,
      },
      {
        title: 'Czym jest serwis?',
        content: `Portalem studenckim dla wzajemnej pomocy.`,
      },
      {
        title: 'Dla kogo jest?',
        content:
          'Dla wszystkich studentów uczelni publicznych w Polsce którę chcą dostać pomocy lub udzielić pomocy.',
      },
      {
        title: 'Brakuje twojego miasta czy uczelni?',
        content: `Prosimy on kontakt (wszystkie linki są na dole). `,
      },
    ],
  };

  const styles = {
    bgColor: 'transperent',
    titleTextColor: 'white',
    rowTitleColor: '#0d2d10',

    rowContentColor: 'white',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    tabFocus: true,
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
            <FaqStyle>
              <Faq data={data} styles={styles} config={config} />
            </FaqStyle>
          </Container>
        </WrapGlobal>
      )}
    </>
  );
}

export default FAQ;

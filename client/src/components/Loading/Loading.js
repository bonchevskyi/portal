import React from 'react';
import { Oval } from 'react-loader-spinner';
import { Container, WrapGlobal } from '../../GlobalStyles';
import { LoadingWrap, Wrap } from './Loading.styled';

const Loading = () => {
  return (
    <WrapGlobal>
      <Container position='centered' align='centered'>
        <LoadingWrap>
          <Oval
            ariaLabel='loading-indicator'
            height={100}
            width={100}
            strokeWidth={3}
            color='#2e9c69'
            secondaryColor='#0D2D10'
          />
        </LoadingWrap>
      </Container>
    </WrapGlobal>
  );
};
export default Loading;

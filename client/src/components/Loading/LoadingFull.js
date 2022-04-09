import React from 'react';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Oval } from 'react-loader-spinner';
//import { Container, WrapGlobal } from '../../GlobalStyles';
import { LoadingWrap, LoadingContainer } from './LoadingFull.styled';

//import { useState } from 'react';

const LoadingFull = () => {
  return (
    <LoadingWrap>
      <LoadingContainer>
        <LoadingWrap>
          <Oval
            ariaLabel='loading-indicator'
            height={200}
            width={200}
            strokeWidth={3}
            color='#2e9c69'
            secondaryColor='#0D2D10'
          />
        </LoadingWrap>
      </LoadingContainer>
    </LoadingWrap>
  );
};

export default LoadingFull;

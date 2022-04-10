import React from 'react';
import { Oval } from 'react-loader-spinner';
import { LoadingWrap, LoadingContainer } from './LoadingFull.styled';

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

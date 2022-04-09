import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';

export const IsLoadingHOC = (WrappedComponent) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        <div align='center'>
          {isLoading && (
            <Oval
              ariaLabel='loading-indicator'
              height={100}
              width={100}
              strokeWidth={5}
              color='green'
              secondaryColor='purple'
            />
          )}
        </div>
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }

  return HOC;
};

export default IsLoadingHOC;

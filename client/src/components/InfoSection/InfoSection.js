import React from 'react';
import { Link } from 'react-router-dom';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  InfoContainer,
  Heading,
  ImgWrapper,
  InfoButton,
  Img,
} from './InfoSection.styled';

function InfoSection({
  primary,
  lightBg,
  lightText,
  headline,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  linkTo,
  hasButton,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <InfoContainer>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Link to={linkTo}>
                  {hasButton ? (
                    <InfoButton big fontBig primary={primary}>
                      {buttonLabel}
                    </InfoButton>
                  ) : (
                    <></>
                  )}
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </InfoContainer>
      </InfoSec>
    </>
  );
}

export default InfoSection;

import React from "react";
import styled from "styled-components";
import {useTranslation} from 'react-i18next'
const StyledPrices = styled.div`
  padding: 50px;
  h1 {
    text-align: center;
    font-family: "Quicksand", sans-serif;
    margin-bottom: 35px;
  }
  h2 {
    font-weight: 100;
    text-align: center;
    margin-top: 50px;
    animation: puff-in-center 0.5s;
  }
  div {
    display: flex;
    justify-content: space-between;
    border-bottom: dashed 2px;
    font-size: 20px;
    font-weight: lighter;
    font-family: "Quicksand", sans-serif;
  }
  p {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media (min-width: 769px) {
    width: 50vw;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 50px;
  }

  @keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;
export default function Prices() {
  const {t} = useTranslation()
 
  return (
    <StyledPrices>
      <h1> {t('Prices.prices')}</h1>
      <h2>{t('Prices.cut')}</h2>
      <div>
        <p>{t('Prices.full')}</p>
        <p>€10</p>
      </div>
      <div>
        <p>{t('Prices.half')}</p>
        <p>€10</p>
      </div>
      <h2>{t('Prices.color')}</h2>
      <div>
        <p>{t('Prices.gloss')}</p>
        <p>€10</p>
      </div>
      <div>
        <p>{t('Prices.single')}</p>
        <p>€10</p>
      </div>
      <h2>{t('Prices.mani')}</h2>
      <div>
        <p>{t('Prices.sharp')}</p>
        <p>€10</p>
      </div>
      <div>
        <p>{t('Prices.nailP')}</p>
        <p>€10</p>
      </div>
      <div>
        <p>{t('Prices.nailE')}</p>
        <p>€10</p>
      </div>
    </StyledPrices>
  );
}

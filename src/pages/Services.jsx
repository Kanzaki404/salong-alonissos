import React from "react";
import styled from "styled-components";
import haircut from "../assets/cut.png";
import manicure from "../assets/manicure.png";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next'
export default function Services() {
  const StyledServices = styled.div`
    padding-top: 50px;
    h1 {
      text-align: center;
      font-weight: 400;
    }
    .cuttingStyling {
      text-align: center;
      background-image: url(${haircut});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 3px;
      margin: auto;
      width: 63%;
      height: 240px;
      margin-bottom: 25px;
      margin-top: 25px;
      h1 {
        padding: 69px 10px 10px 10px;
        color: white;

        font-weight: 200;
      }
    }

    .manicure {
      text-align: center;
      background-image: url(${manicure});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 3px;
      margin: auto;
      width: 63%;
      height: 240px;
      margin-bottom: 135px;
      margin-top: 25px;
      h1 {
        padding: 69px 10px 10px 10px;
        color: white;
        font-weight: 200;
      }
    }
    button {
      height: 40px;
      width: 115px;
      border: solid 1px #ccc;
      background: transparent;
      color: white;
      margin: 1rem;
      outline-style: none;
      animation: puff-in-center 0.5s;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
    hr {
      width: 300px;
    }

    @media (min-width: 769px) {
      width: 75vw;
      display: flex;
      flex-direction: column;
      margin: auto;
      margin-top: 50px;

      .cuttingStyling {
        height: 307px;
      }

      .manicure {
        height: 307px;
      }

      button {
        height: 56px;
        width: 174px;
        font-size: 1.3rem;
      }
    }

    @media (min-width: 1304px) {

          .cuttingStyling{

            height: 352px;
          }

          .manicure {
                  height: 352px;
          }
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
const {t} = useTranslation()
  return (
    <StyledServices>
      <h1>{t('Services.services')}</h1>
      <div className="cuttingStyling">
        <h1>{t('Services.cut')}</h1>
        <Link to="/prices">
          <button> {t('Services.prices')} </button>
        </Link>
      </div>
      <hr />
      <div className="manicure">
        <h1>{t('Services.mani')}</h1>
        <Link to="/prices">
          <button>  {t('Services.prices')}</button>
        </Link>
      </div>
      <hr />
    </StyledServices>
  );
}

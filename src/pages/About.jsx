import React from "react";
import styled from "styled-components";
import makeup from "../assets/alonissos.jpeg";
import worker1 from "../assets/worker1.png";
import worker2 from "../assets/worker2.png";
import {useTranslation} from 'react-i18next'
const AboutStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  text-align: center;

  .background {
    background-image: url(${makeup});
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
    margin: auto;
    width: 100%;
    height: 400px;
    margin-bottom: 25px;
    margin-top: 25px;
    border-radius: 3px;
    color: white;
    text-align: left;
    p {
      padding: 60px 17px 26px 30px;
      font-weight: 100;
      animation: puff-in-center 0.5s;
    }
  }

  h1 {
    font-family: "Poppins", sans-serif;
    padding-top: 50px;
    font-weight: 100;
  }

  .staff {
    font-family: "Quicksand", sans-serif;
    padding-top: 2px;
    font-size: 1.5rem;
    padding-bottom: 1px;
    font-weight: 200;
  }

  .workerOne {
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 88%;
    margin: auto;
    margin-bottom: 80px;
    p {
      text-align: left;
      padding-left: 19px;
      padding-right: 5px;
      margin: auto;
    }
  }

  .workerTwo {
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding-bottom: 20px;
    width: 88%;
    margin: auto;
    margin-bottom: 80px;
    p {
      text-align: start;
      padding-left: 15px;
      margin: auto;
    }
  }
  img {
    margin: auto;
    border-radius: 3px;
    width: 100%;
    height: auto;
  }
  hr {
    width: 87%;
  }

  .imageWrapper {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
  }
  @media (min-width: 769px) {
    width: 70vw;
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

  @media (min-width: 769px) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 50px;

    /* .background {
      background-image: url(${makeup});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin: auto;
      width: 88%;
      height: 400px;
      margin-bottom: 25px;
      margin-top: 25px;
      border-radius: 3px;
      color: white;
      text-align: left;
      p {
        padding: 60px 17px 26px 30px;
        font-weight: 100;
        animation: puff-in-center 0.5s;
      }
    } */
  }
`;

export default function About() {
  const {t} = useTranslation()
  return (
    <AboutStyle>
      <h1>{t('AboutUs.about')}</h1>

      <div className="background">
        <p>
        {t('AboutUs.hair')} <br />
        {t('AboutUs.info')}
        </p>
      </div>
      <hr />

      <h1 className="staff">{t('AboutUs.staff')}</h1>
      <div className="workerOne">
        <div className="imageWrapper">
          <img src={worker1} alt="" />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div className="workerTwo">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="imageWrapper">
          <img src={worker2} alt="" />
        </div>
      </div>
    </AboutStyle>
  );
}

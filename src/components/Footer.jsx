import React from "react";
import styled from "styled-components";
import fb from "../assets/testSvg.svg";
import twitter from "../assets/twitter.svg";
import Instagram from "../assets/Instagram.svg";
import {useTranslation} from 'react-i18next'


const StyledFooter = styled.div`
  background-color: #302e2e;
  min-height: 100px;
`;
const VisitUs = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

  text-align: center;
  font-family: "Quicksand", sans-serif;
  color: white;
  h1 {
    margin-top: 0px;
    padding-top: 25px;
    font-weight: 400;
    font-size: 25px;
  }
  hr {
    width: 50%;
    height: 1px;
    background-color: #ccc;
    border: none;
  }
`;

const Information = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 2fr 1fr;
  .left-info {
    padding: 25px;
  }
  hr {
    width: 85%;
    margin-left: 0;
  }
  .right-info {
    padding: 25px;
    p {
      margin-top: 5px;
      margin-bottom: 6px;
    }
  }
  @media (min-width: 769px) {
    .right-info {
      text-align: center;
    }
    hr {
      width: 23%;
      margin: auto;
    }
  }
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: start;

  img {
    margin-left: 15px;
    margin-right: 10px;
    margin-bottom: 15px;
  }
`;

export default function Footer() {
  const {t} = useTranslation()
  return (
    <StyledFooter>
      <VisitUs>
        <h1>{t('Footer.visitUs')}</h1>
        <hr />
      </VisitUs>

      <Information>
        <div className="left-info">
          <p>Email: maria@gmail.com</p>
          <p>{t('Footer.phone')} +30 2223 025526</p>
          <p>{t('Footer.address')} Epar.Od. Patitiriou-Gerakas Patitiri 370 05</p>
        </div>
        <div className="right-info">
          <p>{t('Footer.hours')} :</p>
          <div>
            <p>{t('Footer.monFri')}</p>
            <p> 8:00-19:00 </p>
          </div>
          <hr />
          <div>
            <p>{t('Footer.satSun')}</p>
            <p> 9:00-22:00 </p>
          </div>
        </div>
      </Information>
      <SocialMedia>
        <img className="fbIcon" src={fb} alt="facebook" />
        <img src={twitter} alt="instagram" />
        <img src={Instagram} alt="twitter" />
      </SocialMedia>
    </StyledFooter>
  );
}

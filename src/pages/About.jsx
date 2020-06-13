import React from "react";
import styled from "styled-components";
import makeup from "../assets/alonissos.jpeg";
import salon from "../assets/clearedSalonNonBlur.png";

import { useTranslation } from "react-i18next";
const AboutStyle = styled.div`
  min-height: 100vh;
  .wrapper {
    min-height: 85vh;
    
    width: 80vw;
    margin: auto;
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 25px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .imageTop{
    background-image: url(${makeup});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 310px;  
    margin-top: 40px;
    border-radius: 3px;
  }
  .topLeft{
    margin: 25px;
    line-height: 27px;
    font-size: 17px;
    font-weight: 400;
    color: #696969;
  }
  .bottomRight{
    background-image: url(${salon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 310px;  
    margin-top: 40px;
    border-radius: 3px;
  }
  @media (max-width: 769px) {
    
    .wrapper {
      display: block;
      
    }
  }
`;

export default function About() {
  const { t } = useTranslation();
  return (
    <AboutStyle>
      <div className="wrapper">
        <div className="topLeft">
          <p>Mäster Samuelsgatan 7, 111 44 Stockholm</p>
          <p>
            Våra öppettider: <br/> 
            Måndag-Fredag: <br/>
            10.00 – 18.00 <br/>
            Lördag: 11.00 – 16.00 <br/>
            Söndag: stängt
          </p>
          <p>Tel: 08-611 11 60, 08-611 67 27 <br/>
           E-post: info@hairstudio.se <br/>
           Obs. vi tar ej emot bokningar via e-post.</p>
        </div>
        <div className="imageTop"></div>
        <div className="bottomLeft">hej</div>
        <div className="bottomRight"></div>
      </div>
    </AboutStyle>
  );
}

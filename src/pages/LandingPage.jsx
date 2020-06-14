import React from "react";
import styled from "styled-components";
// import image from "../assets/hairstyle-fin.png";
import desktopImg from "../assets/clearedSalon.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img1 from "../assets/salon.jpg";
import img2 from "../assets/salon2.jpg";
const LandingPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  background-image: url(${desktopImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 105vh;
  padding-top: 150px;
`;
const StyledContent = styled.div`
  padding: 50px;
  width: 70%;
  min-height: 90vh;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px;
  grid-gap: 5px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.69);

  .topRight {
    background-image: url(${img1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 310px;
    margin-top: 40px;
    border-radius: 3px;
  }
  .topLeft {
    margin: 25px;
    line-height: 27px;
    font-size: 17px;
    font-weight: 400;
    color: white;
    margin-bottom: 0;
    text-align:start;
  }
  .bottomRight {
    

    background-image: url(${img2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 310px;
    margin-top: 40px;
    border-radius: 3px;
  }
  .bottomLeft {
    margin: 25px;
    line-height: 27px;
    font-size: 17px;
    font-weight: 400;
    color: white;
    margin-bottom: 0;
    text-align:start;
  }

  @media (max-width: 769px) {
   
      display: block;
    
  }
`;

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <LandingPageStyle>
      <StyledContent>
        <div className="topLeft">
          <p>{t("LandingPage.text1")}</p>


        </div>
        <div className="topRight"></div>
        <div className="bottomLeft">
        
          <p>{t("LandingPage.text3")}</p>
          
        </div>
        <div className="bottomRight">
        
          
        </div>
      </StyledContent>
    </LandingPageStyle>
  );
}

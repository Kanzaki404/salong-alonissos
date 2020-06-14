import React from "react";
import styled from "styled-components";
// import image from "../assets/hairstyle-fin.png";
import desktopImg from "../assets/clearedSalon.png";
import logo from "../assets/salonLogo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img1 from "../assets/salon.jpg";
import img2 from "../assets/salon2.jpg";
const LandingPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${desktopImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-attachment: fixed;
  z-index: 0;
  height: 100vh;
  overflow: auto;
  text-align: left;
  color: white;
  padding: 50px;
  font-family: "Quicksand", sans-serif;


  button {
    border: none;
    color: white;
    padding: 15px 60px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 500;
    margin: 4px 2px;
    cursor: pointer;
    animation: puff-in-center 0.5s;
    outline-style: none;
  }

  .service-btn {
    background-color: rgba(48, 46, 46, 0.3);
    border: 1px solid white;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    margin: 0;
    position: relative;
    top: 90%;

    &:hover {
      transform: scale(1.1);
      background-color: rgba(48, 46, 46, 0.9);
    }
  }

  .logo {
    background-image: url(${logo});
    width: 5rem;
    height: 10rem;
    background-repeat: no-repeat;
    margin-bottom: -5rem;
    display: block;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
  .wrapper {
    margin: 0;
    padding: 0;
    text-align: center;
    height: 75vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .images {
    border-radius: 3px;
  }
  @media (max-width: 990px) {
    .wrapper {
     display: block;
     

    }


  }
  @media (min-width: 769px) {
    border-top: 80px solid #302e2e;
    border-left: 10px solid #302e2e;
    border-right: 10px solid #302e2e;
    background-image: url(${desktopImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-attachment: fixed;
    z-index: 0;
    height: 100vh;
    overflow: auto;
    h1 {
      padding-top: 90px;
      text-align: center;
      padding-left: 80px;
      font-size: 3rem;
    }
    .wrapper {
      margin: 0;
      padding: 0;
      text-align: center;
      min-height: 75vh;
      height: auto;
      background: rgba(0, 0, 0, 0.5215686274509804);
      border-radius: 5px;
    }

    .text {
      padding: 25px;
      text-align: left;
      line-height: 25px;
      p {

        color: white;
      }
    }

    .images {
      padding: 25px;
    }

    .logowrapper {
      display: flex;
      justify-content: center;
      margin-left: 89px;
    }

    h3 {
      margin: 0;
      margin-top: 20px;
    }
  }


  img {
    height: 360px;
    width: 515px;
    margin-bottom: 35px;
    margin-top: 15px;
  }


  @keyframes scale-in-hor-left {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
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

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <LandingPageStyle>
      <div className="wrapper">
        <div className="text">
          <p>
          {t("LandingPage.text1")}</p>

            <p>
            {t("LandingPage.text2")}
            </p>

            <p>
            {t("LandingPage.text3")}
            </p>

            <p>
            {t("LandingPage.welcome")}
          </p>
          <Link to="/services">
            <button className="button service-btn">
              {t("LandingPage.ourServices")}
            </button>
          </Link>
        </div>
        <div className="images">
          <img src={img1} alt="img1" srcset="" />
          <img src={img2} alt="img2" srcset="" />
        </div>
      </div>
    </LandingPageStyle>
  );
}

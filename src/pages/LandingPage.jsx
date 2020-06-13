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

  /* h1 {
    font-weight: 100;
    font-size: 2rem;
    animation: scale-in-hor-left 0.6s;
  }

  h3 {
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    margin-left: 4.5rem;
    -webkit-text-stroke: 1px black;
  }

  h4 {
    font-weight: lighter;
    font-size: 1.2rem;
  } */

  /* .text {
    font-weight: 100;
    font-size: 1.3rem;
    margin-top: 3rem;
  } */

  .text p {
    font-family: "Quicksand", sans-serif;
  }

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
    background-color: rgb(48, 46, 46);
    border: 1px solid white;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    margin: 0;
    position: relative;
    top: 90%;

    &:hover {
      transform: scale(1.2);
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
      background: white;
      border-radius: 5px;
    }

    .text {
      padding: 25px;
      text-align: left;
      line-height: 25px;
      p {
        color: #696969;
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
            Maria's Hair Salon is one of the leading hairdressing in Alonissos.
            With us there is a high competence, creativity and of course a
            superb service. It is important for us that the exclusive hair care
            that we offer you also has personal advice with answers to all
            questions regarding hair care, appearance and products.</p>

            <p>
            It is our ambition that you not only feel satisfied, but also find
            that you have received the best possible treatment and service, and
            that your hair really works as you intended and as you agreed with
            your hairdresser. With us, only professionally trained hairdressers
            work, and we place high demands on our staff in terms of knowledge,
            creativity, service level and product knowledge.
            </p>

            <p>
            The salon, which has been around since 1985, works with the latest
            hair care in all treatment areas, and focuses on customers with high
            demands on precision and quality. The salon is very well known, and
            has its location in Epar.Od. Patitiriou-Gerakas Patitiri 370 05.
            </p>

            <p>
            Welcome in for a free consultation
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

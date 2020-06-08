import React from "react";
import styled from "styled-components";
import image from "../assets/hairstyle-fin.png";
import logo from "../assets/salonLogo.svg";
import { Link } from "react-router-dom";
const LandingPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${image});
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

  h1 {
    font-weight: 100;
    font-size: 2rem;
    animation: scale-in-hor-left 0.6s;
  }

  h3 {
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    margin-left: 4.5rem;
  }

  h4 {
    font-weight: lighter;
    font-size: 1.2rem;
  }

  .text {
    font-weight: 100;
    font-size: 1.3rem;
    margin-top: 3rem;
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
    background-color: transparent;
    border: 1px solid white;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  .logo {
    background-image: url(${logo});
    width: 5rem;
    height: 5rem;
    background-repeat: no-repeat;
    margin-bottom: -5rem;
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
  return (
    <LandingPageStyle>
      <h1>Welcome to</h1>
      <div className="logo"></div>
      <h3>Maria's Salon</h3>

      <div className="text">
        We offer our customers the latest within haircare, grooming, styling and
        much more!
        <br></br>
        <br></br>
        <h4>Maria’s Salon in Alonissos</h4>
      </div>

      <br></br>
      <br></br>
      <Link  to="/services">
        <button className="button service-btn">Our Services</button>
      </Link>
    </LandingPageStyle>
  );
}

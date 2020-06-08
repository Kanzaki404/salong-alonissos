import React from "react";
import styled from "styled-components";
import haircut from "../assets/cut.png";
import manicure from "../assets/manicure.png";
import { Link } from "react-router-dom";
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
      width: 93%;
      height: 201px;
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
      width: 93%;
      height: 201px;
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
      outline-style: none;
    }
    hr{
        width: 80%;
    }
  `;

  return (
    <StyledServices>
      <h1>Services</h1>
      <div className="cuttingStyling">
        <h1>Cutting & Styling</h1>
        <Link to='/prices'>
        <button> Prices </button>
        </Link>
      </div>
      <hr />
      <div className="manicure">
        <h1>Manicure</h1>
        <Link to='/prices'>
        <button> Prices </button>
        </Link>

      </div>
      <hr/>
    </StyledServices>
  );
}

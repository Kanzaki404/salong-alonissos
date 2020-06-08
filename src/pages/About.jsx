import React from "react";
import styled from "styled-components";
import makeup from "../assets/Make-up.jpg";
import worker1 from "../assets/worker1.png";
import worker2 from "../assets/worker2.png";

const AboutStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  text-align: center;


  .background {
    background-image: url(${makeup});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
    width: 96%;
    height: 200px;
    margin-bottom: 25px;
    margin-top: 25px;
    border-radius: 3px;
    color: white;
    text-align: left;
    p {
      padding: 60px 17px 26px 30px;
      font-weight: 100;
    }
  }

  h1 {
    font-family: "Poppins", sans-serif;
    padding-top: 50px;
  }

  .staff {

    font-family: "Quicksand", sans-serif;
    padding-top: 2px;
    font-size: 1.5rem;
    padding-bottom: 25px;

  }

  .workerOne {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 15px;

    p{
        text-align: end;
    }
  }

  .workerTwo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 15px;
    padding-bottom: 20px;
    p{
        text-align: start;
    }
  }
  img{
    margin: auto;
  }
  hr{
      width: 90%;
  }
`;

export default function About() {
  return (
    <AboutStyle>
      <h1>Maria's Salon</h1>

      <div className="background">
        <p>
        Maria's Salon <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <hr/>

      <h1 className="staff">Staff</h1>
      <div className="workerOne">
        <img src={worker1} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <hr/>
      <div className="workerTwo">

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <img src={worker2} alt="" />
      </div>
    </AboutStyle>
  );
}

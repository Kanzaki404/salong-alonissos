import React from "react";
import styled from "styled-components";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.jpg";
import photo4 from "../assets/4.jpg";
import photo5 from "../assets/5.jpg";
import photo6 from "../assets/6.jpg";
import photo7 from "../assets/7.jpg";
import photo8 from "../assets/8.jpg";
import {useTranslation} from 'react-i18next'
const StyledGalery = styled.div`
  padding: 150px;
  min-height: 100vh;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px; */

  text-align: center;
  .wrapper {
    display: inline-grid;
    grid-template-rows: 300px 300px 300px;
    grid-template-columns: 200px 200px 200px;
    grid-gap: 3px;
    justify-items: center;
    align-items: center;
  }
  .background {
    justify-self: center;
    height: 300px;
    width: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
  .img1 {
    background-image: url(${photo1});
  }
  .img2 {
    background-image: url(${photo2});
  }
  .img3 {
    background-image: url(${photo3});
  }
  .img4 {
    background-image: url(${photo4});
  }
  .img5 {
    background-image: url(${photo5});
  }
  .img6 {
    background-image: url(${photo6});
  }
  .img7 {
    background-image: url(${photo7});
  }
  .img8 {
    background-image: url(${photo8});
  }

  @media (max-width: 769px) {
    padding: 0;
    padding-top: 150px;
    padding-bottom: 50px;
    .wrapper {
      grid-template-columns: 200px 200px;
      
    }
  }
`;

export default function Gallery() {
  const {t} = useTranslation()

  return (
    <StyledGalery>
      <div className="wrapper">
        <div className="background">
          <h1>{t('Gallery.gallery')}</h1>
          <p>{t('Gallery.byM')}</p>
        </div>

        <div className="img1 background"></div>
        <div className="img2 background"></div>
        <div className="img3 background"></div>
        <div className="img4 background"></div>
        <div className="img5 background"></div>
        <div className="img6 background"></div>
        <div className="img7 background"></div>
        <div className="img8 background"></div>
      </div>
    </StyledGalery>
  );
}

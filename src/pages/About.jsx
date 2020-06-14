import React from "react";
import styled from "styled-components";
import alonissos from "../assets/alonissos.jpeg";
import salon from "../assets/clearedSalonNonBlur.png";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { useTranslation } from "react-i18next";

function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 39.146422, lng: 23.864568 }}
      Marker
      position={{ lat: 39.146422, lng: 23.864568 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


const AboutStyle = styled.div`
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${alonissos});
  padding-top: 50px;
  min-height: 105vh;
  border-top: 80px solid #302e2e;

  .wrapper {
    min-height: 85vh;
    background: rgba(0, 0, 0, 0.7);
    width: 80vw;
    margin: auto;
   
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 25px;

    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .imageTop {
    background-image: url(${salon});
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
  }
  .bottomRight {

    margin-top:20px;
    border-radius: 3px;
  }
  .bottomLeft{

    margin: 25px;
    color:white;
  }
  h1{
    color: white;
    text-align:center;
    margin: 0;
    margin-bottom: 10px;
  }
  @media (max-width: 769px) {
    .wrapper {
      display: block;
    }
  }
`;
const MapArea = styled.div`


`;
export default function About() {
  const { t } = useTranslation();
  return (
    <AboutStyle>
      <h1>{t('AboutUs.contact')}</h1>
      <div className="wrapper">
        <div className="topLeft">
          <p>{t('AboutUs.location')}</p>
          <p>
          {t('AboutUs.Opening')} <br />
          {t('AboutUs.mon-fre')} 10.00 – 18.00 <br />
            {t('AboutUs.sat')} 11.00 – 16.00 <br />
            {t('AboutUs.sun')}
          </p>
          <p>
          {t('AboutUs.tel')} <br />
            E-post: info@mariashairsalon.com <br />
            {t('AboutUs.obs')}
          </p>
        </div>
        <div className="imageTop"></div>
        <div className="bottomLeft"><h1>{t('AboutUs.visit')}</h1></div>
        <div className="bottomRight">

        <MapArea>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapArea>
        </div>
      </div>
    </AboutStyle>
  );
}

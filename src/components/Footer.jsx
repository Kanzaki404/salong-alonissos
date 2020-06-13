import React from "react";
import styled from "styled-components";
import fb from "../assets/testSvg.svg";
import twitter from "../assets/twitter.svg";
import Instagram from "../assets/Instagram.svg";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

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

const MapArea = styled.div`
  margin: 15px 15px 0px 15px;
  padding-bottom: 15px;
`;
export default function Footer() {
  return (
    <StyledFooter>
      <VisitUs>
        <h1>Visit Us</h1>
        <hr />
      </VisitUs>

      <Information>
        <div className="left-info">
          <p>Email: maria@gmail.com</p>
          <p>Phone: +30 2223 025526</p>
          <p>Address: Epar.Od. Patitiriou-Gerakas Patitiri 370 05</p>
        </div>
        <div className="right-info">
          <p>Hours:</p>
          <div>
            <p>Mon - Fri </p>
            <p> 8:00-19:00 </p>
          </div>
          <hr />
          <div>
            <p>Sat - Sun </p>
            <p> 9:00-22:00 </p>
          </div>
        </div>
      </Information>
      <SocialMedia>
        <img className="fbIcon" src={fb} alt="facebook" />
        <img src={twitter} alt="instagram" />
        <img src={Instagram} alt="twitter" />
      </SocialMedia>

      <MapArea>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapArea>
    </StyledFooter>
  );
}

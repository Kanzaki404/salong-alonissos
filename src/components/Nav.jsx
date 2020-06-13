import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { useLocation } from "react-router-dom";
import {useTranslation} from 'react-i18next'
const NavBar = styled.nav`
  height: 0vh;
  background: Transparent;
  display: flex;
  justify-content: space-between;
`;
const StyledSelector = styled.select`
  padding: 10px;
  border: none;
  background: transparent;
  margin: 15px;
  font-size: 20px;
  outline-style: none;
  color: ${({ location }) =>
    location === "/" || location === "/hours" ? "white" : "black"};
  option {
    border: none;
    background: transparent;
    outline-style: none;
    color: black;
  }
`;

export default function Nav() {
  let location = useLocation();
  const {i18n} = useTranslation()


  function changeLanguageTo(lang){
    i18n.changeLanguage(lang)
  }

  return (
    <NavBar>
      <div>
        <Hamburger />
      </div>
      <div>
        <StyledSelector location={location.pathname} name="lang" id="lang"  onChange={(e)=>changeLanguageTo(e.target.value)}>
          <option value="en" >EN</option>
          <option value="gr" >GR</option>
        </StyledSelector>
      </div>
    </NavBar>
  );
}

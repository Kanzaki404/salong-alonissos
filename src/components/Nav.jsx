import React, {useState} from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import greece from '../assets/greece.png'
import uk from '../assets/uk.png'
import { useLocation } from "react-router-dom";
import {useTranslation} from 'react-i18next'
const NavBar = styled.nav`
  height: 0vh;
  background: Transparent;
  display: flex;
  justify-content: space-between;
`;
const LangIcon = styled.div`

   background-image: url(${({ lang }) => !lang  ? greece : uk});
   background-position: center;
    background-repeat: no-repeat;
    height: 30px;
    width: 60px;
    background-size: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-top: 2rem;
    margin-right: 1rem;
    &:hover {
      transform: scale(1.2);
    }

  `;

// const StyledSelector = styled.select`
//   padding: 10px;
//   border: none;
//   background: transparent;
//   margin: 15px;
//   font-size: 20px;
//   outline-style: none;

//   color: ${({ location }) =>
//     location === "/" || location === "/hours" ? "white" : "black"};
//   option {
//     border: none;

//     outline-style: none;
//     color: black;
//   }
// `;

export default function Nav() {
  let location = useLocation();
  const [lang, setLang] = useState(false)
  const {i18n} = useTranslation()


  function changeLanguageTo(lang){

    if(lang){
      i18n.changeLanguage('en')
    }else{
      i18n.changeLanguage('gr')
    }
    setLang(!lang)


  }

  return (
    <NavBar>
      <div>
        <Hamburger />
      </div>
      <div>
        <LangIcon onClick={()=>changeLanguageTo(lang)} lang={lang}></LangIcon>
      </div>
    </NavBar>
  );
}


{/* <StyledSelector location={location.pathname} name="lang" id="lang"  onChange={(e)=>changeLanguageTo(e.target.value)}>
          <option value="en" >EN</option>
          <option value="gr" >GR</option>
        </StyledSelector> */}
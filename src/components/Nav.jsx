import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

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
  color: white;
  option{
    border: none;
    background: transparent;
    outline-style: none;
    color: black
  }
`;

export default function Nav() {
  return (
    <NavBar>
      <div>
        <Hamburger />
      </div>
      <div>
        <StyledSelector name="lang" id="lang">
          <option value="EN">EN</option>
          <option value="GR">GR</option>
        </StyledSelector>
      </div>
    </NavBar>
  );
}

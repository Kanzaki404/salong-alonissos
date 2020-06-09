import React, { useState } from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';
import { useLocation } from 'react-router-dom'

const HamburgerStyle = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  margin: 15px;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

    display: none;


  div {
    width: 2rem;
    height: 0.15rem;
    background-color:${({ location }) => location === '/' || location === '/hours' ? 'white' : 'black'};

    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => !open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => !open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => !open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;



export default function Hamburger() {
    const [open, setOpen] = useState(true)
    let location = useLocation();

    function callBackOpen(clicked){
        setOpen(clicked)
    }


    return (
        <React.Fragment>
            <HamburgerStyle location={location.pathname} open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </HamburgerStyle>
            <NavItems open = {open} clicked={(clicked) => callBackOpen(clicked)}/>
        </React.Fragment>
    )
}

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;

  li {
    padding: 10px;

    font-size: 20px;
    color: ${({ location }) =>
      location === "/" || location === "/hours" ? "white" : "black"};
    font-size: 23px;
    font-weight: 200;
    transition: 0.5s ease-in-out;
  }
  li:hover {
    border-bottom: 1px solid;
    border-color: ${({ location }) =>
      location === "/" || location === "/hours" ? "white" : "black"};
  }

  hr {
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(200, 200, 200, 0.93);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 100%;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;

    margin-top: 0px;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      font-size: 30px;
      font-weight: 200;
    }
    hr {
      float: left;
      width: 60%;
      border: none;
      background-color: #a2a2a2;
      height: 1px;
    }
  }
`;
export default function NavItems({ open, clicked }) {
  let location = useLocation();
  return (
    <Ul open={open} location={location.pathname}>
      <Link
        className="linku"
        to="/"
        onClick={() => clicked(!open)}
        style={{ textDecoration: "none" }}
      >
        <li>Home</li>
        <hr />
      </Link>
      <Link
        to="/services"
        onClick={() => clicked(!open)}
        style={{ textDecoration: "none" }}
      >
        <li>Services</li>
        <hr />
      </Link>
      <Link
        to="/prices"
        onClick={() => clicked(!open)}
        style={{ textDecoration: "none" }}
      >
        <li>Prices</li>
        <hr />
      </Link>
      <Link
        to="/hours"
        onClick={() => clicked(!open)}
        style={{ textDecoration: "none" }}
      >
        <li>Opening hours</li>
        <hr />
      </Link>
      <Link
        to="/gallery"
        onClick={() => clicked(!open)}
        style={{ textDecoration: "none" }}
      >
        <li>Gallery</li>
        <hr />
      </Link>
      <Link
        to="/about"
        onClick={() => clicked(!open)}
        style={{ textDecoration: "none" }}
      >
        <li>About Us</li>
        <hr />
      </Link>
    </Ul>
  );
}

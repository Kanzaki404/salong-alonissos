import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    padding-left: 15px;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(200, 200, 200, 0.8);
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
      margin: 0.5rem;
      font-size: 
    }
    hr {
      float: left;
      width: 60%;
      color: #ccc;
      border: none;
    }
  }
`;
export default function NavItems({ open, clicked }) {
  return (
    <Ul open={open}>
      <Link
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

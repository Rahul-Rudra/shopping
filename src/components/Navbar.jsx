import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
import { ProductContext } from "../Context";
export default function Navbar() {
  const data = useContext(ProductContext);
  const { cart } = data;
  return (
    <>
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/store" className="ml-auto">
          <ButtonContainer>
            <span className="m-3">
              <i className="fas fa-cart-plus" />
            </span>
            my cart{" "}
            <span
              className={cart.length > 0 ? "icon_number" : ""}
              style={{ color: "black" }}
            >
              {" " + cart.length > 0 ? cart.length : ""}
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    </>
  );
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

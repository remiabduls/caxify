import React, { useState } from "react";

import styled from "styled-components";

import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Container } from "../globalStyles";
import { mobile } from "../responsive";
import logobluer from "../images/logoblue.png";

//export { default as Navbar } from "./Navbar/Navbar";

const Nav = styled.nav`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1.2rem;
  top: 0;
  z-index: 70;
  background-color: #efecec;
  // background-color: #fff;

  // -webkit-box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
  //box-shadow: 0 4px 20px rgb(38 38 38 / 10%);
  //margin-bottom: 50px;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 70px;
  font-weight: 500;
  margin-left: 150px;
  margin-right: 160px;

  @media only screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    justify-self: flex-start;
    display: flex;
    align-items: center;
  }

  ${Container}
`;

const NavLogo = styled.div`
  color: grey;
  height: 90px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 30px;
  font-size: 3rem;
  //background-color: black;
  font-weight: 900;
  margin-top: -20px;
  font-family: "Josefin Sans", sans-serif;

  @media only screen and (max-width: 960px) {
    margin-left: 50px;
  }

  //object-fit: contain;
`;
const Image = styled.img`
  height: 100px;
`;

const Center = styled.div`
  align-items: center;
  margin-left: 70px;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: -30px;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Register = styled.div`
  border: 1px solid blue;
  padding: 10px 25px;
  font-weight: 600;
`;
const SignIn = styled.div`
  border: 1px solid blue;
  padding: 10px 25px;
`;
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 15px;
  margin-top: 5px;
  color: #1750b7;

  ${mobile({ display: "none", fontSize: "12px", marginLeft: "10px" })}
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  text-decoration: none;

  @media only screen and (max-width: 960px) {
    padding-top: 20px;
    position: absolute;
    top: 0;
    vertical-align: middle;
    border-style: none;
    //margin-right: 0.5rem;
    //transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    align-items: center;
    display: flex;
  }
`;

const OrdNavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Image src={logobluer} />
          </NavLogo>
          <Center></Center>
          <Right>
            <MenuItem>
              <Register> Login </Register>
            </MenuItem>

            <MenuItem>
              <SignIn>Get In Touch</SignIn>
            </MenuItem>

            <MenuItem></MenuItem>
          </Right>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default OrdNavBar;

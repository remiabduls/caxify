import React from "react";

import "react-phone-input-2/lib/style.css";

import styled from "styled-components";
import { Formik, Form } from "formik";
import { TextInput } from "./components/FormLib";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import PhoneInput2 from "./components/Input";
import background from "./images/backcax.jpg";
import logobluer from "./images/logobig.png";

const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#DC2626",
};
const Logo = styled.div`
  margin-left: 200px;

  // background-color: red;
`;
const Image = styled.img`
  height: 200px;
  margin-left: -50px;
`;
const AcctText = styled.div`
  color: white;
  font-size: 1.6rem;
  margin-top: -40px;
`;
const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;

  color: black;
  padding: 5px;
  margin-bottom: 40px;
`;
//input

const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 55px 65px;
  margin-left: 300px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

const StyledFormButton = styled.button`
  padding: 10px;

  background-color: transparent;
  font-size: 16px;

  border-radius: 25px;

  transition: ease-in-out 0.3s;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  height: 80px;
  left: 51px;
  margin-top: 30px;
  width: 580px;
  // padding: 35.5px 183.5px;
  align-items: center;
  background-color: #29acfa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  //top: 1364px;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  padding: 2px;
  margin-top: 10px;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;

function Signup() {
  return (
    <StyledContainer>
      <Logo>
        <Image src={logobluer} />
        <AcctText>Sign up or Login to Your Account</AcctText>
      </Logo>
      <div>
        <StyledFormArea>
          <StyledTitle color={colors.theme} size={30}>
            Signup Page
          </StyledTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
              repeatPassword: "",
              dateOfBirth: "",
              name: "",
            }}
          >
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="Daniel Benson"
                icon={<FiUser style={{ marginTop: "10px" }} />}
              />
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="carxify@example.com"
                icon={<FiMail style={{ marginTop: "10px" }} />}
              />
              <PhoneInput2 />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="***********"
                icon={<FiLock style={{ marginTop: "10px" }} />}
              />
              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="***********"
                icon={<FiLock style={{ marginTop: "10px" }} />}
              />
              <ButtonGroup>
                <StyledFormButton type="submit"> Signup</StyledFormButton>
              </ButtonGroup>
            </Form>
          </Formik>
          <ExtraText>
            Already have an account? <TextLink to="/login">Login</TextLink>
          </ExtraText>
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
}

export default Signup;

import React from "react";
import {
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  ExtraText2,
  TextLink,
  TextLink1,
  TextLink2,
  TextLink3,
} from "./components/Styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "styled-components";
import { StyledContainer } from "./components/Styles";

import { Formik, Form } from "formik";
import { TextInput } from "./components/FormLib";
//icons

import { FiMail, FiLock } from "react-icons/fi";
import { useParams } from "react-router-dom";
import logobluer from "./images/logobig.png";
import {Link} from "react-router-dom";

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
const LineGroupOne = styled.div`
  //display: flex;

  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;
const Line = styled.div`
  height: 1px;
  width: 260px;
  background-color: #b9b9b9;
  margin-top: 50px;
`;
const Line2 = styled.div`
  height: 1px;
  width: 260px;
  background-color: #b9b9b9;
  // margin-top: 50px;
  position: absolute;
  right: 120px;
`;
const LineText = styled.text`
  position: absolute;
  margin-top: -25px;
  font-size: 2rem;
  font-weight: 600;
  margin-left: -15px;
`;
const ButtonGroup2 = styled.div`
  height: 40px;
  margin-bottom: 30px;
`;
const GoogleBtn = styled.button`
  width: 250px;
  height: 55px;
  float: left;
  background-color: white;
  outline: none;
  border: 1.5px solid grey;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;
const GoogleText = styled.text`
  // margin-top: 20px;
  margin-left: 10px;
  font-size: 1rem;
  font-weight: 600;
`;
const FaceBookBtn = styled.button`
  width: 250px;
  height: 55px;
  float: right;
  background-color: #0a60b1;
  border-radius: 8px;
  display: flex;
  outline: none;
  border: none;
  align-items: center;
`;
const FacebookText = styled.text`
  margin-left: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  //margin-top: 15px;
`;
const Login = () => {
  const { userEmail } = useParams();
  return (
    <StyledContainer>
      <Logo>
        <Image src={logobluer} />
        <AcctText>Sign up or Login to Your Account</AcctText>
      </Logo>

      <div>
        <StyledFormArea>
          <StyledTitle color={colors.theme} size={30}>
            Login Page
          </StyledTitle>
          <Formik
            initialValues={{
              email: userEmail,
              password: "",
            }}
          >
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="Username"
                icon={<FiMail style={{ marginBottom: "50px" }} />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="***********"
                icon={<FiLock  />}
              />
              <ButtonGroup>
                <StyledFormButton> Login</StyledFormButton>
              </ButtonGroup>
            </Form>
          </Formik>
          <LineGroupOne>
            <Line></Line>
            <LineText>or</LineText>
            <Line2></Line2>
          </LineGroupOne>
          <ButtonGroup2>
            <GoogleBtn>
              <GoogleIcon
                style={{
                  color: "red",
                  marginLeft: "20px",
                  marginBottom: "5px",
                }}
              />
              <GoogleText> Continue with google </GoogleText>
            </GoogleBtn>
            <FaceBookBtn>
              <FacebookIcon
                style={{
                  marginBottom: "5px",
                  marginLeft: "20px",
                  color: "white",
                  fontSize: "1.7rem",
                }}
              />

              <FacebookText> Continue with facebook </FacebookText>
            </FaceBookBtn>
          </ButtonGroup2>
          <ExtraText>
            <TextLink1> Forgot password? </TextLink1>
            <TextLink to="/">New account</TextLink>
          </ExtraText>
          <ExtraText2>
            <Link to="/reset-password"><TextLink2  >  Reset password? </TextLink2></Link>
            <TextLink3 to="/signup">Sign up</TextLink3>
          </ExtraText2>
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

export default Login;

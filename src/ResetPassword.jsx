import React from "react";
import {
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  colors,
  ButtonGroup,
} from "./components/Styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { StyledContainer } from "./components/Styles";

import { Formik, Form } from "formik";
import { TextInput } from "./components/FormLib";
//icons

import { FiMail } from "react-icons/fi";
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
const TextLinkDiv = styled.a`
  text-decoration: none;
  color: #000000;
  transition: ease-in-out 0.3s;
  float: left;
  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;
const ExtraTextDiv = styled.p`
  font-size: 3rem;
  //text-align: center;
  color: black;
  padding: 2px;
  margin-top: 60px;
  margin-bottom: 20px;
  font-weight: 600;
  //background-color: red;
`;

const ResetPassword = () => {
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
                icon={<FiMail style={{ marginTop: "15px" }} />}
              />

              <Link to= "/verify"><ButtonGroup >
                <StyledFormButton style={{ fontWeight: "600" }} >
                  {" "}
                  CONTINUE
                </StyledFormButton>
              </ButtonGroup></Link>
            </Form>
          </Formik>

          <ExtraTextDiv>
            {" "}
            <ArrowBackIcon
              style={{ fontSize: "2rem", float: "left", marginTop: "20px" }}
            />
            <Link to="/"><TextLinkDiv >Back</TextLinkDiv></Link>
          </ExtraTextDiv>
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

export default ResetPassword;

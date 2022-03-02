import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkN } from "react-router-dom";

//background

import background from "../images/backcax.jpg";

export const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#DC2626",
};

//styled components
export const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
`;
export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;

  color: black;
  padding: 5px;
  margin-bottom: 40px;
`;
//input

export const StyledTextInput = styled.input`
  width: 680px;
  padding: 15px;

  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${colors.dark1};
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;
  ${(props) =>
    props.invalid &&
    `background-color: ${colors.red}; color: $
{colors.primary};`}
  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: white;
  text-align: center;
  padding: 55px 65px;
  margin-left: 20px;
  margin-bottom: 50px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  background-color: transparent;

  color: white;
  border-radius: 25px;
  transition: ease-in-out 0.3s;
  height: 80px;
  left: 51px;
  font-size: 2rem;
  width: 580px;
  font-weight: 600;
  align-items: center;
  background-color: #29acfa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  //top: 1364px;
  border: 0;
  cursor: pointer;
`;

export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  //text-align: center;
  color: #b9b9b9;
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 20px;
  //background-color: red;
`;
export const ExtraText2 = styled.p`
  font-size: ${(props) => props.size}px;
  //text-align: center;
  color: #b9b9b9;
  padding: 2px;
  margin-top: 10px;
  //background-color: red;
`;
export const TextLink1 = styled.a`
  text-decoration: none;
  color: #5e5e5e;
  transition: ease-in-out 0.3s;
  float: left;
  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;
export const TextLink = styled(Link)`
  text-decoration: none;
  color: #5e5e5e;
  transition: ease-in-out 0.3s;
  float: right;
  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;
export const TextLink2 = styled.a`
  text-decoration: none;
  color: black;
  transition: ease-in-out 0.3s;
  float: left;
  text-decoration: underline;
  font-weight: bold;
  font-size: 1.3rem;
  &:hover {
    letter-spacing: 2px;
  }
`;
export const TextLink3 = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  transition: ease-in-out 0.3s;
  float: right;
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    letter-spacing: 2px;
  }
`;

//icons
export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  top: 35px;
  ${(props) => props.right && `right: 15px;`};
  ${(props) => !props.right && `left: 15px;`};
`;

//copyright

export const CopyrightText = styled.p`
  padding: 5px;
  margin: 20px;
  text-align: center;
  color: ${colors.light2};
`;

//export const TextInput = styled.input``;

import React, { useState } from "react";

import styled from "styled-components";
import InputCode from "./InputCode";
import logobluer from "../images/logobig.png";
import background from "../images/backcax.jpg";
import "./verify.css";

const Image = styled.img`
  height: 200px;
  margin-left: -50px;
`;

const Logo = styled.div`
  margin-left: 200px;
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

const Verify = () => {
  const [loading, setLoading] = useState(false);
  return (
    <StyledContainer>
      <div className="Verify">
        <Logo>
          <Image src={logobluer} />
          <AcctText>Sign up or Login to Your Account</AcctText>
        </Logo>
        <InputCode
          length={6}
          label="Input the code sent to carxify@gmail.com"
          loading={loading}
          onComplete={(code) => {
            setLoading(true);
            setTimeout(() => setLoading(false), 10000);
          }}
        />
      </div>
    </StyledContainer>
  );
};

export default Verify;

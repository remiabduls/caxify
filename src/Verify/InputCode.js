import React, { useState, useRef } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const InputCode = ({ length, label, loading, onComplete }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);
  // Typescript
  // useRef<(HTMLInputElement | null)[]>([])

  const StyledFormButton = styled.button`
    padding: 10px;
    background-color: transparent;
    font-size: 25px;
    border-radius: 25px;
    transition: ease-in-out 0.3s;
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
  `;
  const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
  `;

  const Title = styled.h1``;

  const Resend = styled.h1`
    margin-left: 470px;
    margin-top: 30px;
  `;

  const BtnText = styled.text`
    letter-spacing: 1px;
    line-height: 25px;
    min-height: 27px;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;

    white-space: nowrap;
  `;
  const CancelDiv = styled.h1`
    letter-spacing: 1px;
    line-height: 25px;
    justify-content: center;
    align-self: center;
    font-style: normal;
    font-weight: 600;
    font-size: 1.7rem;
    margin-top: 50px;
  `;

  const processInput = (e, slot) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <>
      <div className="code-input">
        <Title>Reset your password</Title>
        <label className="code-label">{label}</label>
        <div className="code-inputs">
          {code.map((num, idx) => {
            return (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={num}
                autoFocus={!code[0].length && idx === 0}
                readOnly={loading}
                onChange={(e) => processInput(e, idx)}
                onKeyUp={(e) => onKeyUp(e, idx)}
                ref={(ref) => inputs.current.push(ref)}
              />
            );
          })}
        </div>
       <Link to="/verify" > <Resend> Resend </Resend></Link>
        <ButtonGroup>
          <StyledFormButton type="submit">
            {" "}
            <BtnText >CONTINUE </BtnText>
          </StyledFormButton>
        </ButtonGroup>
        <Link to="/"><CancelDiv>CANCEL</CancelDiv></Link>
      </div>
    </>
  );
};

export default InputCode;
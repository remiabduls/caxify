import React, { useState } from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  Description,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import toyota from "../images/toyota.png";
import gaspump from "../images/gaspump2.png";
import Engine from "../images/Engine.png";
import seat from "../images/doorer.png";
import door from "../images/door.png";
import(
  "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,600;1,100;1,300&display=swap"
);
const Container = styled.div`
  padding: 55px;
  display: flex;
  // background-color: cadetblue;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const Wrapp = styled.div`
  // border: 2px solid red;
  height: 65vh;
  display: flex;
  width: 60vw;
  margin: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
  // background: #c7d4f1;
  position: relative;
`;
const Contain = styled.div`
  width: 60vw;
  //position: absolute;
  display: flex;
  align-items: center;

  display: flex;
  ${mobile({ display: "none" })};
`;

const Wrapper = styled.div`
  height: 60vh;
  //background-color: red;
  display: flex;
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  display: flex;
  //margin-right: 5px;
  align-items: center;
  justify-content: center;
  width: 60vw;
  flex-shrink: 0;
`;
const Image = styled.img`
  display: flex;
  height: 700px;
  //margin-top: 130px;
  ${mobile({ height: "50vh" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  font-family: "Josefin Sans", sans-serif;
  margin-top: 20px;
  height: 120vh;

  border: 1px solid #e5e5e5;
  border-radius: 10px;
  //height: 1007px;

  //position: absolute;
  top: 507px;
  width: 550px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  margin-top: 10px;
`;

const Rectangle = styled.div`
  background-color: aquamarine;
  border-radius: 10px;
  height: 38px;
  //left: 51px;
  margin-top: 15px;
  text-align: center;
  padding-top: 5px;
  // position: absolute;
  top: 630px;
  width: 148px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #9b9a9a;
  margin-top: 40px;
  margin-bottom: 10px;
  left: 51px;
  letter-spacing: 0;
  line-height: 20px;

  top: 715px;
  white-space: nowrap;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const StyledLi = styled.li`
  float: left;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: red;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const Select = styled.div`
  padding: 20px;
  //width: 500px;
  margin-right: 20px;
  width: 450px;
  padding: 15.5px 26px;
  border-radius: 10px;
  display: flex;
  outline: none;
  font-size: 30px;
  height: 75px;
  border: 1px solid grey;

  ${mobile({ margin: "10px 0px" })};
`;
const ArrowIcon = styled.div`
  //margin-top: 20px;
  //background-color: #d81818;
  margin-left: 55px;
  //  float: right;
`;
const Option = styled.option`
  color: black;
  background: white;
  font-weight: small;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

const Line = styled.div`
  height: 1px;
  background-color: #b1b1b1;
  margin-top: 40px;
`;
const CalIcon = styled.div`
  margin-top: 20px;
`;
const Calender = styled.div`
  height: 75px;
  border: 1px solid grey;
  padding-left: 395px;
  border-radius: 10px;
  width: 450px;
`;
const CheckList = styled.div`
  margin-top: 25px;

  //padding: 5px;
  display: flex;
`;
const CheckDesc = styled.div`
  margin-left: 20px;
  font-size: 1.4rem;
  font-weight: 600;
`;
const ContinueBtn = styled.button`
  height: 100px;
  left: 51px;
  margin-top: 30px;
  width: 450px;
  // padding: 35.5px 183.5px;
  align-items: center;
  background-color: #29acfa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  //top: 1364px;
  border: 0;
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
const IconDiv = styled.div`
  position: absolute;
  height: 25vh;
  width: 53vw;
  margin-top: 559px;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  align-items: flex-start;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  display: flex;
  min-width: 970px;
`;
const OverLapGroup = styled.div`
  height: 226px;
  position: relative;
  width: 205px;
  align-items: center;
  justify-content: center;
  // background-color: red;
  // border-left: 1px solid blue;
`;
const ImageIcon = styled.img`
  height: 70px;
  left: 50px;
  object-fit: contain;
  position: absolute;
  top: 34px;
  width: 90px;
`;
const DescUpper = styled.div`
  left: 49px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 135px;
  white-space: nowrap;
`;
const DescLower = styled.div`
  left: 48px;
  letter-spacing: 0;
  line-height: 25px;
  position: absolute;
  top: 176px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 1.5rem;
  // background-color: red;
`;

const FlexRow = styled.div`
  align-items: flex-start;
  display: flex;
  height: 106px;
  justify-content: center;
  margin-top: 30px;
  min-width: 631px;
  margin-bottom: 100px;
`;

const FlexText = styled.text`
  font-size: 2.7rem;
  font-weight: 700;
  margin-top: 20px;
`;
const BlueLine = styled.div`
  height: 7px;
  background-color: #0d83e4;
  width: 50px;
  position: absolute;
  margin-top: 90px;
`;

const SimilarContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 145px;
  min-width: 1600px;
  margin-bottom: 150px;
  padding-left: 10px;
  //background-color: red;
`;
const OverLap1 = styled.div`
  border-radius: 10px;
  height: 542px;
  position: relative;
  width: 380px;

  //margin-left: 10px;
`;
const Group = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 12px #d4dde2;
  display: flex;
  height: 542px;
  //margin-left: 10px;
  position: absolute;
  top: 0;
  width: 380px;
  cursor: pointer;
`;
const OverLap2 = styled.div`
  border-radius: 10px;
  height: 542px;
  position: relative;
  width: 380px;
  margin-left: 10px;
`;
const OverLap3 = styled.div`
  border-radius: 10px;
  height: 542px;
  position: relative;
  width: 380px;
  margin-left: 10px;
`;
const OverLap4 = styled.div`
  border-radius: 10px;
  height: 542px;
  position: relative;
  width: 380px;
  margin-left: 10px;
`;

const RectangleBox = styled.div`
  background-color: #c5c5c5;
  border-radius: 10px;
  flex: 1;
  height: 291px;
`;
const RectangleRect = styled.div`
  left: 49px;
  letter-spacing: 0;
  line-height: 15px;
  position: absolute;

  white-space: nowrap;
  background-color: aquamarine;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 28px;
  left: 31px;

  top: 313px;
  width: 98px;
`;
const RectText = styled.div`
  left: 55px;
  letter-spacing: 0;
  line-height: 15px;
  padding: 7px 0px 5px 15px;
  //position: absolute;
  top: 320px;
  white-space: nowrap;
`;
const Address = styled.div`
  left: 31px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 362px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 1.9rem;
`;
const EngineTypeBox = styled.button`
  left: 31px;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
  top: 417px;
  //margin-left: 20px;
  white-space: nowrap;
  background-color: #d4dde2;
  border-radius: 5px;
  height: 30px;
  justify-content: center;
  opacity: 0.8;
  align-items: center;
  top: 417px;
  width: 100px;
  border: none;
`;
const EngineBox = styled.text`
  font-size: 1.2rem;
  font-weight: 600;
`;

const CarType = styled.button`
  left: 158px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 417px;
  white-space: nowrap;
  background-color: #d4dde2;
  border-radius: 5px;
  height: 30px;
  justify-content: center;
  opacity: 0.8;
  align-items: center;
  top: 417px;
  width: 120px;
  border: none;
`;
const PriceLine = styled.div`
  width: 380px;
  height: 1px;
  background-color: #cfcfcf;
  position: absolute;
  top: 470px;
`;

const Car = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;
const StartPrice = styled.div`
  left: 31px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 492px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 1.3rem;
`;

const Price = styled.div`
  left: 228px;
  letter-spacing: 0;
  line-height: 25px;
  position: absolute;
  top: 491px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 1.3rem;
`;

const Slider = () => {
  return (
    <div>
      <Container>
        <Wrapp>
          <Contain>
            <Wrapper>
              <Slide>
                <Image src={toyota} />
              </Slide>
            </Wrapper>
          </Contain>
        </Wrapp>

        <IconDiv>
          <OverLapGroup>
            <ImageIcon src={gaspump} />
            <DescUpper>Fuel type</DescUpper>
            <DescLower>Petrol</DescLower>
          </OverLapGroup>
          <OverLapGroup style={{ borderLeft: "1px solid #dcdcdc" }}>
            <ImageIcon src={Engine} />
            <DescUpper>Transmission</DescUpper>
            <DescLower style={{ marginRight: "10px" }}>Automatic</DescLower>
          </OverLapGroup>
          <OverLapGroup style={{ borderLeft: "1px solid #dcdcdc" }}>
            <ImageIcon src={seat} />
            <DescUpper style={{ marginLeft: "20px" }}>Seats</DescUpper>
            <DescLower style={{ marginLeft: "30px" }}>5</DescLower>
          </OverLapGroup>
          <OverLapGroup style={{ borderLeft: "1px solid #dcdcdc" }}>
            <ImageIcon src={door} />

            <DescUpper style={{ marginLeft: "20px" }}>Doors</DescUpper>
            <DescLower style={{ marginLeft: "30px" }}>4</DescLower>
          </OverLapGroup>
          <OverLapGroup style={{ borderLeft: "1px solid #dcdcdc" }}>
            <ImageIcon src={Engine} />
            <DescUpper style={{ marginLeft: "20px" }}>Engine</DescUpper>
            <DescLower style={{ marginLeft: "30px" }}>2.4L</DescLower>
          </OverLapGroup>
        </IconDiv>

        <InfoContainer>
          <Title>Toyota Camry</Title>
          <Rectangle>Available</Rectangle>
          <Desc>Choose subscription length</Desc>

          <Select>
            <Option value="1"> 2 Month - NGN 50,000</Option>
            <ArrowIcon>
              <KeyboardArrowDownOutlinedIcon style={{ fontSize: "3rem" }} />
            </ArrowIcon>
          </Select>
          <Line></Line>
          <Desc>Choose start date</Desc>
          <Calender>
            <CalIcon>
              <CalendarTodayOutlinedIcon style={{ fontSize: "2rem" }} />
            </CalIcon>
          </Calender>
          <Desc style={{ fontSize: "17px" }}>
            Vehicle will be delivered 2-3 days after selected date
          </Desc>
          <Line></Line>
          <Desc
            style={{ fontSize: "20px", color: "#c4c1c1", marginBottom: "20px" }}
          >
            Inclusive package
          </Desc>
          <CheckList>
            <CheckCircleOutlinedIcon
              style={{ fontSize: "2rem", color: "#00ce6e" }}
            />
            <CheckDesc>Insurance</CheckDesc>
          </CheckList>
          <CheckList>
            <CheckCircleOutlinedIcon
              style={{ fontSize: "2rem", color: "#00ce6e" }}
            />{" "}
            <CheckDesc>Roadside Assistance </CheckDesc>
          </CheckList>
          <CheckList>
            <CheckCircleOutlinedIcon
              style={{ fontSize: "2rem", color: "#00ce6e" }}
            />{" "}
            <CheckDesc>Switch Cars</CheckDesc>
          </CheckList>
          <CheckList>
            <CheckCircleOutlinedIcon
              style={{ fontSize: "2rem", color: "#00ce6e" }}
            />{" "}
            <CheckDesc> Maintenance</CheckDesc>
          </CheckList>
          <Line></Line>
          <ContinueBtn>
            <BtnText>CONTINUE</BtnText>
          </ContinueBtn>
        </InfoContainer>
      </Container>
      <FlexRow>
        <FlexText>Similar Vehicles</FlexText>
        <BlueLine></BlueLine>
      </FlexRow>

      <SimilarContainer>
        <OverLap1>
          <Group>
            <RectangleBox> </RectangleBox>
          </Group>
          <RectangleRect>
            <RectText>Available</RectText>
          </RectangleRect>
          <Address>2019 Toyota Camry</Address>
          <EngineTypeBox>
            <EngineBox>Petrol </EngineBox>
          </EngineTypeBox>
          <CarType>
            <Car>Automatic</Car>
          </CarType>
          <PriceLine></PriceLine>
          <StartPrice>Starting from:</StartPrice>
          <Price> NGN 50,000</Price>
        </OverLap1>

        <OverLap2>
          <Group>
            <RectangleBox> </RectangleBox>
          </Group>
          <RectangleRect>
            <RectText>Available</RectText>
          </RectangleRect>
          <Address>2019 Toyota Camry</Address>
          <EngineTypeBox>
            <EngineBox>Petrol </EngineBox>
          </EngineTypeBox>
          <CarType>
            <Car>Automatic</Car>
          </CarType>
          <PriceLine></PriceLine>
          <StartPrice>Starting from:</StartPrice>
          <Price> NGN 50,000</Price>
        </OverLap2>

        <OverLap3>
          <Group>
            <RectangleBox> </RectangleBox>
          </Group>
          <RectangleRect>
            <RectText>Available</RectText>
          </RectangleRect>
          <Address>2019 Toyota Camry</Address>
          <EngineTypeBox>
            <EngineBox>Petrol </EngineBox>
          </EngineTypeBox>
          <CarType>
            <Car>Automatic</Car>
          </CarType>
          <PriceLine></PriceLine>
          <StartPrice>Starting from:</StartPrice>
          <Price> NGN 50,000</Price>
        </OverLap3>

        <OverLap4>
          <Group>
            <RectangleBox> </RectangleBox>
          </Group>
          <RectangleRect>
            <RectText>Available</RectText>
          </RectangleRect>
          <Address>2019 Toyota Camry</Address>
          <EngineTypeBox>
            <EngineBox>Petrol </EngineBox>
          </EngineTypeBox>
          <CarType>
            <Car>Automatic</Car>
          </CarType>
          <PriceLine></PriceLine>
          <StartPrice>Starting from:</StartPrice>
          <Price> NGN 50,000</Price>
        </OverLap4>
      </SimilarContainer>
    </div>
  );
};

export default Slider;

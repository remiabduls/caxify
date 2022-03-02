import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

import logobluer from "../images/logobig.png";

const Container = styled.div`
  display: flex;

  background-color: #0a9ff5;
  color: white;
  height: 45vh;
  padding-top: 60px;
  padding-left: 100px;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 95px;
  //padding: 20px;
`;
const Image = styled.img`
  height: 100px;
`;

const Logo = styled.h1`
  letter-spacing: 3px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding-left: 190px;
  margin-left: 50px;
  
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
 
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Image src={logobluer} />
        </Logo>
        <Desc>Connect with us</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Company</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Along Path , Nigeria
          Ikeja 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@Confident.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

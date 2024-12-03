import FooterLeft from "../../assets/svg/FooterLeft";
import FooterRight from "../../assets/svg/FooterRight";
import {
  Box,
  Container,
  Heading,
  Text,
  ListWrapper,
  MainText,
  Solutions,
  LeftWrapper,
  RightWrapper,
} from "../../styles/components/Footer";

const Footer = () => {
  return (
    <Container>
      <LeftWrapper>
        <FooterLeft />
      </LeftWrapper>
      <Box>
        <MainText>We are recruitment agency that help you find more talents to develop business</MainText>
        <Solutions>
          <ListWrapper>
            <Heading>Solution</Heading>
            <Text>Pricing</Text>
            <Text>Meet Our Team</Text>
            <Text>Blog</Text>
            <Text>HR Guides</Text>
            <Text>Customer Testimonials</Text>
            <Text>Outsourcing</Text>
            <Text>Privacy Policy</Text>
          </ListWrapper>
          <ListWrapper>
            <Heading>Our Services</Heading>
            <Text>HR Training</Text>
            <Text>Careers</Text>
            <Text>Events</Text>
            <Text>Contact Us</Text>
          </ListWrapper>
          <ListWrapper>
            <Heading>Help & Support</Heading>
            <Text>Review</Text>
            <Text>Find A Partner</Text>
            <Text>Why Recrutie</Text>
            <Text>HR Guides</Text>
          </ListWrapper>
        </Solutions>
      </Box>
      <RightWrapper>
        <FooterRight />
      </RightWrapper>
    </Container>
  );
};

export default Footer;

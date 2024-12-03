import YellowSideProp from "../../assets/svg/YellowSideProp";
import Rectangle from "../../assets/images/rectangle.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Container,
  Content,
  Heading,
  HeadingWrapper,
  ImageContainer,
  LeftView,
  LowerContent,
  MainWrapper,
  NumberBox,
  RightView,
  NewSlider,
  SliderContent,
  SliderHeading,
  SvgWrapper,
  TextBox,
  TextContainer,
  TextWrapper,
  UpperContent,
  UpperSvgWrapper,
  Wrapper,
} from "../../styles/views/Achievements";
import Lines from "../../assets/svg/lines";
import Background from "../../assets/svg/background";
import UpperBackground from "../../assets/svg/upperBackground";
import { styled } from "styled-components";

const Achievements = () => {
  const SliderWrap = styled(Slider)`
    width: 100%;
    max-width: 1200px;
  `;

  const data = [
    {
      heading: "Foreign Expats Recruitment",
      upperText:
        "If you're looking to scale your business with a skilled, compliant, and reliable foreign workforce, Hire Hub Solutions is here to help. Our team is ready to discuss your specific needs and offer tailored staffing solutions to drive your business forward.",
      lowerText: "Get in touch with us today to learn more about how we can assist with your staffing needs.",
    },
    {
      heading: "Foreign Expats Recruitment",
      upperText:
        "If you're looking to scale your business with a skilled, compliant, and reliable foreign workforce, Hire Hub Solutions is here to help. Our team is ready to discuss your specific needs and offer tailored staffing solutions to drive your business forward.",
      lowerText: "Get in touch with us today to learn more about how we can assist with your staffing needs.",
    },
    {
      heading: "Foreign Expats Recruitment",
      upperText:
        "If you're looking to scale your business with a skilled, compliant, and reliable foreign workforce, Hire Hub Solutions is here to help. Our team is ready to discuss your specific needs and offer tailored staffing solutions to drive your business forward.",
      lowerText: "Get in touch with us today to learn more about how we can assist with your staffing needs.",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <LeftView>
        <YellowSideProp />
      </LeftView>
      <MainWrapper>
        <Wrapper>
          <Box>
            <NumberBox>834.0 K</NumberBox>
            <TextBox>Total Freelancer</TextBox>
          </Box>
          <Box>
            <NumberBox>732.0 K</NumberBox>
            <TextBox>Positive Review</TextBox>
          </Box>
          <Box>
            <NumberBox>90.0 K</NumberBox>
            <TextBox>Order Received</TextBox>
          </Box>
          <Box>
            <NumberBox>236.0 K</NumberBox>
            <TextBox>Project Complete</TextBox>
          </Box>
        </Wrapper>
        <Heading>
          <TextWrapper>/ our services /</TextWrapper>
          <HeadingWrapper>Connecting Talent, Supporting Projects</HeadingWrapper>
        </Heading>
        <SliderWrap {...settings}>
          {data?.map((item, index) => {
            return (
              <NewSlider key={index}>
                <ImageContainer>
                  <img alt="no-image" src={Rectangle} />
                </ImageContainer>
                <Content>
                  <UpperSvgWrapper>
                    <UpperBackground />
                  </UpperSvgWrapper>
                  <TextContainer>
                    <SliderHeading>{item.heading}</SliderHeading>
                    <SliderContent>
                      <UpperContent>{item?.upperText}</UpperContent>
                      <LowerContent>{item.lowerText}</LowerContent>
                    </SliderContent>
                  </TextContainer>
                  <SvgWrapper>
                    <Background />
                  </SvgWrapper>
                </Content>
              </NewSlider>
            );
          })}
        </SliderWrap>
      </MainWrapper>
      <RightView>
        <Lines />
      </RightView>
    </Container>
  );
};

export default Achievements;

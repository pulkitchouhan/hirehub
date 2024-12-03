import LeftContentImage from "../../assets/images/left-image.png";
import RightContentImage from "../../assets/images/right-Image.png";

import {
  A,
  FullContainer,
  ImageContainer,
  InfoContainer,
  LeftImage,
  MainContainer,
  RightImage,
  InfoWrapper,
  InfoGrid,
  GridInfo,
  Heading,
  Content,
} from "../../styles/views/connections";

const ConnectionsInfo = () => {
  return (
    <FullContainer>
      <ImageContainer>
        <MainContainer>
          <LeftImage>
            <A></A>
            <img src={LeftContentImage} alt="Left Image" />
          </LeftImage>
          <RightImage>
            <img src={RightContentImage} alt="Right Image" />
          </RightImage>
        </MainContainer>
      </ImageContainer>
      <InfoContainer>
        <InfoWrapper>
          Bringing world-class talent to India’s civil industry, we streamline access to skilled professionals for
          impactful infrastructure projects
        </InfoWrapper>
        <InfoGrid>
          <GridInfo>
            <Heading>Global Talent Network</Heading>
            <Content>Connecting skilled professionals worldwide with India’s top civil projects.</Content>
          </GridInfo>
          <GridInfo>
            <Heading>Streamlined Hiring</Heading>
            <Content>Simplified onboarding, transparent hiring, and smooth communication.</Content>
          </GridInfo>
          <GridInfo>
            <Heading>Tailored Opportunities</Heading>
            <Content>Matching professionals to roles that align with their unique skills.</Content>
          </GridInfo>
          <GridInfo>
            <Heading>Quality and Safety Assurance</Heading>
            <Content>Rigorous vetting to meet industry standards for a secure work environment.</Content>
          </GridInfo>
        </InfoGrid>
      </InfoContainer>
    </FullContainer>
  );
};

export default ConnectionsInfo;

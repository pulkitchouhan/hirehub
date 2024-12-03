import { MainContainer, ImageContainer, Box, BoxHeading, BoxInfo } from "../../styles/views/policy";
import PolicyImage from "../../assets/images/covid-safety-protocol.png";
const Policy = () => {
  return (
    <MainContainer>
      <Box>
        <BoxHeading>Safety, Health, and Environmental Management Policy</BoxHeading>
        <BoxInfo>
          <ul>
            <li>
              At Hire Hub Solutions, we take the safety and well-being of our workers seriously. We are fully committed
              to ensuring that all our workers are placed in safe and healthy working environments. Our Safety, Health,
              and Environmental Management Policy (SHE Policy)
            </li>
            <li>
              includes the following principles:Worker Safety: We ensure that all our workers are provided with adequate
              safety training and protective equipment before starting their assignments. We closely monitor job sites
              for compliance with safety regulations and best practices.
            </li>
            <li>
              Health and Wellness: We work closely with employers to ensure that workers are provided with proper health
              and wellness resources, including access to healthcare facilities when needed. We promote a culture of
              health-consciousness among our workforce.
            </li>
          </ul>
        </BoxInfo>
      </Box>
      <ImageContainer>
        <img src={PolicyImage} alt="no-preview" />
      </ImageContainer>
    </MainContainer>
  );
};

export default Policy;

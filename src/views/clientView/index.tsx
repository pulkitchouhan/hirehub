import {
  BlueBox,
  BlueBoxContent,
  BlueBoxHeading,
  Box,
  BoxContent,
  BoxHeading,
  BoxText,
  ClientBox,
  ClientName,
  ClientOccupation,
  Container,
  ImageContainer,
  MainContainer,
  ResContainer,
  SvgWrapper,
} from "../../styles/views/clientView";
import clientImage from "../../assets/images/imageclient.png";
import ClientSvg from "../../assets/svg/clientSvg";
import SideProps1 from "../../assets/svg/sideProp1";

const ClientView = () => {
  return (
    <ResContainer>
      <MainContainer>
        <Container>
          <ImageContainer>
            <img src={clientImage} alt="no-image" />
          </ImageContainer>
          <Box>
            <ClientSvg />
            <BoxContent>
              <BoxHeading>What Our Clients Say About Us</BoxHeading>
              <BoxText>
                "Hire Hub Solutions has been a game-changer for our business. They provided us with skilled workers who
                fit perfectly into our team. The process was smooth, and their customer service was outstanding!"
              </BoxText>
            </BoxContent>
            <ClientBox>
              <ClientName>Michael Brown</ClientName>
              <ClientOccupation>Operations Lead</ClientOccupation>
            </ClientBox>
          </Box>
        </Container>
        <BlueBox>
          <SvgWrapper>
            <SideProps1 />
          </SvgWrapper>

          <BlueBoxHeading>Why Choose Hire Hub Solutions?</BlueBoxHeading>
          <BlueBoxContent>
            <ul>
              <li>Global Talent Pool: Access to skilled foreign professionals across industries.</li>
              <li>Streamlined Process: Seamless recruitment and deployment</li>
              <li>Expertise & Experience: Proven track record in international staffing.</li>
              <li>Compliance & Ethics: Legal and ethical practices aligned with global standards.</li>
            </ul>
          </BlueBoxContent>
        </BlueBox>
      </MainContainer>
    </ResContainer>
  );
};

export default ClientView;

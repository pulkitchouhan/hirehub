import {
  BoxAddress,
  BoxContentWrapper,
  BoxHeading,
  BoxText,
  ContactUsHeading,
  ContactUsText,
  ContactUsWrapper,
  Content,
  Heading,
  ImageWrapper,
  ImgContectWrapper,
  ImgEmail,
  ImgInfo,
  ImgName,
  InnerWrapper,
  MainContainer,
} from "../../styles/views/contactus";
import Contactusimg from "../../assets/images/contactus.png";
import BlackSideProp from "../../assets/svg/blackSideProp";

const ContactUs = () => {
  return (
    <MainContainer>
      <div></div>
      <InnerWrapper>
        <Heading>
          <ContactUsHeading>/ meet our experts /</ContactUsHeading>
          <ContactUsText>Contact Us</ContactUsText>
        </Heading>
        <Content>
          <ImageWrapper>
            <img src={Contactusimg} alt="" />
            <ImgContectWrapper>
              <ImgName>Abdul Vahid</ImgName>
              <ImgEmail>info@hirehubz.com</ImgEmail>
              <ImgInfo>Worked in Vedanta(HZL) with the collaboration of Shaft Sinkers Mauritius since 2012</ImgInfo>
            </ImgContectWrapper>
          </ImageWrapper>
          <ContactUsWrapper>
            <BoxHeading>Our Core Values</BoxHeading>
            <BoxContentWrapper>
              <BoxText>
                At Hire Hub Solutions, we operate based on the following core values: Integrity: We believe in
                transparent, honest communication and building trust with our clients and workers. Quality: We are
                committed to delivering the highest quality of service and workers to our clients. Flexibility: We
                understand that every business is different, which is why we offer customized staffing solutions.
              </BoxText>
              <BoxText>
                If you're looking to scale your business with a skilled, compliant, and reliable foreign workforce, Hire
                Hub Solutions is here to help. Our team is ready to discuss your specific needs and offer tailored
                staffing solutions to drive your business forward. Get in touch with us today to learn more about how we
                can assist with your staffing needs.
              </BoxText>
              <BoxAddress>
                <div>Address:</div>
                <span>
                  Chishtiya  Manzil, Near Masjid, Gulabpura, Dist. Bhilwara, Rajasthan , India, Pincode-311021
                </span>
              </BoxAddress>
            </BoxContentWrapper>
          </ContactUsWrapper>
        </Content>
      </InnerWrapper>
      <div>
        <BlackSideProp />
      </div>
    </MainContainer>
  );
};

export default ContactUs;

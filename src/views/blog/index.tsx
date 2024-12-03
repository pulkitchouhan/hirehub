import { styled } from "styled-components";
import { BlogWrapper, Container, Text, Heading } from "../../styles/views/blog";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.png";

const Gallery = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: grid;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 227.09px;
  transition: height 0.3s ease, filter 0.3s ease;
  border-radius: 15px;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  min-height: 370px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  &:hover img {
    transform: scale(1.1);
    border-radius: 15px;
    filter: brightness(70%);
    height: 360px;
    transition: height 0.3s ease, filter 0.3s ease;
  }

  &:hover .title {
    color: #ffffff;
    transition: color 0.3s ease;
  }

  &:hover .button {
    background: #267dff;
    color: #ffffff;
    transition: background 0.3s ease, color 0.3s ease;
  }

  &:hover .subtitle {
    display: none;
  }
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  transition: background-color 0.3s ease;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Button = styled.div`
  padding: 6px 10px;
  background: #eee3f4;
  border-radius: 6px;
  font-size: 9px;
  color: #267dff;
  transition: background 0.3s ease, color 0.3s ease;

  font-size: 9.08px;
  font-weight: 400;
  line-height: 13.62px;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  color: #222737;
  margin: 0;
  transition: color 0.3s ease;
`;

const Subtitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #7d7d7d;
  margin: 0;
  transition: color 0.3s ease;
`;

const Blog = () => {
  return (
    <Container>
      <BlogWrapper>
        <Text>/ our blog /</Text>
        <Heading>Trends and Insights on Global Talent in India’s Mining Sector</Heading>
      </BlogWrapper>
      <div>
        <Gallery>
          <ImageWrapper>
            <Image src={image1} alt="Global Talent In India's Infrastructure" />
            <MainWrapper>
              <ButtonWrapper>
                <Button className="button">WorkInIndia</Button>
                <Button className="button">civil Careers</Button>
              </ButtonWrapper>
              <Title className="title">Global Talent In India's Infrastructure</Title>
              <Subtitle className="subtitle">WorkInIndia | Civil Careers</Subtitle>
            </MainWrapper>
          </ImageWrapper>

          <ImageWrapper>
            <Image src={image2} alt="In-Demand Civil Roles For Global Talent" />
            <MainWrapper>
              <ButtonWrapper>
                <Button className="button">WorkInIndia</Button>
                <Button className="button">civil Careers</Button>
              </ButtonWrapper>
              <Title className="title">In-Demand Civil Roles For Global Talent</Title>
              <Subtitle className="subtitle">Key Job Opportunities for Skilled Professionals in India</Subtitle>
            </MainWrapper>
          </ImageWrapper>

          <ImageWrapper>
            <Image src={image3} alt="A Guide To International Recruitment In Civil" />
            <MainWrapper>
              <ButtonWrapper>
                <Button className="button">WorkInIndia</Button>
                <Button className="button">civil Careers</Button>
              </ButtonWrapper>
              <Title className="title">A Guide to International Recruitment in civil</Title>
              <Subtitle className="subtitle">Step-by-Step Process for Securing civil jobs in India</Subtitle>
            </MainWrapper>
          </ImageWrapper>
        </Gallery>
      </div>
    </Container>
  );
};

export default Blog;

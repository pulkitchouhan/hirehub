import Search1 from "../../assets/svg/search1";
import GateWay2 from "../../assets/svg/gateway2";
import GateWay3 from "../../assets/svg/gatway3";

import {
  Box,
  BoxHeading,
  BoxText,
  Container,
  HeadingHeading,
  HeadingLowerText,
  HeadingText,
  HeadingWrapper,
  LeftWrapper,
  MainWrapper,
  RightWrapper,
  SvgWrapper,
  Wrapper,
} from "../../styles/views/gateway";

const GateWay = () => {
  return (
    <Container>
      <LeftWrapper></LeftWrapper>
      <MainWrapper>
        <HeadingWrapper>
          <HeadingText>/ how we work /</HeadingText>
          <HeadingHeading>Your Gateway to Global Talent for Every Industry in India.</HeadingHeading>
          <HeadingLowerText>
            Our streamlined process ensures the right professionals are matched with top-tier roles, from recruitment to
            ongoing support throughout the project lifecycle.
          </HeadingLowerText>
        </HeadingWrapper>
        <Wrapper>
          <Box>
            <SvgWrapper>
              <Search1 />
            </SvgWrapper>
            <BoxHeading>Provide Tailored Workforce Solutions</BoxHeading>
            <BoxText>
              We match companies with skilled foreign workers based on specific business needs, creating a dynamic and
              flexible workforce to boost productivity.
            </BoxText>
          </Box>
          <Box>
            <SvgWrapper>
              <GateWay2 />
            </SvgWrapper>
            <BoxHeading>Ensure Compliance and Efficiency</BoxHeading>
            <BoxText>
              We help businesses navigate the complexities of international recruitment, ensuring compliance with local
              laws, work permits, and labour regulations.
            </BoxText>
          </Box>
          <Box>
            <SvgWrapper>
              <GateWay3 />
            </SvgWrapper>
            <BoxHeading>Foster Long-Term Partnerships</BoxHeading>
            <BoxText>
              At Hire Hub Solutions, we are committed to developing long-term relationships with our clients by
              providing exceptional service, timely support, and value-driven solutions.
            </BoxText>
          </Box>
        </Wrapper>
      </MainWrapper>
      <RightWrapper></RightWrapper>
    </Container>
  );
};

export default GateWay;

import { Container, TextWrapper, HeadingWrapper, Wrapper } from "../../styles/views/connections";
import TreeProp from "../../assets/svg/treeProps";
import BlackSideProp from "../../assets/svg/blackSideProp";

const Connections = () => {
  return (
    <Container>
      <TreeProp />
      <Wrapper>
        <TextWrapper>/ who we are /</TextWrapper>
        <HeadingWrapper>Building Connections, Empowering Expertise</HeadingWrapper>
      </Wrapper>
      <BlackSideProp />
    </Container>
  );
};

export default Connections;

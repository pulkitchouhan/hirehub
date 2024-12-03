import { FC } from "react";
import styled from "styled-components";

interface JoinPlatformProps {
  icon: React.ReactNode;
  backgroundColor: string;
  text: string;
  heading: string;
}

const Container = styled.div<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
  /* width: 100%; */
  width: 310.25px;
  border-radius: 15.13px;
  height: 227.01px;
  display: flex;
  flex-direction: column;
  padding: 38px;
`;

const Icon = styled.div`
  padding-bottom: 11px;
`;

const Text = styled.div`
  width: 100%;
  max-width: 190.67px;
  font-size: 12.11px;
  font-weight: 400;
  color: #ffffff;
  padding-top: 7px;
  line-height: 18.16px;
`;

const Heading = styled.div`
  font-size: 18.16px;
  font-weight: 600;
  text-align: left;
  color: #ffffff;
`;

const JoinPlatform: FC<JoinPlatformProps> = ({ icon, backgroundColor, heading, text }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Icon>{icon}</Icon>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </Container>
  );
};

export default JoinPlatform;

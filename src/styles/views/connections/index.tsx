import { styled } from "styled-components";
import GroupImage from "../../../assets/images/group.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    svg {
      display: none;
    }
  }
`;

export const TextWrapper = styled.div`
  color: #267dff;
  font-size: 12.11px;
  font-weight: 500;
  line-height: 18.16px;
  text-align: center;
`;

export const HeadingWrapper = styled.div`
  font-size: 31px;
  font-weight: 600;
  line-height: 39.35px;
  text-align: center;
  width: 100%;
  max-width: 399.94px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const FullContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px 20px 20px;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  flex: 1.3;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  flex: 1.7;
  padding: 0 60px;
  @media (max-width: 768px) {
    padding-top: 40px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: max-content;
  display: flex;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LeftImage = styled.div`
  width: 100%;
  transform: translate(146px, 0px);
  position: relative;
  img {
    max-width: 310.25px;
    height: 219.44px;
  }
  @media (max-width: 768px) {
    transform: translate(20px, 0px);
    img {
      max-width: 226.39px;
      height: 160.13px;
    }
  }
`;

export const A = styled.div`
  /* width: 100%; */
  width: 416.6px;
  background-image: url(${GroupImage});
  transform: translate(0px, -40px);
  height: 200px;
  position: absolute;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightImage = styled.div`
  width: 100%;
  transform: translate(0px, 112px);
  img {
    max-width: 249.71px;
    height: 181.61px;
  }
  @media (max-width: 768px) {
    transform: translate(-24px, 50px);
    /* transform: translate(0px, 0px); */
    padding-right: 20px;
    img {
      max-width: 182.22px;
      height: 132.52px;
    }
  }
  @media (max-width: 410px) {
    transform: translate(-50px, 50px);
  }
  @media (max-width: 380px) {
    transform: translate(-70px, 50px);
  }
  @media (max-width: 380px) {
    transform: translate(-90px, 50px);
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  max-width: 482.66px;
  color: #222737;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 24px 0;
  gap: 24px 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const GridInfo = styled.div`
  width: 100%;
  max-width: 261.82px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Heading = styled.div`
  color: #267dff;
  font-size: 15.13px;
  font-weight: 600;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const Content = styled.div`
  color: #7d7d7d;
  font-size: 12.11px;
  font-weight: 400;
  line-height: 18.16px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

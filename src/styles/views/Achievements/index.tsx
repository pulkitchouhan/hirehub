import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
`;

export const LeftView = styled.div`
  padding-top: 130px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const RightView = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 0;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 868.69px;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 40px;
  }
`;
export const Box = styled.div`
  width: 100%;
`;
export const NumberBox = styled.div`
  color: #267dff;
  font-size: 31.78px;
  font-weight: 600;
  text-align: center;
`;
export const TextBox = styled.div`
  color: #222737;
  font-size: 13.62px;
  font-weight: 400;
  text-align: center;
`;
export const Heading = styled.div`
  width: 100%;
  padding: 80px 75px;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;
export const TextWrapper = styled.div`
  color: #267dff;
  font-size: 12.11px;
  font-weight: 500;
  line-height: 18.16px;
`;

export const HeadingWrapper = styled.div`
  font-size: 31px;
  font-weight: 600;
  line-height: 39.35px;
  width: 100%;
  max-width: 399.94px;
`;

export const NewSlider = styled.div`
  width: 100%;
  display: flex !important;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  img {
    max-width: 456px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    img {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      padding: 0 16px;
    }
  }
`;
export const Content = styled.div`
  padding: 0 47px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const SliderHeading = styled.div`
  font-size: 31px;
  font-weight: 600;
  text-align: left;
  color: #222737;
  padding: 30px 0;
`;
export const SliderContent = styled.div`
  width: 100%;
  max-width: 554px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const UpperContent = styled.div`
  color: #222737;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
export const LowerContent = styled.div`
  color: #222737;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
export const SvgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const UpperSvgWrapper = styled.div`
  position: absolute;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 24px;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

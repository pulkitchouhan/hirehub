import { styled } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
  @media (max-width: 768px) {
    svg {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 227px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    width: 100%;
    max-width: 189px;
  }
  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImgContectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ImgName = styled.div`
  color: #267dff;
  font-size: 15.13px;
  font-weight: 600;
  line-height: 21.19px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ImgEmail = styled.div`
  color: #7d7d7d;
  font-size: 12.11px;
  font-weight: 400;
  line-height: 18.16px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ImgInfo = styled.div`
  color: #7d7d7d;
  font-size: 12.11px;
  font-weight: 700;
  line-height: 18.16px;
  text-align: left;
  width: 100%;
  max-width: 213px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ContactUsWrapper = styled.div`
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;
export const ContactUsHeading = styled.div`
  color: #267dff;
  font-size: 12.11px;
  font-weight: 500;
  line-height: 18.16px;
  text-align: center;
`;
export const ContactUsText = styled.div`
  color: #222737;
  font-size: 31px;
  font-weight: 600;
  line-height: 39.35px;
  letter-spacing: -0.9837100505828857px;
  text-align: center;
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BoxHeading = styled.div`
  color: #222737;
  font-size: 12.86px;
  font-weight: 700;
  line-height: 18.16px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const BoxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
export const BoxText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18.16px;
  text-align: left;
  color: #222737;
  width: 100%;
  max-width: 650px;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 10px;
  }
`;
export const BoxAddress = styled.div`
  display: flex;
  gap: 4px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }

  div {
    font-size: 12px;
    font-weight: 700;
    line-height: 18.01px;
    text-align: left;
    text-decoration-line: underline;
  }
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 18.01px;
    text-align: left;
    color: #267dff;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

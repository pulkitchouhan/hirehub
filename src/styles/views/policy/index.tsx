import { styled } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  img {
    width: 100%;
    max-width: 342.64px;
  }
`;
export const Box = styled.div``;
export const BoxHeading = styled.div`
  width: 100%;
  max-width: 824px;
  color: #222737;
  font-size: 31px;
  font-weight: 600;
  line-height: 39.35px;
  text-align: left;
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;
export const BoxInfo = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 824px;
    @media (max-width: 768px) {
      max-width: 400px;
      padding: 0 35px;
    }
  }
  li {
    color: #222737;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
`;

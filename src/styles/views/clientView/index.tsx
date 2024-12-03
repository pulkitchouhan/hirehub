import { styled } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ResContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    padding: 10px;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 80px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;
export const ImageContainer = styled.div`
  img {
    width: 100%;
    max-width: 431.25px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    svg {
      display: none;
    }
  }
`;
export const BoxHeading = styled.div`
  color: #222737;
  font-size: 31px;
  font-weight: 600;
  line-height: 39.35px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 27.27px;
    font-weight: 600;
    line-height: 34.61px;
  }
`;
export const BoxText = styled.div`
  color: #222737;
  font-size: 14.9px;
  font-weight: 600;
  line-height: 22.7px;
  text-align: left;
  width: 100%;
  max-width: 507.75px;
  @media (max-width: 768px) {
    font-size: 11.79px;
    font-weight: 600;
    line-height: 17.97px;
    text-align: left;
  }
`;
export const ClientBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const ClientName = styled.div`
  color: #222737;
  font-size: 13.62px;
  font-weight: 600;
  line-height: 19.67px;
  text-align: left;
`;
export const ClientOccupation = styled.div`
  color: #7d7d7d;
  font-size: 12.11px;
  font-weight: 400;
  line-height: 18.16px;
  text-align: left;
`;
export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
`;
export const BlueBox = styled.div`
  background: #267dff;
  width: 100%;
  max-width: 976.14px;
  border-radius: 15.13px;
  display: flex;
  padding: 35px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 408px;
    /* padding: 40px 20px; */
  }
`;
export const BlueBoxHeading = styled.div`
  color: #ffffff;
  width: 100%;
  max-width: 210.06px;
  font-size: 43.34px;
  font-weight: 400;
  line-height: 41.53px;
  text-align: left;
  @media (max-width: 768px) {
    max-width: 320px;
    font-size: 30px;
    font-weight: 400;
    line-height: 41.53px;
    padding-left: 25px;
  }
`;
export const BlueBoxContent = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
      padding: 0 40px;
    }
  }
  li {
    font-size: 14px;
    font-weight: 800;
    line-height: 15.5px;
    text-align: left;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 800;
      line-height: 25.5px;
      text-align: left;
    }
  }
`;
export const SvgWrapper = styled.div`
  padding-right: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

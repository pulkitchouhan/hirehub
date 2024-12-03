import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #f3f3f3;
`;

export const LeftWrapper = styled.div``;

export const RightWrapper = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 102px;
  padding: 40px;
  @media (max-width: 768px) {
    display: grid;
    gap: 20px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 227.01px;
  gap: 16px;
`;
export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const BoxHeading = styled.div`
  color: #222737;
  font-size: 13.62px;
  font-weight: 600;
  line-height: 19.67px;
  text-align: center;
`;
export const BoxText = styled.div`
  color: #7d7d7d;
  font-size: 12.11px;
  font-weight: 400;
  line-height: 18.77px;
  text-align: center;
`;
export const HeadingText = styled.div`
  color: #267dff;
  font-size: 12.11px;
  font-weight: 500;
  line-height: 18.16px;
  text-align: center;
`;
export const HeadingHeading = styled.div`
  color: #222737;
  font-size: 31px;
  font-weight: 600;
  line-height: 39.35px;
  text-align: center;
  width: 100%;
  max-width: 667.41px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 10px;
`;
export const HeadingLowerText = styled.div`
  color: #7d7d7d;
  font-size: 12.86px;
  font-weight: 400;
  line-height: 18.16px;
  text-align: center;
  width: 100%;
  max-width: 525.15px;
  @media (max-width: 768px) {
    max-width: 325px;
    padding-top: 10px;
  }
`;
export const MainWrapper = styled.div`
  padding: 68px 0 0 0;
  @media (max-width: 768px) {
    padding: 30px 0 0 0;
  }
`;

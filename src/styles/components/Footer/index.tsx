import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #267dff;
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 30px 0 80px 40px;
    justify-content: center;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MainText = styled.div`
  color: #ffffff;
  font-family: Post No Bills Colombo ExtraBold;
  font-size: 40px;
  font-weight: 800;
  line-height: 60px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  width: 100%;
  max-width: 400px;
  padding-right: 20px;
  @media (max-width: 768px) {
  }
`;

export const Solutions = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ListWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
export const Heading = styled.div`
  color: #ffffff;
  font-size: 13.62px;
  font-weight: 600;
  line-height: 19.67px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 21.85px;
    font-weight: 600;
    line-height: 31.55px;
    text-align: left;
  }
`;
export const Text = styled.div`
  color: #ffffff;
  font-size: 12.11px;
  font-weight: 400;
  line-height: 18.16px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 19.42px;
    font-weight: 400;
    line-height: 29.13px;
    text-align: left;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  /* @media (max-width: 768px) {
    display: none;
  } */
`;
export const LeftWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

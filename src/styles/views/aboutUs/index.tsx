import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 40px 0;
`;
export const Heading = styled.div`
  width: 100%;
  max-width: 1100px;
  color: #222737;
  font-size: 31px;
  font-weight: 600;
  line-height: 39.35px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const Text = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #222737;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 20px;
  }
`;

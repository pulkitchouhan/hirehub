import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 22px 0;
`;

export const PropsView = styled.div`
  width: 100%;
  max-width: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 23px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

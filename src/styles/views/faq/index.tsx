import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  padding: 60px 0;
  justify-content: space-between;
`;
export const AccordionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  border-radius: 4.41px;
  gap: 26px;
  .MuiPaper-root {
    padding: 20px;
    width: 100%;
    max-width: 500.82px;
    box-shadow: 0px 22.04px 29.39px -13.22px #95959540;
  }
  .MuiPaper-root::before {
    height: 0px;
  }
  .MuiButtonBase-root {
    display: flex;
    flex-direction: row-reverse;
    gap: 25px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 20px;
    padding-right: 20px;

    .MuiPaper-root {
      max-width: 400.82px;
      padding: 20px;
    }
  }
`;

export const Text = styled.div`
  color: #363049;
  font-size: 12.57px;
  font-weight: 400;
  line-height: 18.94px;
  text-align: left;
  width: 100%;
  max-width: 342.85px;
`;

export const Heading = styled.div`
  color: #35332f;
  font-size: 27.82px;
  font-weight: 600;
  line-height: 41.73px;
  text-align: center;
  padding-bottom: 40px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

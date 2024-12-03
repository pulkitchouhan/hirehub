import { styled } from "styled-components";
import homeImage from "../../../assets/images/home-image.png";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 45vw;
  background-image: url(${homeImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    background-size: cover;
    /* min-height: 80vh; */
    min-height: 47vw;
  }
  @media (max-width: 1200px) {
    background-size: cover;
  }

  @media (max-width: 768px) {
    /* padding: 1rem; */
    background-image: none;
    background-size: cover;
  }

  @media (max-width: 480px) {
    background-image: none;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 1088px;
  display: flex;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const NavigationMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    background: #267dff;
    width: 92px;
    height: 43.23px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px 0 4px;
    border-radius: 20px;
    gap: 8px;
  }
`;

export const MenuText = styled.div`
  font-size: 12.76px;
  font-weight: 500;
  line-height: 21.88px;
  text-align: center;
  color: #ffffff;
`;
export const MenuWrapper = styled.div`
  width: 32.82px;
  height: 32.82px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #007bff;
    }

    &.active {
      color: #007bff;
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SideNav = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SideNavBox = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarContent = styled.div`
  width: 200px;
  padding: 16px;
  background: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContactUsButton = styled.div`
  width: 135.44px;
  height: 40.48px;
  border-radius: 23.62px;
  background-color: #267dff;
  display: flex;
  align-items: center;
  padding: 5.06px;
  gap: 9px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RoundArrow = styled.div`
  width: 30.36px;
  height: 30.36px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 11.81px;
  font-weight: 500;
  color: #ffffff;
`;

export const Heading = styled.div`
  font-size: 28.75px;
  font-weight: 600;
  line-height: 41.88px;
  text-align: center;
  color: #222737;
  padding: 0 20px;
  padding-top: 36px;
`;

export const HeadingText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #7d7d7d;
  padding: 0 20px;
`;

export const BrowseOpportunitiesButton = styled.div`
  width: 179.48px;
  height: 43.89px;
  border-radius: 23.62px;
  background-color: #267dff;
  display: flex;
  align-items: center;
  padding: 5.06px;
  gap: 9px;
  cursor: pointer;
`;

export const ButtonsDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  justify-items: end;
  padding: 10px;
`;

export const Box1 = styled.div`
  width: fit-content;
  padding: 10.75px 9.22px 10.72px 9.45px;
  border-radius: 25px;
  background: #eee3f4;
  margin-right: 30px;
  font-size: 11.66px;
  font-weight: 500;
  line-height: 17.94px;
  text-align: left;
`;
export const Box2 = styled.div`
  width: fit-content;
  padding: 10.75px 9.22px 10.72px 9.45px;
  border-radius: 25px;
  background: #fff4ce;
  font-size: 11.66px;
  font-weight: 500;
  line-height: 17.94px;
  text-align: left;
`;
export const Box3 = styled.div`
  width: fit-content;
  padding: 10.75px 9.22px 10.72px 9.45px;
  border-radius: 25px;
  background: #c7d3ff;
  font-size: 11.66px;
  font-weight: 500;
  line-height: 17.94px;
  text-align: left;
  margin-right: 30px;
`;
export const Box4 = styled.div`
  width: fit-content;
  padding: 10.75px 9.22px 10.72px 9.45px;
  border-radius: 25px;
  background: #c4ecee;
  margin-right: 16px;
  font-size: 11.66px;
  font-weight: 500;
  line-height: 17.94px;
  text-align: left;
`;
export const Box5 = styled.div`
  width: fit-content;
  padding: 10.75px 9.22px 10.72px 9.45px;
  border-radius: 25px;
  background: #e8fcde;
  font-size: 11.66px;
  font-weight: 500;
  line-height: 17.94px;
  text-align: left;
  margin-right: 30px;
`;
export const Box6 = styled.div`
  width: fit-content;
  padding: 10.75px 9.22px 10.72px 9.45px;
  border-radius: 25px;
  background: #fce9de;
  font-size: 11.66px;
  font-weight: 500;
  line-height: 17.94px;
  text-align: left;
`;

import { useState } from "react";
import Logo from "../../assets/svg/logo";
import ContectUs from "../../assets/svg/contactus";
import {
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Box6,
  BoxContainer,
  BrowseOpportunitiesButton,
  ButtonsDisplay,
  ContactUsButton,
  Container,
  Heading,
  HeadingText,
  MenuText,
  MenuWrapper,
  MobileWrapper,
  Navbar,
  Navigation,
  NavigationMenu,
  NavWrapper,
  RoundArrow,
  SidebarContent,
  SideNav,
  SideNavBox,
  Text,
} from "../../styles/pages/home";
import BasicInfo from "../../views/home";
import Connections from "../../views/connections";
import ConnectionsInfo from "../../views/connectionsInfo";
import Achievements from "../../views/Achievements";
import GateWay from "../../views/gateway";
import ClientView from "../../views/clientView";
import Policy from "../../views/policy";
import ContactUs from "../../views/contactus";
import AboutUs from "../../views/aboutUs";
import Faq from "../../views/faq";
import Footer from "../../components/Footer";
import Heading1 from "../../assets/svg/heading1";
import Header2 from "../../assets/svg/header2";
import Blog from "../../views/blog";
import Menu from "../../assets/svg/menu";
import { Drawer } from "@mui/material";

const Home = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (open: any) => () => {
    setSidebarOpen(open);
  };

  return (
    <>
      <Container>
        <Navbar>
          <NavWrapper>
            <SideNav>
              <Logo />
            </SideNav>
            <NavigationMenu onClick={toggleSidebar(true)}>
              <MenuWrapper>
                <Menu />
              </MenuWrapper>
              <MenuText>Menu</MenuText>
            </NavigationMenu>
            <Navigation>
              <a href="#" className={activeLink === "home" ? "active" : ""} onClick={() => handleLinkClick("home")}>
                Home
              </a>
              <a href="#" className={activeLink === "about" ? "active" : ""} onClick={() => handleLinkClick("about")}>
                About Us
              </a>
              <a
                href="#"
                className={activeLink === "services" ? "active" : ""}
                onClick={() => handleLinkClick("services")}>
                Services
              </a>
              <a
                href="#"
                className={activeLink === "case-studies" ? "active" : ""}
                onClick={() => handleLinkClick("case-studies")}>
                Case Studies
              </a>
              <a href="#" className={activeLink === "blog" ? "active" : ""} onClick={() => handleLinkClick("blog")}>
                Blog
              </a>
              <a href="#" className={activeLink === "page" ? "active" : ""} onClick={() => handleLinkClick("page")}>
                Page
              </a>
            </Navigation>
            <SideNavBox>
              <ContactUsButton>
                <RoundArrow>
                  <ContectUs />
                </RoundArrow>
                <Text>Contact Us</Text>
              </ContactUsButton>
            </SideNavBox>
          </NavWrapper>
        </Navbar>
        {/* mobile */}
        <MobileWrapper>
          <Heading>Enabling Global Professionals to Thrive in India's Diverse Industries</Heading>
          <HeadingText>
            Connecting skilled professionals worldwide with top Indian projects. Begin your journey to impactful roles
            in construction and engineering
          </HeadingText>
          <ButtonsDisplay>
            <Heading1 />

            <BrowseOpportunitiesButton>
              <RoundArrow>
                <ContectUs />
              </RoundArrow>
              <Text>Browse Opportunities</Text>
            </BrowseOpportunitiesButton>

            <Header2 />
          </ButtonsDisplay>
          <BoxContainer>
            <Box1>#ConstructionCareers</Box1>
            <Box2>#InfrastructureJobs</Box2>
            <Box3>#WorkInIndia</Box3>
            <Box4>#TalentWithoutBorders</Box4>
            <Box5>#SkilledProfessionals</Box5>
            <Box6>#InternationalRecruitment</Box6>
          </BoxContainer>
        </MobileWrapper>
      </Container>
      <BasicInfo />
      <Connections />
      <ConnectionsInfo />
      <Achievements />
      <GateWay />
      <ClientView />
      <Policy />
      <Blog />
      <ContactUs />
      <AboutUs />
      <Faq />
      <Footer />

      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar(false)}>
        <SidebarContent>
          <h3>Menu</h3>
        </SidebarContent>
      </Drawer>
    </>
  );
};

export default Home;

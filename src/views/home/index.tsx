import { CardsWrapper, Container, PropsView } from "../../styles/views/home";
import SideProps from "../../assets/svg/sideProps";
import JoinPlatform from "../../components/InfoCard";
import Search from "../../assets/svg/search";
import { motion } from "framer-motion";

const BasicInfo = () => {
  const data = [
    {
      icon: <Search />,
      color: "#267DFF",
      text: "Register and provide key details about your skills and experience to access exclusive project opportunities.",
      heading: "Join the Platform",
    },
    {
      icon: <Search />,
      color: "#00D085",
      text: "Browse through open roles and projects in India’s civil sector that match your qualifications and interests.",
      heading: "Explore Roles",
    },
    {
      icon: <Search />,
      color: "#267DFF",
      text: "Submit applications, monitor progress, and receive updates on your status—all from one easy-to-use dashboard.",
      heading: "Apply and Track",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <Container>
      <PropsView>
        <SideProps />
      </PropsView>

      <CardsWrapper>
        {data?.map((e, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.4 }}
            whileHover={{ scale: 1.05 }}>
            <JoinPlatform icon={e.icon} backgroundColor={e.color} text={e.text} heading={e.heading} />
          </motion.div>
        ))}
      </CardsWrapper>
      <PropsView></PropsView>
    </Container>
  );
};

export default BasicInfo;

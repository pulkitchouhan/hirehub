import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useState } from "react";
import { AccordionWrapper, MainContainer, Text, Heading, LeftWrapper, RightWrapper } from "../../styles/views/faq";
import Plus from "../../assets/svg/plus";
import BlackSideProp from "../../assets/svg/blackSideProp";
import YellowSideProp from "../../assets/svg/YellowSideProp";

const Faq = () => {
  const faqs = [
    {
      question: "What is Hire Hub Solutions?",
      answer:
        "Hire Hub Solutions is a leading staffing and recruitment agency that connects businesses with qualified professionals across a wide range of industries. We specialize in providing customized workforce solutions to help businesses meet their hiring needs efficiently.",
    },
    {
      question: "How can I contact Hire Hub Solutions?",
      answer: "You can contact Hire Hub Solutions through email, phone, or their official website's contact form.",
    },
    {
      question: "How does Hire Hub Solutions help businesses?",
      answer:
        "Visit their website, navigate to the job postings, and submit your application for the desired position.",
    },
    {
      question: "How do I apply for a job through Hire Hub Solutions?",
      answer: "No, Hire Hub Solutions does not charge job seekers for their services.",
    },
    {
      question: "How long does the hiring process take?",
      answer:
        "They provide tailored staffing solutions to help businesses connect with skilled professionals efficiently.",
    },
    {
      question: "Is there a fee for job seekers?",
      answer:
        "Hire Hub Solutions provides staffing services for various industries, including IT, healthcare, finance, and more.",
    },
    {
      question: "What industries do you provide staffing services for?",
      answer:
        "Hire Hub Solutions provides staffing services for various industries, including IT, healthcare, finance, and more.",
    },
    {
      question: "How can Hire Hub Solutions help me find the right candidates?",
      answer:
        "Hire Hub Solutions provides staffing services for various industries, including IT, healthcare, finance, and more.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <MainContainer>
      <LeftWrapper>
        <YellowSideProp />
      </LeftWrapper>
      <div>
        <Heading>Frequently Ask Questions</Heading>
        <AccordionWrapper>
          {faqs.map((faq, index) => (
            <Accordion key={index} expanded={expanded === index} onChange={() => handleChange(index)}>
              <AccordionSummary expandIcon={<Plus />}>
                <Typography fontWeight="bold">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Text>{faq.answer}</Text>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionWrapper>
      </div>
      <RightWrapper>
        <BlackSideProp />
      </RightWrapper>
    </MainContainer>
  );
};

export default Faq;

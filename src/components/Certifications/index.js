import React from "react";
import { Container, Wrapper, Title, Desc, CardContainer } from "./CertifStyle";
import CertifCard from "../Cards/CertifCard";
import { certificate } from "../../data/data";

const Certifications = () => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          In my free time, I have dedicated myself to acquiring multiple
          certifications to enhance my skills and expertise.
        </Desc>
        <CardContainer>
          {certificate.map((certificate) => (
            <CertifCard certificate={certificate} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;

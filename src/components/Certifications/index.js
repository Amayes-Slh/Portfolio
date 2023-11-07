import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "../Projects/ProjectsStyle";
import CertifCard from "../Cards/CertifCard";
import { certficate } from "../../data/data";

const Certifications = ({ openModal, setOpenModal }) => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>I have worked on a wide range of Certifications.</Desc>
        <CardContainer>
          {certficate.map((certficate) => (
            <CertifCard
              certficate={certficate}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
          {certficate
            .filter((item) => item.category)
            .map((certficate) => (
              <CertifCard
                certficate={certficate}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;

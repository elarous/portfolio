import React from "react";
import { Container, Header } from "./style";

function Section({ title, tag, children }) {
  return (
    <Container>
      <a href="#" name={tag} />
      <Header>{title}</Header>
      {children}
    </Container>
  );
}

export default Section;

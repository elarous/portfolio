import React from "react";
import { Container, Header, HeaderContainer, BodyContainer } from "./style";

function Section({ title, tag, wide, className, children }) {
  return (
    <Container className={className}>
      <HeaderContainer>
        <a href="#" name={tag} />
        {title && <Header>{title}</Header>}
      </HeaderContainer>
      <BodyContainer wide={wide}>{children}</BodyContainer>
    </Container>
  );
}

export default Section;

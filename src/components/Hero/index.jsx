import React from "react";
import { Container, Header, Description, Illustration } from "./style";
import Button from '../Button'

function Hero() {
  return (
    <Container>
      <Header>
        Hi! <br />
        I am Oussama El Arbaoui <br />A Software Developer
      </Header>
      <Description>
        I'm a web developer, I code using  React & Ruby on Rails, I am a big fan of Functional programming especially Clojure.
      </Description>
      <Button href="#contact_me" link>Contact me</Button>
    </Container>
  );
}

export default Hero;

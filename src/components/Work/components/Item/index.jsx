import React from "react";
import { Container } from "./style";
import { Image, Name, LinkButton, Description } from "./style";

function Item({ image, name, description, url }) {
  return (
    <Container>
      <Image>{image}</Image>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <LinkButton href={url} target="_blank">View Project</LinkButton>
    </Container>
  );
}

export default Item;

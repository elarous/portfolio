import React from "react";
import { Container, Left, Right } from "./style";
import Progress from "../Progress";

function Item({ icon, percent, children }) {
  return (
    <Container>
      <Left>
        {icon}
        {children}
      </Left>
      <Right>
        <Progress percent={percent} />
      </Right>
    </Container>
  );
}

export default Item;

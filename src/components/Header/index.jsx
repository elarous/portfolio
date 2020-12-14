import React from "react";
import {
  Container,
  Logo,
  Menu,
  MenuItem,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  Icons,
  IconLink,
} from "./style";

function Header() {
  return (
    <Container>
      <Logo>Oussama El Arbaoui</Logo>
      {/* <menu> */}
      {/* <menuitem>about</menuitem> */}
      {/* <menuitem>projects</menuitem> */}
      {/* <menuitem>skill</menuitem> */}
      {/* <menuitem>contact</menuitem> */}
      {/* </menu> */}
      <Icons>
        <IconLink href="https://github.com/elarous" target="_blank">
          <GithubIcon />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/elarouss" target="_blank">
          <LinkedinIcon />
        </IconLink>
        <IconLink href="https://twitter.com/elarous1" target="_blank">
          <TwitterIcon />
        </IconLink>
      </Icons>
    </Container>
  );
}

export default Header;

import React from "react";
import { BaseButton, BaseButtonLink, BaseOutlinedButton } from "./style";

function Button({ link, children, ...props }) {
  return link ? (
    <BaseButtonLink {...props}>{children}</BaseButtonLink>
  ) : (
    <BaseButton {...props}>{children}</BaseButton>
  );
}

export function OutlinedButton({ children, selected, ...props }) {
  return <BaseOutlinedButton {...props} selected={selected}>{children}</BaseOutlinedButton>;
}

export default Button;

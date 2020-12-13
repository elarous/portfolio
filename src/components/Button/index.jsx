import React from 'react'
import { BaseButton, BaseButtonLink } from './style'

function Button({ link, children, ...props }) {
  return link ?
    <BaseButtonLink {...props}>{children}</BaseButtonLink>
    :
    <BaseButton {...props}>{children}</BaseButton>
}

export default Button

import React from 'react'
import { Container } from './style'

function Item({ icon , percent, children }) {
  return <Container>
    {icon}
    {children}
  </Container>
}

export default Item

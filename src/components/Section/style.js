import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  padding: ${props => props.theme.sizes(5)} ${props => props.theme.sizes(28)};
`

export const Header = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.sizes(4)};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.main};
`

import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const HeaderContainer = styled.div`
  margin: 0;
  padding: 0 ${props => props.theme.sizes(28)};
`

export const BodyContainer = styled.div`
  flex: 1;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  padding: ${props => `${props.theme.sizes(5)} ${props.wide ? 0 : props.theme.sizes(28)}`};
`

export const Header = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.sizes(4)};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.main};
`

import styled, { css } from 'styled-components'

const baseStyle = css`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  outline: none;
  border-radius: ${props => props.theme.sizes(3)};
  padding: ${props => props.theme.sizes(1.5)} ${props => props.theme.sizes(5)};
  font-size: ${props => props.theme.sizes(2)};
  font-family: ${props => props.theme.fonts.main};
  font-weight: none;
`

export const BaseButton = styled.button`
  ${baseStyle}
` 

export const BaseButtonLink = styled.a`
  ${baseStyle}
  text-decoration: none;
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${prpos => prpos.theme.sizes(2)};
  margin: ${prpos => prpos.theme.sizes(2)};
  background-color: ${props => props.theme.colors.greyLight};
  border-radius: ${props => props.theme.sizes(2)};
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.sizes(2)};
  font-weight: bold;
`

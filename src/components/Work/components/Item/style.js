import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: ${props => props.theme.sizes(1)};
  background: ${props => props.theme.colors.greyLight};
  width: ${props => props.theme.sizes(40)};
  box-shadow: ${props => props.theme.shadows.high};
`

export const Image = styled.div`
  width: 100%;
  & > * {
    height: ${props => props.theme.sizes(20)};
    width: 100%;
  }

  & img {
    border-top-left-radius: ${props => props.theme.sizes(1)};
    border-top-right-radius: ${props => props.theme.sizes(1)};
  }
`

export const Name = styled.h3`
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.main};
`

export const Description = styled.p`
  padding: 0 ${props => props.theme.sizes(2)};
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.primaryText};
`

export const LinkButton = styled.a`
  background: ${props => props.theme.colors.greyDark};
  font-size: ${props => props.theme.sizes(1.5)};
  margin: ${props => props.theme.sizes(2)};
  padding: ${props => props.theme.sizes(1)} ${props => props.theme.sizes(4)} ;
  border-radius: ${props => props.theme.sizes(3)};
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.secondaryText};
  text-decoration: none;
`

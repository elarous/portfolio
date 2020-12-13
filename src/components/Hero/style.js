import styled from 'styled-components'
import IllustrationSVG from '../../images/illustration.svg'

export const Container = styled.div`
  margin-top: ${props => props.theme.sizes(20)};
  margin-left: ${props => props.theme.sizes(20)};

`

export const Header = styled.h1`
  font-family: ${props => props.theme.fonts.header};
  font-weight: normal;
  color: ${props => props.theme.colors.primaryText};
  margin-bottom: ${props => props.theme.sizes(4)};
  font-size: ${props => props.theme.sizes(5)};
`

export const Description = styled.div`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.primaryText};
  width: ${props => props.theme.sizes(50)};
  margin-bottom: ${props => props.theme.sizes(12)};
  font-size: ${props => props.theme.sizes(2)};
`

export const Illustration = styled(IllustrationSVG)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`

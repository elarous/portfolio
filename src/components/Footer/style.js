import styled from 'styled-components'
import FooterIllustration from '../../images/footer.svg'

export const Container = styled.div`
  margin: 0;
  position: relative;
  min-height: ${props => props.theme.sizes(50)};
`

export const Illustration = styled(FooterIllustration)`
  position: absolute;
  bottom: 0;
  #back_shape {
    fill: ${props => props.theme.colors.secondary};
  }
`

export const Copyright = styled.h6`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.sizes(4)};
  font-family: ${props => props.theme.fonts.logo};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.sizes(1)};
`

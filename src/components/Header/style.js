import styled from 'styled-components'
import GithubSVG from '../../images/github.svg'
import LinkedinSVG from '../../images/linkedin.svg'
import TwitterSVG from '../../images/twitter.svg'


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.theme.sizes(4)} 0;
`

export const Logo = styled.div`
  color: ${props => props.theme.colors.primaryText};
  font-family: ${props => props.theme.fonts.logo};
  font-size: ${props => props.theme.sizes(4)};
`

export const Menu = styled.nav`
  display: flex;
`

export const MenuItem = styled.div`
  margin: 0 ${props => props.theme.sizes(2)};
  font-family: ${props => props.theme.fonts.main};
`

export const Icons = styled.div`
  display: flex;
`

export const IconLink = styled.a`
`

export const GithubIcon = styled(GithubSVG)`
  margin: ${props => props.theme.sizes(1)};
  path { 
    fill: white;
  }
`

export const LinkedinIcon = styled(LinkedinSVG)`
  margin: ${props => props.theme.sizes(1)};
  * { 
    fill: white;
  }
`

export const TwitterIcon = styled(TwitterSVG)`
  margin: ${props => props.theme.sizes(1)};

  path { 
    fill: white;
  }
`




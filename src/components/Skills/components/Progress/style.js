import styled from 'styled-components'

export const Background = styled.div`
  border-radius: ${props => props.theme.sizes(2)};
  background: ${props => props.theme.colors.greyDark};
  width: 80px;
  height: 10px;
`

export const Thumb = styled.div`
  border-radius: ${props => props.theme.sizes(2)};
  background: ${props => props.theme.colors.secondary};
  height: 10px;
  width: ${props => 80 / 100 * props.percent}px;
`

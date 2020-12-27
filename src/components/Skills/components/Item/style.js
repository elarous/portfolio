import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${prpos => prpos.theme.sizes(2)};
  margin: ${prpos => prpos.theme.sizes(2)};
  background-color: ${props => props.theme.colors.greyLight};
  border-radius: ${props => props.theme.sizes(2)};
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Right = styled.div`
  > span {
    display: none;
    .progress-bar {
      width: 100px !important;
    }  
  }
`

export const Title = styled.div`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.sizes(2)};
  font-weight: bold;
`

export const Description = styled.div`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.greyDark};
`

import styled, { css } from 'styled-components'
import Section from "../Section"
import MailBoxSVG from "../../images/mailbox.svg"
import Button from "../Button"

export const Container = styled.div`
  background: ${props => props.theme.colors.greyLight};
  font-family: ${props => props.theme.fonts.main};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${props => props.theme.sizes(5)} ${props => props.theme.sizes(35)};
` 

export const MailBoxIcon = styled(MailBoxSVG)``

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: ${props => props.theme.sizes(50)};
`

export const FormHeader = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.sizes(3)};
`

const BaseInput = css`
  border: 1px solid ${props => props.theme.colors.secondary};
  background: #fff;
  color: ${props => props.theme.colors.secondaryText};
  border-radius: ${props => props.theme.sizes(1)};
  padding: ${props => props.theme.sizes(1.5)};
  margin: ${props => props.theme.sizes(1)};
  outline: none;
  font-family: ${props => props.theme.fonts.main};
  &::placeholder {
    color: ${props => props.theme.colors.greyDark};
    font-family: ${props => props.theme.fonts.main};
    font-style: italic;
  }
`

export const Input = styled.input`
  ${BaseInput}
`

export const TextArea = styled.textarea`
  ${BaseInput}
  resize: none;
`

export const ContactBtn = styled(Button)`
  margin: ${props => props.theme.sizes(1)};
  background: ${props => props.theme.colors.secondary};
  transition: 0.3s background;
  &:disabled {
    background: ${props => props.theme.colors.greyDark};
    &:hover {
      background: ${props => props.theme.colors.greyDark};
    }
  }
  &:hover {
    background: ${props => props.theme.colors.secondaryDark};
  }
`

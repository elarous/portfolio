import styled from 'styled-components'
import IllustrationSVG from "../../images/illustration2.svg";
import { OutlinedButton } from '../Button'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

export const Container = styled.div`
  position: relative;
`

export const Illustration = styled(IllustrationSVG)`
  position: absolute;
  left: -${props => props.theme.sizes(55)};
  top: -${props => props.theme.sizes(22)};

`

export const Nav = styled.div` 
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.sizes(8)};
`

export const CategoryBtn = styled(OutlinedButton)`
  display: block;
  margin: 0  ${props => props.theme.sizes(8)};
  cursor: pointer;
  transition: 0.3s background, 0.3s color, 0.3s box-shadow;
  &:hover {
    box-shadow: ${props => props.theme.shadows.high};
    color: white;
    background: ${props => props.theme.colors.primary};
  }
`

export const SliderContainer = styled.div`
`

export const SkillsSlider = styled(Slider)`
  height: ${props => props.theme.sizes(40)};
`

export const SkillsSlide = styled(Slide)`

`
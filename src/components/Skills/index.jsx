import React, { useState } from "react";
import Section from "../Section";
import {
  Nav,
  Container,
  Illustration,
  CategoryBtn,
  SliderContainer,
  SkillsSlider,
  SkillsSlide
} from "./style";
import {
  CarouselProvider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Skills() {
  const [index, setIndex] = useState(0)

  return (
    <Section title="skills & technologies" tag="skills">
      <Container>
        <Illustration />
        <Nav>
          <CategoryBtn selected={index === 0} onClick={() => setIndex(0)}>Front-End</CategoryBtn>
          <CategoryBtn selected={index === 1} onClick={() => setIndex(1)}>Back-End</CategoryBtn>
          <CategoryBtn selected={index === 2} onClick={() => setIndex(2)}>Others</CategoryBtn>
        </Nav>
        <SliderContainer>
          <CarouselProvider
            naturalSlideHeight={125}
            naturalSlideWidth={100}
            totalSlides={3}
            currentSlide={index}
          >
            <SkillsSlider >
              <SkillsSlide index={0}>Front-end</SkillsSlide>
              <SkillsSlide index={1}>Back-end</SkillsSlide>
              <SkillsSlide index={2}>Other</SkillsSlide>
            </SkillsSlider>
          </CarouselProvider>
        </SliderContainer>
      </Container>
    </Section>
  );
}

export default Skills;

import React, { useState } from "react";
import Section from "../Section";
import {
  Nav,
  Container,
  Illustration,
  CategoryBtn,
  SliderContainer,
  SkillsSlider,
  SkillsSlide,
  List,
  IconContainer,
} from "./style";
import { Title } from "./components/Item/style";
import { CarouselProvider, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Item from "./components/Item";
import Img from "gatsby-image";
import ReactSVG from "../../images/logos/react_logo.svg";

function Skills({ data }) {
  const [index, setIndex] = useState(0);

  const categoriesSet = new Set(data.map((skill) => skill.type));
  const categories = Array.from(categoriesSet);

  return (
    <Section title="skills & technologies" tag="skills">
      <Container>
        <Illustration />
        <Nav>
          {categories.map((category, i) => (
            <CategoryBtn selected={index === i} onClick={() => setIndex(i)}>
              {category}
            </CategoryBtn>
          ))}
        </Nav>
        <SliderContainer>
          <CarouselProvider
            naturalSlideHeight={125}
            naturalSlideWidth={100}
            totalSlides={3}
            currentSlide={index}
          >
            <SkillsSlider>
              {Array.from(categories).map((category, i) => (
                <SkillsSlide index={i}>
                  <List>
                    {data.filter(skill => skill.type === category).map((skill) => (
                      <Item
                        percent={skill.strength}
                        icon={
                          <IconContainer>
                            {skill.image.childInlineSvg ? (
                              <div 
                                dangerouslySetInnerHTML={{
                                  __html: skill.image.childInlineSvg?.content,
                                }}
                              />
                            ) : (
                              <Img fixed={skill.image.childImageSharp.fixed} />
                            )}
                          </IconContainer>
                        }
                      >
                        {skill.name}
                      </Item>
                    ))}
                  </List>
                </SkillsSlide>
              ))}
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

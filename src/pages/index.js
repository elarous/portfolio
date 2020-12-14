import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Section from "../components/Section";
import "fontsource-open-sans";

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <title>Oussama El Arbaoui</title>
        <Section>
          <Header />
          <Hero />
        </Section>
        <Skills />
      </main>
    </ThemeProvider>
  );
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
`;

export default IndexPage;

import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Section from "../components/Section";
import "fontsource-open-sans";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <title>Oussama El Arbaoui</title>
        <Section>
          <Header />
          <Hero />
        </Section>
        <Skills data={data}/>
      </main>
    </ThemeProvider>
  );
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const query = graphql`
  query {
    javascript: file(relativePath: { eq: "logos/javascript.png"}) {
      logo: childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    
    clojurescript: file(relativePath: { eq: "logos/clojurescript.png"}) {
      logo: childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage;

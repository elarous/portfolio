import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { Illustration } from "../components/Hero/style";
import "fontsource-open-sans";
import { graphql } from "gatsby";
import GlobalStyle from "../globalStyles";
import { Helmet } from "react-helmet";

// markup
const IndexPage = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oussama El Arbaoui</title>
        <link rel="canonical" href="https://elarous.com/" />
      </Helmet>
      <main>
        <Section>
          <Header />
          <Hero />
          <Illustration />
        </Section>
        <Skills data={data.allSkillsJson.edges.map((e) => e.node)} />
        <Work data={data.allProjectsJson.edges.map((e) => e.node)} />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const query = graphql`
  query {
    allSkillsJson {
      edges {
        node {
          name
          type
          strength
          image {
            id
            absolutePath
            extension
            childInlineSvg {
              content
            }
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }

    allProjectsJson {
      edges {
        node {
          name
          description
          url
          image {
            id
            absolutePath
            extension
            childInlineSvg {
              content
            }
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }

    javascript: file(relativePath: { eq: "logos/javascript.png" }) {
      logo: childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    clojurescript: file(relativePath: { eq: "logos/clojurescript.png" }) {
      logo: childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    redux: file(relativePath: { eq: "logos/redux.png" }) {
      logo: childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    styled_components: file(
      relativePath: { eq: "logos/styled_components.png" }
    ) {
      logo: childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    re_frame: file(relativePath: { eq: "logos/re_frame.png" }) {
      logo: childImageSharp {
        fixed(width: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage;

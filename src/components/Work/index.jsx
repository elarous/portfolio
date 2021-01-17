import React from "react";
import Section from "../Section";
import Item from "./components/Item";
import Img from "gatsby-image";

function Work({ data }) {
  return (
    <Section title="Latest work" tag="latest_work">
      {data.map((project) => (
        <Item
          key="some"
          image={<Img fluid={ project.image.childImageSharp.fluid } />}
          name={project.name}
          description={project.description}
          url={project.url}
        />
      ))}
    </Section>
  );
}

export default Work;

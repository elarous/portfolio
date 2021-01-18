import React from "react";
import Section from "../Section";
import Item from "./components/Item";
import Img from "gatsby-image";
import { List } from "./style";

function Work({ data }) {
  return (
    <Section title="Latest work" tag="latest_work">
      <List>
        {data.map((project) => (
          <Item
            key="some"
            image={<Img fluid={project.image.childImageSharp.fluid} />}
            name={project.name}
            description={project.description}
            url={project.url}
          />
        ))}
      </List>
    </Section>
  );
}

export default Work;

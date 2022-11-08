import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Section } from "../../components/Section";
import { useLocalDataSource } from "./data";

interface PageSection {
  sectionId: string;
  heading?: string;
}

//@ts-ignore
import * as classes from "./style.module.css";

export function AboutSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allAboutMarkdown.sections[0];

  return (
    <Section anchor={props.sectionId} heading={props.heading}>
      <div className={classes.About}>
        <div className={classes.Description} dangerouslySetInnerHTML={{ __html: data.html }} />
        <div className={classes.ImageWrapper}>
          <GatsbyImage
            image={data.frontmatter.imageSrc.childImageSharp.gatsbyImageData}
            className={classes.Image}
            alt={data.frontmatter.imageAlt || `About Image`}
          />
        </div>
      </div>
    </Section>
  );
}

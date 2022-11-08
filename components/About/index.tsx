import React from "react";
import { Section } from "../../components/Section";
import { useLocalDataSource } from "./data";
// import { PageSection } from "../../types";

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
          <img src="/profile-picture.jpg" className={classes.Image}></img>
        </div>
      </div>
    </Section>
  );
}

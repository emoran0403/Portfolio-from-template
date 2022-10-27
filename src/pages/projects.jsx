import { Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";
import { Page } from "../../components/PageLayoutWithoutFooter";
import { ProjectsSection } from "../../components/ProjectsSection";

const Projects = () => {
  return (
    <>
      <Seo title="My projects" />
      <Page>
        <ProjectsSection heading="My projects" />
      </Page>
    </>
  );
};

export default Projects;

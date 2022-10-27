import { Seo, AboutSection } from "gatsby-theme-portfolio-minimal";
import React from "react";
import { Page } from "../../components/PageLayoutWithoutFooter";

const About = () => {
  return (
    <>
      <Seo title="About Page" />
      <Page>
        <AboutSection heading="Profile" />
      </Page>
    </>
  );
};

export default About;

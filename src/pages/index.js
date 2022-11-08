import React from "react";
import { ContactSection, HeroSection, Seo } from "gatsby-theme-portfolio-minimal";
// import { ArticlesSection } from "../../components/MyBlogs/blogPost";

import { Page } from "../../components/PageLayoutWithoutFooter";

export default function IndexPage() {
  return (
    <>
      <Seo title="Eric Moran Portfolio Page" />
      <Page>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Posts" /> */}
        <ContactSection sectionId="github" heading="Interested?" />
      </Page>
    </>
  );
}

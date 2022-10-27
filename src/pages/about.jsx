import { Seo, AboutSection } from "gatsby-theme-portfolio-minimal";
import React from "react";
import { Page } from "../../components/PageLayoutWithoutFooter";

const About = () => {
    return (
        <>
            <Seo title="About lmao" />
            <Page>
                <AboutSection heading="About Page Minimal" />
            </Page>
        </>
    );
};

export default About;

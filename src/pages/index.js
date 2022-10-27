import React from "react";
import { ArticlesSection, ContactSection, HeroSection, InterestsSection, Seo } from "gatsby-theme-portfolio-minimal";
import { Page } from "../../components/PageLayoutWithoutFooter";

export default function IndexPage() {
    return (
        <>
            <Seo title="Gatsby Starter for Portfolio Minimal" />
            <Page>
                <HeroSection sectionId="hero" />
                <ArticlesSection sectionId="articles" heading="Latest Articles" sources={["Medium"]} />
                <InterestsSection sectionId="details" heading="Details" />
                <ContactSection sectionId="github" heading="Issues?" />
            </Page>
        </>
    );
}

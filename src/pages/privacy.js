import React from "react";
import { LegalSection, Seo } from "gatsby-theme-portfolio-minimal";
import { Page } from "../../components/PageLayoutWithoutFooter";

export default function PrivacyPage() {
    return (
        <>
            <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
            <Page>
                <LegalSection sectionId="privacy" heading="Privacy Policy" />
            </Page>
        </>
    );
}

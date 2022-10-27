import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Icon } from "gatsby-theme-portfolio-minimal/src/components/Icon";
import { useMediaQuery } from "gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery";
import { ImageObject } from "gatsby-theme-portfolio-minimal/src/types";
// @ts-ignore
import * as classes from "./style.module.css";

enum LinkType {
    External = "external",
    Github = "github"
}

export interface Project {
    title: string;
    details: string;
    techStack: string[];
    pageURL: string;
    appURL: string;
    gitHubURL: string;
    lab: boolean;
}

interface ProjectProps {
    data: Project;
    index: number;
}

export function Project(props: ProjectProps): React.ReactElement {
    const isDesktopBreakpoint = useMediaQuery("(min-width: 992px)");

    return (
        <Animation
            type="fadeUp"
            className={classes.Project}
            style={{
                flexDirection: isDesktopBreakpoint && props.index % 2 === 0 ? "row-reverse" : undefined
            }}>
            <div className={classes.Details}>
                <h1>{!props.data.lab ? "Project!" : "Lab"}</h1>
                <h4 className={classes.Title}>{props.data.title}</h4>
                <p>{props.data.details}</p>
                <div className={classes.Tags}>
                    {props.data.techStack?.map((tag, key) => (
                        <span key={key}>
                            <u>{tag}</u>
                        </span>
                    ))}
                </div>
                <div className={classes.Links}>
                    {/* {props.data.links &&
                        props.data.links.length !== 0 &&
                        props.data.links.map((link, key) => {
                            return (
                                <a key={key} href={link.url} target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
                                    <Icon name={link.type} color="var(--subtext-color)" />
                                </a>
                            );
                        })} */}
                </div>
            </div>
            {/* {props.data.image.src && props.data.image.linkTo && (
                <a href={props.data.image.linkTo} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <GatsbyImage
                        className={classes.ProjectImageWrapper}
                        imgClassName={classes.ProjectImage}
                        image={props.data.image.src.childImageSharp.gatsbyImageData}
                        alt={props.data.image.alt || `Project ${props.data.title}`}
                    />
                </a>
            )}
            {props.data.image.src && !props.data.image.linkTo && (
                <GatsbyImage
                    className={classes.ProjectImageWrapper}
                    imgClassName={classes.ProjectImage}
                    image={props.data.image.src.childImageSharp.gatsbyImageData}
                    alt={props.data.image.alt || `Project ${props.data.title}`}
                />
            )} */}
        </Animation>
    );
}

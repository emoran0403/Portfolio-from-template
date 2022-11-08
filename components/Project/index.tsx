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
  Github = "github",
}

export interface Project {
  title: string;
  details: string;
  overview: string[];
  features: string[];
  challenges: string[];
  techStack: string[];
  IMGURL: string;
  appURL: string;
  gitHubURL: string;
  lab: boolean;
}

interface ProjectProps {
  data: Project;
  index: number;
}

const makeLink = (URL: string, text: string) => {
  return (
    <>
      <a href={URL} target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
        {text}
      </a>
    </>
  );
};

export function Project(props: ProjectProps): React.ReactElement {
  const isDesktopBreakpoint = useMediaQuery("(min-width: 992px)");

  return (
    <Animation
      type="fadeUp"
      className={classes.Project}
      style={{
        flexDirection: isDesktopBreakpoint && props.index % 2 === 0 ? "row-reverse" : undefined,
      }}
    >
      <div className={classes.Details}>
        <h4 className={classes.Title}>{props.data.title}</h4>
        <p>{props.data.details}</p>
        <div className={classes.Links}>
          {props.data.appURL && makeLink(props.data.appURL, "Live Site")}
          {props.data.gitHubURL && makeLink(props.data.gitHubURL, "Github")}
        </div>
        <div className={classes.Tags}>
          {props.data.techStack?.map((tag, key) => (
            <span key={key}>
              <u>{tag}</u>
            </span>
          ))}
        </div>
      </div>

      {/* <GatsbyImage
        className={classes.ProjectImageWrapper}
        imgClassName={classes.ProjectImage}
        src={`/${props.data.title.toLocaleLowerCase().replace(/\ /g, "")}.png`}
        image={{
          layout: "fixed",
          width: 400,
          height: 400,
          images: {
            sources: [{ media: props.data.IMGURL, srcSet: props.data.IMGURL }],
          },
        }}
        alt={`Project ${props.data.title}`}
      /> */}

      <div className={classes.ProjectImageWrapper}>
        {props.data.title === "Gundam Getter" ? (
          <iframe
            id="gundamFrame"
            className={classes.ProjectImage}
            width={400}
            height={400}
            src="https://www.youtube.com/embed/prFtAVsyJoE"
            title="YouTube video player"
          ></iframe>
        ) : (
          <img
            className={classes.ProjectImage}
            width={400}
            height={400}
            alt={`Project ${props.data.title}`}
            src={`/${props.data.title.toLocaleLowerCase().replace(/\ /g, "")}.png`}
          ></img>
        )}
      </div>
      {/* <a href={props.data.IMGURL} target="_blank" rel="noopener noreferrer" aria-label="External Link">
        <img src={props.data.IMGURL} alt={`${props.data.title}`} />
      </a> */}
    </Animation>
  );
}

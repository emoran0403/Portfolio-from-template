import React from "react";

// @ts-ignore
import * as classes from "./style.module.css";

interface SectionProps {
  anchor: string;
  heading?: string;
  additionalClasses?: string[];
  children: React.ReactNode;
  appURL?: string;
  gitHubURL?: string;
}

export function Section(props: SectionProps): React.ReactElement {
  const makeLink = (URL: string, text: string) => {
    return (
      <>
        <a
          className={classes.Profile}
          href={URL}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="External Link"
        >
          {text}
        </a>
      </>
    );
  };

  let classList;
  if (props.additionalClasses) {
    classList = props.additionalClasses.concat(classes.ContentWrapper).join(" ");
  } else {
    classList = classes.ContentWrapper;
  }
  return (
    <section id={props.anchor} className={classes.Section}>
      <div className={classList}>
        {props.heading && <h3 className={classes.Heading}>{props.heading}</h3>}
        <div className={classes.Links}>
          {props.appURL && makeLink(props.appURL, "Live Site")}
          {props.gitHubURL && makeLink(props.gitHubURL, "Github")}
        </div>
        {props.children}
      </div>
    </section>
  );
}

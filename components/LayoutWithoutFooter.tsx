import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "gatsby-theme-portfolio-minimal/src/globalStyles/global.css";
import "gatsby-theme-portfolio-minimal/src/globalStyles/theme.css";
import React from "react";
import { Helmet } from "react-helmet";
import { Theme, useGlobalState } from "gatsby-theme-portfolio-minimal/src/context";
import { SplashScreen } from "gatsby-theme-portfolio-minimal/src/components/SplashScreen";
import { Header } from "gatsby-theme-portfolio-minimal/src/components/Header";
import { CookieBar } from "gatsby-theme-portfolio-minimal/src/components/CookieBar";

interface LayoutProps {
    children: React.ReactElement;
    useSplashScreenAnimation: boolean;
    useCookieBar: boolean;
}

export function Layout(props: LayoutProps): React.ReactElement {
    const { globalState } = useGlobalState();
    const showSplashScreen = props.useSplashScreenAnimation && !globalState.splashScreenDone;
    const darkModeEnabled = globalState.theme === Theme.Dark;

    const splashScreenView = (
        <>
            <Helmet bodyAttributes={{ "data-theme": Theme.Light }} />
            <SplashScreen />
        </>
    );

    const layoutView = (
        <>
            <Helmet
                bodyAttributes={{
                    "data-theme": darkModeEnabled ? Theme.Dark : Theme.Light
                }}
            />
            <div style={{ width: "100%", minHeight: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "100%", gridTemplateRows: "auto 1fr auto" }}>
                <Header />
                <main>{props.children}</main>
                {props.useCookieBar && <CookieBar />}
            </div>
        </>
    );

    return showSplashScreen ? splashScreenView : layoutView;
}

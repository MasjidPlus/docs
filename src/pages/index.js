import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Intro from "@site/docs/01-intro.md";
// import Homepage from "@site/src/pages/Homepage.html";

let html = `


    <style>
      

        body {
  margin: 0;
  padding: 0;
  background: black;
  color: white;
}

.bg-hidden {
  top: -100%;
  opacity: 0;
}

.bg-visible {
  top: 0;
  opacity: 1;
}

h1 {
  text-align: center;
  font-family: Ubuntu;
  letter-spacing: 1px;
}

.hero {
  position: relative;
  width: 100%;
  height: 300px;
  background: rgb(50, 50, 50);
   background: url(https://doninmass.files.wordpress.com/2013/04/walking-in-rain-painting-wallpaper-hd.jpg) no-repeat 50% 50% fixed;
  background-size: 130%;
  overflow: hidden;
}

.hero h1 {
  position: absolute;
  top: 50%;
  left: 100;
  width: 100%;
  padding: .3em;
  font-size: 3em;
  font-weight: lighter;
}

.content-wrapper {
  width: 80%;
  height: 300px;
  padding: 1em 10%;
}

.content-wrapper h1 {
  margin: 0;
  color: rgb(220, 120, 0);
}

.content-wrapper p {
  font-family: "Open Sans";
  text-indent: 1.5em;
}
    </style>

<body>
 


  <div class="hero">
    <h1>Something Inspiring</h1>
  </div>
  <div class="content-wrapper">`
   

  
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div class="content-wrapper">
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg "
            to="/docs/intro"
          >
            Tutorial
          </Link>
        </div>
      </div>
    </header>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="Masjid Plus for mosques, masjids and prayer spaces"
    >
      
      <main>
        {/* <div dangerouslySetInnerHTML={{__html: html}} />   */}
        <HomepageHeader />
        {/* <div dangerouslySetInnerHTML={{__html: `</div></div>`}} />   */}
       
        <div className="container" style={{"padding": "10px"}}>
          <Intro />
        </div>
        <div className="HomepageFeatures">
        <HomepageFeatures /> 
        </div>
      </main>
    </Layout>
  );
}

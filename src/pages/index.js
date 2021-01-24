import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Light and Fast</>,
    imageUrl: "img/undraw_floating_61u6.svg",
    description: <>It contains very minimal dependencies.</>,
  },
  {
    title: <>Free</>,
    imageUrl: "img/undraw_gift1_sgf8.svg",
    description: (
      <>
        Console Table Printer is free and open source under MIT license. It has
        very minimal dependencies
      </>
    ),
  },
  {
    title: <>Typed</>,
    imageUrl: "img/undraw_powerful_26ry.svg",
    description: <>Use it happily with typescript and Javascript</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Features() {
  return (
    <div>
      {features && features.length > 0 && (
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

const ColoredText = ({text}) =>  <span className={styles.coloredWords}>{text}</span>;
const UnColoredText = ({text}) =>  <span>{text}</span>;

const GetStartedButton = () => <Link className={styles.getStartButton} to={useBaseUrl("docs")}> GET STARTED </Link>;

const ProductLogo = () => <img alt="CTP Logo" className={styles.productLogoHomePage} src={useBaseUrl("img/logo.ico")} />;

function PageHeadLine() {
  return (
    <div className={styles.headline}>
      <div className={styles.headlineSub}>
        <h1 className={styles.headlineText}>
          <ProductLogo />
          <UnColoredText text="Print"/>
          <ColoredText text=" colorful Tables"/>
          <UnColoredText text=" on Console, directly from"/>
          <ColoredText text=" JSON string"/>
        </h1>
        <GetStartedButton />
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <main>
        <PageHeadLine />
        <Features />
      </main>
    </Layout>
  );
}

export default Home;

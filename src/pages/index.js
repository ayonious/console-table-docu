import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
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
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
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

function PageHeadLine() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <header className={classnames("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={classnames(
              "button button--outline button--secondary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl("docs/")}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function PageHeadLine2() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt="CTP Logo"
            className={styles.heroLogo}
            src={useBaseUrl("img/icon.ico")}
          />
          Print{" "}
          <span className={styles.heroProjectKeywords}>colorful Tables</span> on
          Console, directly from{" "}
          <span className={styles.heroProjectKeywords}>JSON string</span>
        </h1>
        <div className={styles.indexCtas}>
          <Link
            className={styles.indexCtasGetStartedButton}
            to={useBaseUrl("docs/doc-install-quick-start")}
          >
            Get Started
          </Link>
        </div>
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
        <PageHeadLine2 />
        <Features />
      </main>
    </Layout>
  );
}

export default Home;

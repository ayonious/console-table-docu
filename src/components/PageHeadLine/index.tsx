import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

import {
  ColoredWords,
  GetStartButton,
  Headline,
  HeadlineSub,
  HeadlineText,
  ProductLogoHomePage,
} from "./styles";

const ColoredText = ({ text }) => <ColoredWords>{text}</ColoredWords>;
const UnColoredText = ({ text }) => <span>{text}</span>;

const GetStartedButton = () => (
  <GetStartButton>
    <Link to={useBaseUrl("docs")}>GET STARTED</Link>
  </GetStartButton>
);

const ProductLogo = () => (
  <ProductLogoHomePage alt="CTP Logo" src={useBaseUrl("img/logo.ico")} />
);

const PageHeadLine = () => {
  return (
    <Headline>
      <HeadlineSub>
        <HeadlineText>
          <ProductLogo />
          <UnColoredText text="Print" />
          <ColoredText text=" colorful Tables" />
          <UnColoredText text=" on Console, directly from" />
          <ColoredText text=" JSON string" />
        </HeadlineText>
        <GetStartedButton />
      </HeadlineSub>
    </Headline>
  );
};

export default PageHeadLine;

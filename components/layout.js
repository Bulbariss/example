import PropTypes from "prop-types";
import React from "react";
import SmartOutline from "./utils/SmartOutline";
import SEO from "../components/seo";
import Header from "../components/Header";

function Layout({ children, seo, title, header, home }) {
  return (
    <>
      <SEO title={title} seo={seo} />
      <SmartOutline />
      <Header home={home} header={header} />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

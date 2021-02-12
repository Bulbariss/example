import PropTypes from "prop-types";
import React from "react";
import SmartOutline from "./utils/SmartOutline";
import SEO from "../components/seo";

function Layout({ children, seo, title }) {
  return (
    <>
      <SEO title={title} seo={seo} />
      <SmartOutline />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

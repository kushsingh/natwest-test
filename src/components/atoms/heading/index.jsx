import React from "react";
import { PropTypes } from "prop-types";

const PageHeading = (props) => {
  const { children, ...otherProps } = props;

  return <h1 {...otherProps}>{children}</h1>;
};

PageHeading.propTypes = {
  children: PropTypes.string,
  otherProps: PropTypes.any,
};

export default PageHeading;

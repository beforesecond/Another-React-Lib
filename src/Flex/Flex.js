import React from "react";
import PropTypes from "prop-types";
import "./Row.css";

const Flex = ({ justify }) => {
  if (justify === "center") {
    return <div className="flex justify-center"></div>;
  } else if (justify === "start") {
    return <div className="flex justify-start"></div>;
  } else if (justify === "end") {
    return <div className="flex justify-end"></div>;
  }
};

Flex.defaultProps = {
  justify: "center"
};

Flex.propTypes = {
  justify: PropTypes.string
};

export default Flex;

import React from "react";
import PropTypes from "prop-types";

/**
 * HeadingElement - A reusable heading component
 *
 * @param {string} content - The text content of the heading.
 * @param {string} className - Additional Tailwind CSS classes for styling.
 */
const HeadingElement = ({ content, className = "" }) => {
  return <h1 className={`text-2xl font-bold ${className}`}>{content}</h1>;
};

HeadingElement.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default HeadingElement;

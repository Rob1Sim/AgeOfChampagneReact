import React from "react";
import PropTypes from "prop-types";

function CountryFlag({ language, flag }) {
  return (
    <img
      className="btn-img"
      src={flag}
      alt={`Change la langue à ${language}`}
    />
  );
}
export default CountryFlag;

CountryFlag.propTypes = {
  language: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

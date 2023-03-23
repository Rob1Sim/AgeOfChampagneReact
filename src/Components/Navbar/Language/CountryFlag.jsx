import React from "react";
import PropTypes from "prop-types";

function CountryFlag({ language, flag, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <img
        className="btn-img"
        src={flag}
        alt={`Change la langue à ${language}`}
      />
    </button>
  );
}
export default CountryFlag;

CountryFlag.propTypes = {
  language: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

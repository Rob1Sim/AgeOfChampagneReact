import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from "wouter";
import { vigneronImgUrl } from "../../services/api/vignerons";
import "./VigneronList.scss";

export function VigneronItem({ data, onClick }) {
  const [, setLocation] = useLocation();
  return (
    <div className="wineMakerList">
      <button
        type="button"
        onClick={() => {
          onClick(data);
          setLocation(`vignerons/${data.id}`);
        }}
      >
        <p>
          {data.nom} - {data.prenom}
        </p>
        <img src={vigneronImgUrl(data.id)} alt={data.nom} />
      </button>
    </div>
  );
}

VigneronItem.defaultProps = {
  data: [],
};

VigneronItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    nom: PropTypes.string,
    prenom: PropTypes.string,
    adresse: PropTypes.string,
    code_postal: PropTypes.string,
    ville: PropTypes.string,
    contenuImage: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

export default VigneronItem;

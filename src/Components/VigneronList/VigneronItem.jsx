import React from "react";
import PropTypes from "prop-types";
import { vigneronImgUrl } from "../../services/api/vignerons";

export function VigneronItem({ data }) {
  return (
    <div>
      <p>
        {data.nom} - {data.prenom}
      </p>
      <img src={vigneronImgUrl(data.id)} alt={data.nom} />
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
};

export default VigneronItem;

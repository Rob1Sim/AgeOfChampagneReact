import React from "react";
import PropTypes from "prop-types";
import { animationImgUrl } from "../../services/api/animations";

export function AnimationItem({ data }) {
  return (
    <div>
      <img src={animationImgUrl(data.id)} alt={data.nom} />
    </div>
  );
}

AnimationItem.defaultProps = {
  data: [],
};

AnimationItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    nom: PropTypes.string,
    type: PropTypes.string,
    horaireDeb: PropTypes.instanceOf(Date),
    horaireFin: PropTypes.instanceOf(Date),
    prix: PropTypes.number,
    contenuImage: PropTypes.string,
  }),
};

export default AnimationItem;

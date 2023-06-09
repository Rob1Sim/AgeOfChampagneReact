import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "wouter";
import { animationImgUrl } from "../../services/api/animations";
import "./AnimationList.scss";

function AnimationItem({ data, onClick }) {
  const [, setLocation] = useLocation();
  return (
    <div className="animationItem">
      <Link href={`/animations/${data.id}`}>
        <button
          type="button"
          onClick={() => {
            onClick(data);
            setLocation(`animations/${data.id}`);
          }}
        >
          <p>{data.nom}</p>
          <img src={animationImgUrl(data.id)} alt={data.nom} />
        </button>
      </Link>
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
    horaireDeb: PropTypes.string,
    horaireFin: PropTypes.string,
    prix: PropTypes.number,
    contenuImage: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

export default AnimationItem;

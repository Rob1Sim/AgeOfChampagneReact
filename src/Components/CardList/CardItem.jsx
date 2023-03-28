import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "wouter";
import { cardImgUrl } from "../../services/api/cards";

function CardItem({ data, onClick }) {
  const [, setLocation] = useLocation();
  return (
    <div className="all-cards">
      <button type="button"
        onClick={() => {
          onClick(data);
          setLocation(`cartes/${data.id}`);
        }}
      >
        <img src={cardImgUrl(data.id)} alt={data.nom}/>
        </button>
    </div>
  );
}
export default CardItem;

CardItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.shape({
    id: PropTypes.number,
    nom: PropTypes.string,
    type: PropTypes.string,
    region: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    superficie: PropTypes.number,
    contenuImage: PropTypes.string,
    cru_r: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

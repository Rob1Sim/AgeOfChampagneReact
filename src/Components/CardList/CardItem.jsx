import PropTypes from "prop-types";
import { cardImgUrl } from "../../services/api/cards";

export function CardItem({ data }) {
  return (
    <div>
      <img src={cardImgUrl(data.contenuImage)} alt={data.nom} />
    </div>
  );
}

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
};

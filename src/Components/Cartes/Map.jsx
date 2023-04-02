import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import "./Card.scss";

function Map({ lat, long }) {
  const defaultProps = useMemo(
    () => ({
      center: {
        lat,
        lng: long,
      },
      zoom: 11,
    }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBREaPD6P-jnYJJ-l6SmI1Wu97mDbSPy8s",
  });
  if (!isLoaded) return <Loading />;
  return (
    <GoogleMap
      zoom={defaultProps.zoom}
      center={defaultProps.center}
      mapContainerClassName="mapContainer"
    >
      <Marker position={defaultProps.center} />
    </GoogleMap>
  );
}

Map.prototype = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
};

export default Map;

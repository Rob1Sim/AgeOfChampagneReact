import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Loading from "../Loading";

function Map({ lat, long }) {
  const defaultProps = {
    center: {
      lat,
      lng: long,
    },
    zoom: 11,
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBREaPD6P-jnYJJ-l6SmI1Wu97mDbSPy8s",
  });
  if (!isLoaded) return <Loading />;
  return (
    <GoogleMap
      zoom={defaultProps.zoom}
      center={defaultProps.center}
      mapContainerClassName="mapContainer"
    />
  );
}

export default Map;

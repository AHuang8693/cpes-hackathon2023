import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

import icon from "./constants";

// Cordinates of Marcillac
const center = [45.269169177925754, -0.5231516014256281];
const purpleOptions = { color: "white" };

function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        icon
      }
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

class MapWrapper extends React.Component {
  render() {
    return (
      <div id="mapid">
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          />
          <LeafletgeoSearch />
        </MapContainer>
      </div>
    );
  }
}

export default MapWrapper;

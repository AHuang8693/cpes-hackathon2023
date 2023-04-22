import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import './mapp.css'; // import the CSS file

function Map() {
    const [position, setPosition] = useState([51.505, -0.09]); // default position
    const provider = new OpenStreetMapProvider();
  
    function Search({ map }) {
      const searchControl = GeoSearchControl({
        provider,
        autoComplete: true,
        autoCompleteDelay: 250,
        style: 'bar',
        showMarker: true,
        showPopup: false,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: false,
        searchLabel: 'Enter an address',
        marker: {
          icon: new L.Icon.Default(),
          draggable: false,
        },
        popupFormat: ({ query, result }) => result.label,
        maxMarkers: 1,
        maxSuggestions: 6,
        zIndex: 3000,
      });
      useMap().addControl(searchControl);
  
      return (
        <div className="leaflet-bar leaflet-control">
          <i className="leaflet-search-icon fas fa-search"></i>
          <input
            type="text"
            className="leaflet-search-input"
            placeholder="Enter an address"
            onChange={(event) => searchControl.search(event.target.value)}
          />
        </div>
      );
    }
  
    function handleSearchResult(result) {
      setPosition([result.y, result.x]);
    }
  
    return (
      <MapContainer center={position} zoom={13} className="leaflet-container">
        <Search />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>{position.toString()}</Popup>
        </Marker>
      </MapContainer>
    );
  }
  
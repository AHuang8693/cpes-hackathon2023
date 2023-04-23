import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = "pk.eyJ1IjoidGVzdGVydXNlcnkyMTMiLCJhIjoiY2xnc3djNXliMGd4bTNkcDVoOTd4d3k5OCJ9.-JBH6EFBLFniuXjUArO-BQ";

const Maps = () => {
  const [maps, setMap] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUpMap([position.coords.longitude, position.coords.latitude]);
      },
      () => {
        setUpMap([-2.28, 41.45]);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  const setUpMap = (center) => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 15,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
      new Directions({
        accessToken: mapboxgl.accessToken,
      }),
      'top-left'
    );

    setMap(map);
  };

  return <div id="map" style={{ height: '100vh' }}></div>;
};

export default Maps;
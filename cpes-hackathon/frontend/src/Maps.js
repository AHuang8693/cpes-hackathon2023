import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import './Maps.css';

mapboxgl.accessToken = "pk.eyJ1IjoidGVzdGVydXNlcnkyMTMiLCJhIjoiY2xnc3djNXliMGd4bTNkcDVoOTd4d3k5OCJ9.-JBH6EFBLFniuXjUArO-BQ";

const Maps = ({ post, show }) => {
  const [map, setMap] = useState(null);


  useEffect(() => {
      if (show) {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [36.3, 54.5],
          zoom: 15,
        });

        if (map) {
          const bounds = map.getBounds();
          console.log(bounds);
        }
    
        map.addControl(new mapboxgl.NavigationControl());
    
        const directions = new Directions({
          accessToken: mapboxgl.accessToken,
        });
    
        directions.on('route', (event) => {
          const route = event.route[0];
          console.log("here");
          console.log(event.route);
          const distance = route.distance;
          console.log('Distance:', distance);
        });
    
        map.addControl(directions, 'top-left');
    
        // Create a new marker at the post coordinates
        // const marker = new mapboxgl.Marker()
        //   .setLngLat([post.longitude, post.latitude])
        //   .addTo(map);
    
        setMap(map);
    
        return () => {
          map.remove();
        }
      } else if (map) {
        map.remove();
        setMap(null);
      }
    }, [post, show]);

  return (
    <div className="map-container" style={{ display: show ? 'block' : 'none' }}>
      <div id="map" className="map"></div>
    </div>
  );
};

export default Maps;

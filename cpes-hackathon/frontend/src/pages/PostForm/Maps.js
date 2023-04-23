import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import './Maps.css';
import { geocode } from './geocoding';
import saveGas from './saveGas';

mapboxgl.accessToken = "pk.eyJ1IjoidGVzdGVydXNlcnkyMTMiLCJhIjoiY2xnc3djNXliMGd4bTNkcDVoOTd4d3k5OCJ9.-JBH6EFBLFniuXjUArO-BQ";

const Maps = ({ source, destination, show }) => {
  const [map, setMap] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [miles, setMiles] = useState(null);
  const [gallons, setGallons] = useState(null);

  const handleGeocode = async (address) => {
    const [longitude, latitude] = await geocode(address);
    setLongitude(longitude);
    setLatitude(latitude);
    console.log(latitude);
    console.log(longitude);
  };

  function getMiles(meters) {
    return Number(meters*0.000621371192).toFixed(0);
  }

  useEffect(() => {
      if (show) {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [36.3, 54.5],
          zoom: 15,
          interactive: false,
          attributionControl: false
        });

        if (map) {
          const bounds = map.getBounds();
          console.log(bounds);
        }

        map.addControl(new mapboxgl.NavigationControl());
    
        const directions = new Directions({
          accessToken: mapboxgl.accessToken,
          controls: { instructions: false, inputs: false, profile: false, profileSwitcher: false}
        });
        
        directions.on('route', (event) => {
          const route = event.route[0];
          const distance = route.distance;
          setMiles(String(getMiles(distance)));
          console.log('Distance:', distance);
        });
        
        setGallons(String(Number(miles /25.4).toFixed(2)));
        map.addControl(directions, 'top-left');
        
        map.on('load',  function() {
          handleGeocode(source);
          // directions.setOrigin([latitude, longitude]);
          directions.setOrigin(source); // can be address in form setOrigin("12, Elm Street, NY")

          handleGeocode(destination);
          // directions.setDestinaion([latitude, longitude]);
          directions.setDestination(destination);
        })
    
        setMap(map);

        return () => {
          map.remove();
        }
      } else if (map) {
        map.remove();
        setMap(null);
      }
    }, [source, destination, show ]);

  return (
    <div className="map-container" style={{ display: show ? 'block' : 'none' }}>
      <div id="map" className="map"></div>
      
      <div className="Home">
          <li className="HomeBottomList">
            <ul className="homelistitemC">
                Wow you travelled {miles} miles!!
                and Saved {gallons} gallons!!
            </ul>
          </li>
        </div>

    </div>
  );
};

export default Maps;
import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import './Maps.css';
import { geocode } from './geocoding';
import saveGas from './saveGas';

mapboxgl.accessToken = "pk.eyJ1IjoidGVzdGVydXNlcnkyMTMiLCJhIjoiY2xnc3djNXliMGd4bTNkcDVoOTd4d3k5OCJ9.-JBH6EFBLFniuXjUArO-BQ";

const Maps = ({ source, numPeople, destination, show }) => {
  const [map, setMap] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [miles, setMiles] = useState(null);
  const [gallons, setGallons] = useState(null);
  const [people, setPeople] = useState(null);

  const [center, setCenter] = useState([-77.0369, 38.9072]);
  const [done, setDone] = useState(null);

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
        
        try {
          directions.on('route', (event) => {
            console.log('fire drections on route');
              const route = event.route[0];
              const distance = route?.distance;
              if(distance !== undefined){
                setMiles(getMiles(distance));
                console.log('Distance:', distance);
                
              }
          });
        } catch(error) {

        }
        
        try {
          map.addControl(directions, 'top-left');
        } catch (error) {
        }
        
        try{
          map.on('load',  function() {
              handleGeocode(source);
              // directions.setOrigin([latitude, longitude]);
              directions.setOrigin(source); // can be address in form setOrigin("12, Elm Street, NY")
              
              handleGeocode(destination);
              // directions.setDestinaion([latitude, longitude]);
              directions.setDestination(destination);
          })}
          catch (error) {
          }
        const n_c = map.getCenter();
        setCenter([n_c.lng, n_c.lat]);
        setMap(map);

        return () => {
          map.remove();
        }
      } else if (map) {
        map.remove();
        setMap(null);
      }
    }, [source, destination, numPeople, show]);

    useEffect(() => {
        if (map) {
          // Save the current center coordinates to the state variable
        //   const newCenter = map.getCenter();
        //   setCenter([newCenter.lng, newCenter.lat]);
          setGallons(String( Number((miles /25.4) * (numPeople - 1) ).toFixed(2)));
        }
      }, [miles]);
    

  return (
    <div className="map-container" style={{ display: show ? 'block' : 'none' }}>
      <div id="map" className="map"></div>
      <saveGas />
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
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L, { map } from 'leaflet';

// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Initialize the geocoder
const searchControl = new GeoSearchControl({
  provider: new OpenStreetMapProvider(),
  style: 'bar',
  showMarker: true,
  autoClose: true,
  retainZoomLevel: false,
  animateZoom: true,
  keepResult: true,
  searchLabel: 'Enter an address',
  notFoundMessage: 'Sorry, we could not find that location',
  messageHideDelay: 3000,
  minLength: 3,
});

// Add the geocoder to the map
map.addControl(searchControl);

// Move the map to the searched address
searchControl.on('results', function(data) {
  map.fitBounds(data.results[0].bounds);
});
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L, { map } from 'leaflet';

const provider = new OpenStreetMapProvider;
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const search = new GeoSearch.GeoSearchControl({
  provider: provider,
});

map.addControl(search);
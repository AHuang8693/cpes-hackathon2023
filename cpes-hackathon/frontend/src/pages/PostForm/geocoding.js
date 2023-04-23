import GeocodingClient from '@mapbox/mapbox-sdk/services/geocoding';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoidGVzdGVydXNlcnkyMTMiLCJhIjoiY2xnc3djNXliMGd4bTNkcDVoOTd4d3k5OCJ9.-JBH6EFBLFniuXjUArO-BQ";


const geocodingClient = GeocodingClient({ accessToken: mapboxgl.accessToken });

export function geocode(address) {
  return geocodingClient
    .forwardGeocode({
      query: address,
      limit: 1,
    })
    .send()
    .then((response) => {
      const feature = response.body.features[0];
      return feature.center;
    });
}
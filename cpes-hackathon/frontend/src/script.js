mapboxgl.accessToken =  "pk.eyJ1IjoidGVzdGVydXNlcnkyMTMiLCJhIjoiY2xnc3djNXliMGd4bTNkcDVoOTd4d3k5OCJ9.-JBH6EFBLFniuXjUArO-BQ";

navigator.geolocation.getCurrentPosition( successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position){
    setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setUpMap([-2.28, 41.45])
}

function setUpMap(center){
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
}
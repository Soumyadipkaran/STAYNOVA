mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates, //coordinate [lng,lat]
    zoom: 5 // starting zoom
});


console.log(coordinates);
const marker1 = new mapboxgl.Marker({color: "green"})
.setLngLat(coordinates)
.addTo(map);
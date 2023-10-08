// TODO: Add your own Access Token key bellow:
mapboxgl.accessToken =
'Add your Own Access Key to Mapbox here: https://account.mapbox.com/';
            
//Makes the map and sets center position
let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-71.093229, 42.350544],
zoom: 12.5,
});

var allMarkers = [];
var manyBuses = [];

async function run() {
const locations = await getBusLocation();
console.log(new Date());
const index = locations[0];
const att = index.attributes;
manyBuses = [];
var counter = 0;
locations.forEach((element) => {
    let longLat = [];
    longLat.push(
        element.attributes.longitude,
        element.attributes.latitude
    );
    manyBuses.push(longLat);
});
setTimeout(run, 15000);
return manyBuses;
}

async function getBusLocation() {
const url =
    'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
const response = await fetch(url);
const json = await response.json();
return json.data;
}

setTimeout(() => {
console.log(manyBuses);
}, 2000);

setTimeout(() => {
for (i = 0; i < manyBuses.length; i++) {
    allMarkers[i] = new mapboxgl.Marker()
        .setLngLat(manyBuses[i])
        .addTo(map);
}
}, 1500);

var counter = 0;
function move() {
setTimeout(() => {
    if (counter >= manyBuses.length) return;
    allMarkers[counter].setLngLat(manyBuses[counter]);
    counter++;
    move();
}, 15000);
}

run();

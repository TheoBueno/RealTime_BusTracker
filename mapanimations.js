mapboxgl.accessToken =
'pk.eyJ1IjoidGhlby1idWVubyIsImEiOiJjbG5nNjZ2dW8wMG56MmtsODN2MHBhem4wIn0.Kou4hDF7heuvt0Ux7h6GWw';

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
//  console.log(locations);
const index = locations[0];
//  console.log(index)
const att = index.attributes;
//  console.log(att.longitude, att.latitude);;
manyBuses = [];
var counter = 0;
locations.forEach((element) => {
    let longLat = [];
    longLat.push(
        element.attributes.longitude,
        element.attributes.latitude
    );
    manyBuses.push(longLat);
    //     var marker = new mapboxgl.Marker().setLngLat(longLat).addTo(map);
});
// console.log(manyBuses);
setTimeout(run, 15000);
// console.log(manyBuses);
return manyBuses;
}

async function getBusLocation() {
const url =
    'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
const response = await fetch(url);
const json = await response.json();
return json.data;
}

/*
async function initialPos() {
pos = await manyBuses
pos.forEach(element => {
var marker = new mapboxgl.Marker().setLngLat(element).addTo(map);
})
}  
*/

setTimeout(() => {
console.log(manyBuses);
}, 2000);

// setTimeout(() => {
//     forEach(element => {
//         var marker = new mapboxgl.Marker().setLngLat(element).addTo(map);
//     })
// }, 2000);

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

// initialPos()
run();

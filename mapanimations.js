// TODO: Add your own Access Token key bellow:
mapboxgl.accessToken = '' /*'Add your Own Access Key to Mapbox here: https://account.mapbox.com/'*/;
            
//Makes the map and sets center position
let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-71.093229, 42.350544],
zoom: 12.5,
});

const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
];

//GeoJSON Load Data
const geojson = {
    type: 'FeatureCollection',
    features: []
};

function placeRouteStops(bSt) { 
    bSt.forEach(i => {
        geojson.features.push(
            {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [i[0],i[1]]
                },
                properties: {
                  title: 'Bus Stop',
                  description: 'MBTA Bus Route 93'
                }
              },
        )
    });
}

placeRouteStops(busStops)

// add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
          )
      ).addTo(map);
}

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
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(`<h3>Bus ${i}</h3><p>Bus number ${i} of the MBTA Bus Route 93</p>`))
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

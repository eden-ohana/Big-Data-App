const map = L.map('map').fitWorld();
if (true) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  map.setZoom(12);
  map.panTo(new L.LatLng(32.070953, 34.763514));
} else {
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: '<a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(map);
}

var generalIcon = L.icon({
    iconUrl: 'assets/marker.png',
    iconSize:      [30, 40],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// When set to true, the next map click will trigger dialog open for pin placement:
let pinInPlacement = false;
// Current pin coordinates, set by pressing the map
let currentPinCoords = null;
let currentButton = generalIcon;
let selectedIcon = null; 
//pinButton = null;
const ZOOM_TO_LOCATION = true;

// Example code to show how to get GPS location and place pin on map in that location
if (ZOOM_TO_LOCATION) {
  function onLocationFound(e) {
    let radius = e.accuracy  / 50 ;

    L.marker(e.latlng, {icon: myIcon})
        .addTo(map)
        .bindPopup("You are within " + radius + " meters from this point")
        .openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }

  function onLocationError(e) {
    console.log(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);
  map.locate({setView: true, maxZoom: 16});
}

// Map press event
map.on('mousedown touchstart', function onMouseDown(event) {
  if (pinInPlacement) {
    currentPinCoords = event.latlng;
    pinInPlacement = false;
    dialog.showModal();
  }
});

//Icons
var lightIcon = L.icon({
    iconUrl: 'assets/light.png',
    iconSize:     [30, 35], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var myIcon = L.icon({
    iconUrl: 'assets/my.png',
    iconSize:     [30, 40],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});


var busIcon = L.icon({
    iconUrl: 'assets/bus.png',
    iconSize:      [30, 40],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

var benchIcon = L.icon({
    iconUrl: 'assets/city-bench.png',
    iconSize:     [30, 40],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

var dangerIcon = L.icon({
    iconUrl: 'assets/danger-tape.png',
    iconSize:     [30, 40],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

var nolightIcon = L.icon({
    iconUrl: 'assets/nolight.png',
    iconSize:     [30, 40],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

var roadIcon = L.icon({
    iconUrl: 'assets/road-closure.png',
    iconSize:     [30, 40],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

var stairsIcon = L.icon({
    iconUrl: 'assets/stairs.png',
    iconSize:     [30, 40],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Bottom-right button press event
function addPin(type) {
  pinInPlacement = true;
  if (type === 'stairs') {
    currentButton = stairsIcon;
    const pinButton = document.getElementById('add-pin-buttonS1');
    pinButton.classList.add('add-pin-button--active'); 
  }
  if (type === 'light') {
    currentButton = lightIcon;
    const pinButton = document.getElementById('add-pin-buttonL2');
    pinButton.classList.add('add-pin-button--active'); 

  }
  if (type === 'no-light') {
    currentButton = nolightIcon;
    const pinButton = document.getElementById('add-pin-buttonN3');
    pinButton.classList.add('add-pin-button--active'); 
  }
  if (type === 'road') {
    currentButton = roadIcon;
    const pinButton = document.getElementById('add-pin-buttonR4');
    pinButton.classList.add('add-pin-button--active'); 
  }
  if (type === 'bus') {
    currentButton = busIcon;
    const pinButton = document.getElementById('add-pin-buttonB5');
    pinButton.classList.add('add-pin-button--active'); 
  }
  if (type === 'danger') {
    currentButton = dangerIcon;
    const pinButton = document.getElementById('add-pin-buttonD6');
    pinButton.classList.add('add-pin-button--active'); 
  }
  if (type === 'bench') {
    currentButton = benchIcon;
    const pinButton = document.getElementById('add-pin-buttonC7');
    pinButton.classList.add('add-pin-button--active'); 
  }
  if (type === 'bmarkerus') {
    currentButton = generalIcon;
    const pinButton = document.getElementById('add-pin-buttonM8');
    pinButton.classList.add('add-pin-button--active'); 
  }
}

// Register dialog
const dialog = document.querySelector('dialog');
if (!dialog.showModal && (typeof dialogPolyfill !== 'undefined')) {
  dialogPolyfill.registerDialog(dialog);
}

fetch(`/xxx`, {
  method: 'GET'
});

// Dialog save
dialog.querySelector('#dialog-rate_save').addEventListener('click', function() {
  dialog.close();

  if (currentPinCoords) {
    //L.marker(currentPinCoords).addTo(map);
    
    if (currentButton==roadIcon) {
      let selectedIcon = roadIcon;
      L.marker(currentPinCoords, {icon: selectedIcon}).addTo(map);
      const id = getRandomId();
      const data = {  coords: currentPinCoords };
  }
    if (currentButton==busIcon) {
      let selectedIcon = busIcon;
      L.marker(currentPinCoords, {icon: selectedIcon}).addTo(map);
      const id = getRandomId();
      const data = {  coords: currentPinCoords };
  }
    if (currentButton==benchIcon) {
      let selectedIcon = benchIcon;
      L.marker(currentPinCoords, {icon: selectedIcon}).addTo(map);
      const id = getRandomId();
      const data = {  coords: currentPinCoords };
  }
    if (currentButton==dangerIcon) {
      let selectedIcon = dangerIcon;
      L.marker(currentPinCoords, {icon: selectedIcon}).addTo(map);
      const id = getRandomId();
      const data = {  coords: currentPinCoords };
  }
    if (currentButton==lightIcon) {
      let selectedIcon = lightIcon;
      L.marker(currentPinCoords, {icon: selectedIcon}).addTo(map);
      const id = getRandomId();
      const data = {  coords: currentPinCoords };
  }
    if (currentButton==nolightIcon) {
      let selectedIcon = nolightIcon;
      L.marker(currentPinCoords, {icon: selectedIcon}).addTo(map);
      const id = getRandomId();
      const data = {  coords: currentPinCoords };
  }
    if (currentButton==generalIcon) {
       let selectedIcon = generalIcon;
        L.marker(currentPinCoords, {icon: selectedIcon}).addTo(map);
        const id = getRandomId();
        const data = {  coords: currentPinCoords };
  }
    if (currentButton==stairsIcon) {
      let selectedIcon = stairsIcon;
      L.marker(currentPinCoords, {icon: selectedIcon}).addTo(map);
      const id = getRandomId();
      const data = {  coords: currentPinCoords };
  }
    //const type = document.querySelector('#type').value;
    //const description = document.querySelector('#description').value;

    fetch(`/add_point?id=${id}&data=${JSON.stringify(data)}`, {
      method: 'GET'
    });
  }

  deactivateAddPinButton();
  });

// Dialog close (without saving)
dialog.querySelector('.close').addEventListener('click', function() {
  dialog.close();
  deactivateAddPinButton();
});

// Dialog helper method (i.e change button color)
function deactivateAddPinButton() {
  const pinButton = document.getElementById('add-pin-button');
  pinButton.classList.remove('a-pin-button--active');
}

// Load map:
fetch('/all_points', { method: 'GET' })
  .then(result => result.json())
  .then(data => {
    Object.keys(data).forEach(
      id => {
        const pointData = JSON.parse(data[id]);
        L.marker(pointData.coords).addTo(map);
      }
    );
  }
);

// Utils
function getRandomId() {
  return Math.random().toString().substr(2, 9);
};


//Fixed Points
L.marker([32.11289,34.80490], {icon: lightIcon}).addTo(map);
L.marker([32.13000,34.81490], {icon: busIcon}).addTo(map);
L.marker([32.11289,34.89490], {icon: roadIcon}).addTo(map);


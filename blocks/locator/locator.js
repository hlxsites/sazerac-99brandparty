import { alert99 } from '../../scripts/scripts.js';

let map;
let infoWindow;
let geolocat = false;
let pos;
const countryWithAlcohol = ['Massachusetts', 'South Carolina', 'West Virginia', 'Arkansas', 'Pennsylvania'];

function isZIP(text) {
  return /\d+$/.test(text) && (text.length === 5);
}

async function isCountryWithoutAlcohol() {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=AIzaSyAyfNEYMmECQLIBpa97FVwiQH0Q9ayqK0Y&location_type=APPROXIMATE&result_type=administrative_area_level_1`;
  const response = await fetch(url);
  let country;
  if (response.ok()) {
    const data = await response.json();
    if (data.status === 'OK') {
      const search = data.results[0].address_components[0].long_name;
      if (countryWithAlcohol.find(search)) {
        country = `Information not available for ${search}`;
      }
    }
  }
  return country;
}

async function makeQueryProduct(productId, nresult, radi) {
  const url = `https://99brandparty.com/storelocator.php?lat=${pos.lat}&lng=${pos.lng}&token=75r_SCHLMSclHme0x9K_iA&product=${productId}&within=${radi}`;
  const result = await fetch(url);
  if (!result.ok) {
    const data = await result.json();
    console.log(data);
    const isCountryWithAlcohol = isCountryWithoutAlcohol();
    if (isCountryWithAlcohol) {
      alert99(isCountryWithAlcohol);
      infoWindow.setContent(isCountryWithAlcohol);
    } else {
      infoWindow.close();
    }
  }
}

async function searchForZip(zip, product, radius) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zip}&key=AIzaSyAyfNEYMmECQLIBpa97FVwiQH0Q9ayqK0Y`;
  const response = await fetch(url);
  if (!response.ok) {
    alert99('No results found, try another flavor.');
  } else {
    const data = await response.json();
    if (data.results.length === 0) {
      alert99('No results found, try another flavor.');
    } else {
      pos = data.results[0].geometry.location;
      map.setCenter(pos);
      infoWindow.setPosition(pos);
      await makeQueryProduct(product, null, radius);
    }
  }
}

function formSubmitted(form) {
  const zip = form.querySelector('#zip').value;
  if (!isZIP(zip)) {
    alert99('Please enter a valid ZIP code.');
    return;
  }
  const product = form.querySelector('#product').value;
  const radius = form.querySelector('#distance').value;
  console.log('form submitted', zip, product, radius);
  searchForZip(zip, product, radius);
}

function handleLocationError() {
  document.getElementById('locator-map').innerHTML = 'Error: Your browser doesn\'t support geolocation.';
}

function getMyLocation(subSinc, product, result, dradius) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      geolocat = true;
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      infoWindow.open(map);
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
      if (subSinc) {
        makeQueryProduct(product, result, dradius);
      }
    }, (e) => {
      if (e.code === 1) {
        geolocat = false;
      }
      handleLocationError();
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError();
  }
}

export async function initMap() {
  // eslint-disable-next-line no-undef
  const { Map } = await google.maps.importLibrary('maps');

  map = new Map(document.getElementById('locator-map'), {
    center: {
      lat: 36.2425741,
      lng: -113.7464011,
    },
    zoom: 8,
  });
  // eslint-disable-next-line no-undef
  infoWindow = new google.maps.InfoWindow({
    map,
  });
  getMyLocation(false);
}

export default async function decorate(block) {
  window.locate = async (form) => {
    formSubmitted(form);
  };
  window.initMap = async () => {
    initMap();
  };
  block.textContent = '';
  const d = document.createElement('div');
  d.className = 'map-container';
  const mdiv = document.createElement('div');
  mdiv.id = 'locator-map';
  mdiv.className = 'map';
  d.append(mdiv);
  block.append(d);
}

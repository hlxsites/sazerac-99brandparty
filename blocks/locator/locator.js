import { alert99 } from '../../scripts/scripts.js';

const resultsPerPage = 15;

let map;
let infoWindow;
let geolocat = false;
let pos;
const markers = [];

const countryWithAlcohol = ['Massachusetts', 'South Carolina', 'West Virginia', 'Arkansas', 'Pennsylvania'];

function isZIP(text) {
  return /\d+$/.test(text) && (text.length === 5);
}

async function isCountryWithoutAlcohol() {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=AIzaSyAyfNEYMmECQLIBpa97FVwiQH0Q9ayqK0Y&location_type=APPROXIMATE&result_type=administrative_area_level_1`;
  const response = await fetch(url);
  let country;
  if (response.ok) {
    const data = await response.json();
    if (data.status === 'OK') {
      const search = data.results[0].address_components[0].long_name;
      if (countryWithAlcohol.find((c) => c === search)) {
        country = `Information not available for ${search}`;
      }
    }
  }
  return country;
}

function getLink(x1, y1, x2, y2) {
  return `https://www.google.com.co/maps/dir/${x1},${y1}/${x2},${y2}/?hl=en`;
}

function addMarker(place, i) {
  // eslint-disable-next-line no-undef
  const myLatlng = new google.maps.LatLng(place.latitude, place.longitude);
  const pinColor = 'FEF102';
  // eslint-disable-next-line no-undef
  const pinImage = new google.maps.MarkerImage(
    `http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${pinColor}`,
    // eslint-disable-next-line no-undef
    new google.maps.Size(21, 34),
    // eslint-disable-next-line no-undef
    new google.maps.Point(0, 0),
    // eslint-disable-next-line no-undef
    new google.maps.Point(10, 34),
  );
  // eslint-disable-next-line no-undef
  const marker = new google.maps.Marker({
    map,
    position: myLatlng,
    icon: {
      url: 'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container-bg_4x.png,icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=ff000000,ffd600,ff000000&scale=2.0',
      // eslint-disable-next-line no-undef
      anchor: new google.maps.Point(30, 30),
      // eslint-disable-next-line no-undef
      scaledSize: new google.maps.Size(30, 30),
    },
  });

  // eslint-disable-next-line no-undef
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.setContent(`<div class="info-ubic">
      <h5>${i + 1}  - ${place.name}</h5>
        <div class="info-ubic-d">
          <p>${place.address}, <span>${place.city}</span></p>
          <p class="link-result"><a target="_blank" class="btn" href="${getLink(pos.lat, pos.lng, place.latitude, place.longitude)}">DIRECTIONS</a></p>
        </div>
      </div>`);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
}

function printResults(array, elem, nresult) {
  elem.innerHTML = '';
  if (array.length > 0) {
    let page = null;
    let show = true;
    array.forEach((element, i) => {
      if (!page) {
        page = document.createElement('div');
        page.className = 'results-page';
        elem.appendChild(page);
        if (!show) {
          page.style.display = 'none';
        }
      }
      const div = document.createElement('div');
      div.className = 'result';
      div.innerHTML = `<p class='info-title'>${element.name}</p>
        <p class='info-address'>${element.address}, ${element.city}, ${element.state}</p>
        <a class='button' target='_blank' href='${getLink(pos.lat, pos.lng, element.latitude, element.longitude)}'>DIRECTIONS</a>
      `;
      page.appendChild(div);

      if (i > 0 && i % nresult === 0) {
        page = null;
        show = false;
      }
    });
    if (!show && page) {
      // TODO add pagination
    }
  } else {
    alert99('No results found, try another flavor.');
  }
}

async function makeQueryProduct(product, radius) {
  const url = '/blocks/locator/testdata.json'; // `https://99brandparty.com/storelocator.php?lat=${pos.lat}&lng=${pos.lng}&token=75r_SCHLMSclHme0x9K_iA&product=${product}&within=${radius}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    infoWindow.close();
    const isCountryWithAlcohol = await isCountryWithoutAlcohol();
    if (!isCountryWithAlcohol) {
      if (data) {
        data.data.locations.forEach((location, i) => {
          addMarker(location, i);
        });
        printResults(data.data.locations, document.getElementById('locator-results'), resultsPerPage);
      } else {
        alert99('No results found, try another flavor.');
      }
    } else {
      alert99(isCountryWithAlcohol);
      infoWindow.open(map);
      infoWindow.setContent(isCountryWithAlcohol);
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
      await makeQueryProduct(product, radius);
    }
  }
}

function handleLocationError() {
  document.getElementById('locator-map').innerHTML = 'Error: Your browser doesn\'t support geolocation.';
}

function getMyLocation(subSinc, product, radius) {
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
        makeQueryProduct(product, radius);
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

function formSubmitted(form) {
  const zip = form.querySelector('#zip').value;
  if (!isZIP(zip)) {
    alert99('Please enter a valid ZIP code.');
    return;
  }
  const product = form.querySelector('#product').value;
  const radius = form.querySelector('#distance').value;
  console.log('form submitted', zip, product, radius);
  if (geolocat) {
    if (!isZIP(zip)) {
      getMyLocation(true, product, radius);
    } else {
      searchForZip(zip, product, radius);
    }
  } else if (isZIP(zip)) {
    searchForZip(zip, product, radius);
  } else {
    alert99('Please enter a valid ZIP code.');
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
  const rdiv = document.createElement('div');
  rdiv.id = 'locator-results';
  rdiv.className = 'results';
  d.appendChild(rdiv);
  block.append(d);
}

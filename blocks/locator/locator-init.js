(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: "AIzaSyAyfNEYMmECQLIBpa97FVwiQH0Q9ayqK0Y",
});

let map;
let infoWindow;

function getMyLocation(sub_sinc, dProd, resul_p_pag, dradius) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      Geolocat = true;
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.open(map);
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
      if (sub_sinc) {
        make_query_product(dProd, resul_p_pag, dradius);
      }
      console.log(1);
     jQuery(".loading-99b").hide();
    }, function(e) {
      if (e.code == 1) {
        Geolocat = false;
      }
      handleLocationError();
      console.log(2);
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError();
  }
}

function handleLocationError() {
  document.getElementById('locator-map').innerHTML = 'Error: Your browser doesn\'t support geolocation.';
}

async function initMap() {
  const { Map } = await google.maps.importLibrary('maps');

  map = new Map(document.getElementById('locator-map'), {
    center: {
      lat: 36.2425741,
      lng: -113.7464011,
    },
    zoom: 8,
  });
  infoWindow = new google.maps.InfoWindow({
    map: map
  });
  getMyLocation(false);
}

initMap();
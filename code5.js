var lon,lat;
function showlocation(){
    window.navigator.geolocation.getCurrentPosition(showpos);
}
function showpos(pos){
    lat=pos.coords.latitude;
    lon=pos.coords.longitude;
}
document.write(`lon: ${lon}  lat: ${lat}`);
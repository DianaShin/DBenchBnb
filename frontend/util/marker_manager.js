export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }
  updateMarkers(benches) {
    console.log('time to update');
    Object.keys(benches).forEach( (key) => {
      let latLng = { lat: benches[key].lat, lng: benches[key].lng };
      new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: benches[key].description
      });
    });
  }
}

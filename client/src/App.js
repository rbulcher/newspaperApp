import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import {GeolocateControl} from "react-map-gl";


const geolocateControlStyle= {
  right: 10,
  top: 10
};

const App = () => {


  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 18
  });
  return (
    <ReactMapGL {...viewport} 
    width="100vw" 
    height="100vh" 
    onViewportChange={setViewport}
    mapboxApiAccessToken={'pk.eyJ1IjoicnlhbmJ1bGNoZXIiLCJhIjoiY2tsd2w3OTA3MDBmZzJ1azJrNzU2ZWd1eiJ9.VyczYMv752tJuJd4cjsKhg'}
    mapStyle={'mapbox://styles/mapbox/streets-v11'}
   >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
    </ReactMapGL>
  );
}

export default App;

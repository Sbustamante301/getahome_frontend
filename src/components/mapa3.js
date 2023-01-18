import  { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Home() {
  const API_KEY = 'AIzaSyC6T2POIF5s4JTFZ1MJGLrf9eSQIDV0A5U';
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });
  
  if (!isLoaded){
    return <div>Loading...</div>;
  } 
  
  return <Map />;
  
}

// function Map() {
//   const [coordinates, setCoordinates] = useState({
//     lat: 37.7,
//     lng: -122.4  
//   })
//   const onMapLoad = (map) => {
//     console.log("Map Loaded!");
//   }

//   const onMapUnmount = (map) => {
//     console.log("Map Unmount!");
//   }
//   const handleClick = (event) => {
//     setCoordinates({ lat: event.latLng.lat(), lng: event.latLng.lng() });
// }

//   const options = {
//     zoom: 8,
//     center: coordinates
//   };
//   return (
//     <GoogleMap
//     id="my-map"
//     mapContainerStyle={{
//       height: "400px",
//       width: "100%"
//     }}
//     zoom={options.zoom}
//     // center={options.center}
//     options={{ streetViewControl: false }}
//     onLoad={onMapLoad}
//     onUnmount={onMapUnmount}
//     onClick={handleClick}
//   >
//     <MarkerF position={options.center} />
//   </GoogleMap>
//   );
// }

function Map() {
    const [coordinates, setCoordinates] = useState({ lat: 50.5, lng: 30.5 });
    const options = {
      zoom: 8,
      center:coordinates
    };
    const onMapLoad = (map) => {
      console.log("Map Loaded!");
    }
  
    const handleClick = (event) => {
      console.log(event)
      setCoordinates({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
    const onMapUnmount = (map) => {
        console.log("Map Unmount!");
    }
    
    return (
      <GoogleMap
      id="my-map"
      mapContainerStyle={{
        height: "100%",
        width: "100%"
      }}
      zoom={options.zoom}
      // center={coordinates}
      options={{ streetViewControl: false }}
      onLoad={onMapLoad}
      onUnmount={onMapUnmount}
      onClick={handleClick}
    >
      <MarkerF position={options.center} />
    </GoogleMap>
    );
  }
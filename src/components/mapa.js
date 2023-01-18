import  { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF, Marker } from "@react-google-maps/api";
import { useAuth } from '../context/auth-context';
import { API_KEY } from '../config';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });
  if (!isLoaded){
    return <div>Loading...</div>;
  } 
  
  return <Map />;
}

function Map() {
    const {coordinates, setCoordinates} = useAuth();
    const options = {
      zoom: 8,
      center:coordinates
    };
    const onMapLoad = (map) => {
      console.log("Map Loaded!");
    }
  
    const handleClick = (event) => {
      setCoordinates({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      console.log(coordinates);
    }
    const onMapUnmount = (map) => {
        console.log("Map Unmount!");
      }
    
    return (
      <GoogleMap
      id="my-map"
      mapContainerStyle={{
        height: '100%',
        width: "100%"
      }}
      zoom={12}
      center={coordinates}
      options={{ streetViewControl: false }}
      onLoad={onMapLoad}
      onUnmount={onMapUnmount}
      onClick={handleClick}
    >
      <MarkerF position={coordinates} />
    </GoogleMap>
    );
  }

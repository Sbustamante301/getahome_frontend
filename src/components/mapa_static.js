import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useAuth } from '../context/auth-context';
import { API_KEY } from '../config';

export default function StaticMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });
  if (!isLoaded){
    return <div>Loading...</div>;
  } 
  
  return <Map/>;
}

function Map() {
    const {currentProperty} = useAuth();
    const options = {
      zoom: 8,
      center:{lat: parseFloat(currentProperty.property.latitud), lng: parseFloat(currentProperty.property.longitud)}
    };
    const onMapLoad = (map) => {
      console.log("Map Loaded!");
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
      center={options.center}
      options={{ streetViewControl: false }}
      onLoad={onMapLoad}
      onUnmount={onMapUnmount}
    >
      <MarkerF position={options.center} />
    </GoogleMap>
    );
  }

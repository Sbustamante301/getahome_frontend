import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
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

function Map({edit}) {
  const {coordinates, setCoordinates, currentProperty} = useAuth();
  if (edit === "edit"){
    setCoordinates( {lat: currentProperty.property.lat, lng: currentProperty.property.lng} )
  }
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
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {coordinates && <Marker position={coordinates} />}
//     </MapContainer>
//   );

// }

// function MyComponent( {center}) {
//   const map = useMap()
//   console.log('map center:', map.getCenter())
//   return (
//     <>
//     <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={center}>
//         <Popup>
//           {Icons.positioner}
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </>
//   )
// }

// export default function Mapa() {
//   return (
//     <MapContainer center={[50.5, 30.5]} zoom={13}>
//       <MyComponent  center={[50.5, 30.5]}/>
//     </MapContainer>
//   )
// }


// function MyComponent() {
//   const map = useMapEvents({
//     click: () => {
//       map.locate()
//     },
//     locationfound: (location) => {
//       console.log('location found:', location)
//     },
//   })
//   return null
// }

// export default function Mapa() {
//   return (
//     <MapContainer center={[50.5, 30.5]} zoom={13}>
//       <MyComponent />
//     </MapContainer>
//   )
// }

// function MyComponent() {
//   const map = useMapEvent('click', () => {
//     map.setCenter([50.5, 30.5])
//   })
//   return null
// }

// export default function Mapa() {
//   return (
//     <MapContainer center={[50.5, 30.5]} zoom={13}>
//       <MyComponent />
//     </MapContainer>
//   )
// }
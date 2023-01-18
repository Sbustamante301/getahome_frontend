import { TileLayer, LeafletMap, Marker, Popup, Map } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'

import { useMap, useMapEvents, useMapEvent } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css"
import { Icons } from "../utils"
import { useState } from 'react';

// export default function Mapa() {
//   const [coordinates, setCoordinates] = useState(null);
//   const position = [-12.0431800, -77.0282400]

//   console.log('COORDINATES',  coordinates)
//   return (
//     <MapContainer center={position} zoom={13} 
//     onClick={(event) => console.log(event)}
//     scrollWheelZoom={false} style={{ width: '760px', height: '700px' }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         onClick={(event) => console.log(event)}
//       />
//       {coordinates && 
//         <Marker
//         position={[50.5, 30.5]}
//         eventHandlers={{
//           click: () => {
//             console.log('marker clicked')
//           },
//         }}
//       />
//       }
//     </MapContainer>
//   )
// }


{/* <Marker position={position}>
        <Popup>
          {Icons.positioner}
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
// export default function Mapa(){
//   const [coordinates, setCoordinates] = useState(null);
//   return (
//     <MapContainer
//       center={[-12.0431800, -77.0282400]}
//       zoom={13}
//       onClick={(event) => setCoordinates(event.latlng)}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {coordinates && <Marker position={coordinates} />}
//     </MapContainer>
//   );

// }

function MyComponent( {center}) {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return (
    <>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          {Icons.positioner}
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  )
}

export default function Mapa() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent  center={[50.5, 30.5]}/>
    </MapContainer>
  )
}


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
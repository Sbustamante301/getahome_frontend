import { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyCesdsZ0BhHjE1OIrgVSUcixdqTHDj1gZs';

const MyMap = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadScript = async () => {
        try {
            const res = await fetch(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`);
            const script = await res.text();
            const scriptEl = document.createElement('script');
            scriptEl.text = script;
            document.body.appendChild(scriptEl);
            const googleMaps = window.google.maps;
            const map = new googleMaps.Map(document.getElementById('map'), {
                center: { lat: -12.0431800, lng: -77.0282400 },
                zoom: 13
            });
            map.addListener('click', (event) => {
                setCoordinates({ lat: event.latLng.lat(), lng: event.latLng.lng() });
            });
            setMap(map);
        } catch (error) {
            console.log(error);
          }
    }
          loadScript();
  }, []);
 

  return (
    <div>
        <div id="map" style={{ width: '100%', height: '400px' }} />
        {coordinates && <p>Latitude: {coordinates.lat}, Longitude: {coordinates.lng}</p>}
    </div>
  );
}

const MyApp = () => {
  return <MyMap />
}

export default MyApp
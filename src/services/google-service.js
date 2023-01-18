import { API_KEY } from "../config";
export async function getAddressFromCoordinates(lat, lng){
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`);
    const data = await response.json();
    return data;
  }
  






import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function getProperties() {
  const properties = await apiFetch(`properties`);

  return properties;
}

export async function createProperty(newProperty) {
  const property = await apiFetch("properties", {
    body: newProperty
  })
  return property;
}

export async function showProperty(id) {
  const showProperty = await apiFetch(`properties/${id}`);

  return showProperty;
}

export async function deleteProperty(id) {
  await apiFetch("properties", { method: "DELETE" });
}

export async function updateProperty(id, data) {
  await apiFetch(`properties/${id}`, { method: "PATCH", body: data })
}



// INVOLVED_PROPERTIES


export async function getSaved() {
  const savedProperties = await apiFetch(`involved_properties`);
  return savedProperties;
}

export async function getMyProperties() {
  const myProperties = await apiFetch(`my_properties`);
  return myProperties;
}

// export async function updateFavorites(id, data) {
//   console.log('ID API', id)
//   console.log('BODY API', data)
//   await apiFetch(`involved_properties/${id}`, { method: "PATCH", body: data })
// }

export async function createFavorite(newFavorite) {
  console.log('CUERPO', newFavorite)
  const favorites = await apiFetch("involved_properties", {
    body: newFavorite
  })
  return favorites;
}


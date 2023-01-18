import { BASE_URI, tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function getProperties() {
  const properties = await apiFetch(`properties`);

  return properties;
}

// export async function createProperty(newProperty) {
//   const property = await apiFetch("properties", {
//     body: newProperty
//   })
//   return property;
// }
export async function createProperty(newProperty) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}properties`, {
    method: 'POST',
    body: newProperty,
    headers: {
      'Authorization': `Token token=${token}`
    }
  });
  const property = await response.json();
  return property;
}

export async function updateTotalProperty(id, data) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}properties/${id}`, {
    method: 'PATCH',
    body: data,
    headers: {
      'Authorization': `Token token=${token}`
    }
  });
  const property = await response.json();
  return property;
}

export async function showProperty(id) {
  const showProperty = await apiFetch(`properties/${id}`);

  return showProperty;
}

export async function deleteProperty(id) {
  await apiFetch(`properties/${id}`, { method: "DELETE" });
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

export async function getLandlordUser(id) {
  const landlord = await apiFetch(`properties/${id}/user`);
  return landlord;
}

export async function createFavorite(newFavorite) {
  const favorites = await apiFetch("involved_properties", {
    body: newFavorite
  })
  return favorites;
};

export async function updateFavorite(id, data) {
  const newFavorites = await apiFetch(`involved_properties/${id}`, {
    body: data
  })
  return newFavorites;
};

export async function createContacted(newContacted) {
  const contacted = await apiFetch("involved_properties", {
    body: newContacted
  })
  return contacted;
}

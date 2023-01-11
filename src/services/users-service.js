import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function getUser() {
  const { _token, ...user } = await apiFetch("profile");

  return user;
}

export async function createUser(newUser) {
  const { token, ...user } = await apiFetch("signup", { body: newUser });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(data) {
  const { _token, ...user } = await apiFetch("update", {
    body: data,
    method: "PATCH",
  });
  return user;
}


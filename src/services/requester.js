import axios from "axios";

export async function securedRequest (url, verb, payload) {
  let configObject = {
    baseURL: "http://localhost:3000",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  };
  console.debug("axios payload: ", payload)
  if (payload && typeof payload === "object") {
    configObject = Object.assign(configObject, {data: payload})
  }
  if (verb && (verb === "get" || verb === "post" || verb === "delete")) {
    configObject = Object.assign(configObject, {method: verb})
  }
  configObject = Object.assign(configObject, {url})
  console.debug("axios config object ", configObject)
  return axios.request(configObject)
}
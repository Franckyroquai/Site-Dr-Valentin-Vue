import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

export async function securedRequest (url, verb, payload) {
  let configObject = {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  };
  if (payload && typeof payload === "object") {
    configObject = Object.assign(configObject, {data: payload})
  }
  if (verb && (verb === "get" || verb === "post" || verb === "delete")) {
    configObject = Object.assign(configObject, {method: verb})
  }
  configObject = Object.assign(configObject, {url})
  return axios.request(configObject);
}

export async function publicRequest (url, verb, payload) {
  let configObject = {};
  if (payload && typeof payload === "object") {
    configObject = Object.assign(configObject, {data: payload})
  } else if (payload && typeof payload != "object") {
    throw new Error("request payload must be an object")
  }
  if (verb && (verb === "get" || verb === "post" || verb === "delete")) {
    configObject = Object.assign(configObject, {method: verb})
  }
  configObject = Object.assign(configObject, {url})
  return axios.request(configObject);
}
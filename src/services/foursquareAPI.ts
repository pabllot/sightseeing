import axios from "axios";

const TOKEN = "fsq31dqkkrNATxdsBTGfpAJemFZf3v+v4BTz1f6G5V8hkP0=";

export const foursquareAPI = axios.create({
  baseURL: "https://api.foursquare.com/v3",
  headers: {
    ["Authorization"]: TOKEN,
  },
});

import axios from "axios";

import { TOKEN } from "../apikey";

export const foursquareAPI = axios.create({
  baseURL: "https://api.foursquare.com/v3",
  headers: {
    ["Authorization"]: TOKEN,
  },
});

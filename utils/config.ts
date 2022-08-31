export const tokenKey = "xtoken";
import axios from "axios";

export const serviceURL = "https://nouky.xyz/b3";

// Fetcher, mainly for SWR
export const fetcher = (url: string) => {
  return axios(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("xtoken"),
    },
  }).then((data) => data.data);
};

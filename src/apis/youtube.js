import axios from "axios";
const KEY = "AIzaSyB5azph0w6DNfHwF2ursIpJ2TeOm-YxebM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

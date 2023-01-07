import axios from "axios";

const BASE_URI = "https://youtube-v3-alternative.p.rapidapi.com/search";
const options = {
  params: {
    maxResult: "50",
  },
  headers: {
    "X-RapidAPI-Key": "f6049895d7mshab176a5e6b17120p158ad2jsnc6bf4bdc0821",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options);

    return response;
  },
};

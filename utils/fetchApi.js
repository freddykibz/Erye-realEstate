import axios from "axios";
 
export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
 const { data } = await axios.get((url), {
 headers: {
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  'X-RapidAPI-Key': '1e4610be3cmsh51e8b04d97f880ep1b172bjsn50d31a6d02d3'
  }
});
  return data;
}
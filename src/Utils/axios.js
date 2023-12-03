import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'http://localhost:5001/nati-a5548/us-central1/api',
});

export default instance;
    // const response = await axios.get('http://localhost:5001/nati-a5548/us-central1/api');



    
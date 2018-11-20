import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cards-ah.firebaseio.com/'
});

export default instance;

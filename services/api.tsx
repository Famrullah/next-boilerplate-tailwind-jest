import axios from 'axios';

export default axios.create({
  baseURL: 'https://equran.id/api',
  headers: {
    'Content-type': 'application/json',
  },
});

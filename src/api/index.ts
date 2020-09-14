import axios from 'axios';
const baseURL = 'https://cookbook.ack.ee/api/v1/';

export default axios.create({
    baseURL,
    headers: {
        //'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json'
    },

});

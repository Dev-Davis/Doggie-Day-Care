import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.doggieKeys.databaseURL;

const getDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((res) => {
      const dogs = [];
      Object.keys[res.data].forEach((dogKey) => {
        res.data[dogKey].iud = dogKey;
        dogs.push(res.data[dogKey]);
      });
      resolve(dogs);
    })
    .catch(err => reject(err));
});

export default { getDogs };

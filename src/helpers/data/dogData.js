import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((res) => {
      const dogs = [];
      Object.keys(res.data).forEach((baseKey) => {
        res.data[baseKey].id = baseKey;
        dogs.push(res.data[baseKey]);
      });
      resolve(dogs);
    })
    .catch(err => reject(err));
});

export default { getDogs };

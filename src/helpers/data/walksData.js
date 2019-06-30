import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((res) => {
      const walks = [];
      Object.keys(res.data).forEach((walkKey) => {
        res.data[walkKey].id = walkKey;
        walks.push(res.data[walkKey]);
      });
      resolve(walks);
    })
    .catch(err => reject(err));
});

const deleteWalks = walkId => axios.delete(`${baseUrl}/walks/${walkId}.jjson`);

export default { getWalks, deleteWalks };

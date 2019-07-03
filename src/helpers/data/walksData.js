import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalks = uid => new Promise((resolve, reject) => {
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

const deleteWalk = walkId => axios.delete(`${baseUrl}/walks/${walkId}.json`);
const createWalk = walkObject => axios.post(`${baseUrl}/walks.json`, walkObject);

export default { getWalks, deleteWalk, createWalk };

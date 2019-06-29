import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWorkers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workers.json`)
    .then((res) => {
      const workers = [];
      Object.keys(res.data).forEach((workerKey) => {
        res.data[workerKey].id = workerKey;
        workers.push(res.data[workerKey]);
      });
      resolve(workers);
    })
    .catch(err => reject(err));
});

export default { getWorkers };

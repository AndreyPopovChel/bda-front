import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://gsmtrek.herokuapp.com/api';
//const API_ROOT = 'http://localhost:3000/api';

const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {
    //authStore.logout();
  }
  return err;
};

const responseBody = res => res.body;



const tokenPlugin = req => {
  //if (commonStore.token) {
  //  req.set('authorization', `Token ${commonStore.token}`);
  //}
};

const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
};

const Locations = {
  getLast: () => requests.get('/lastLocations')
};


export default {
  Locations
};

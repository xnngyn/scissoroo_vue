import axios from 'axios';


const url_reg = 'http://localhost:5000/register';
const url_res = 'http://localhost:5000/results';
const url_login = 'http://localhost:5000/login';
const url_logout = 'http://localhost:5000/logout';

export default {
  fetchResults () {
    return axios.get(url_res)
  },

  addUser(params){
    return axios.post(url_reg, params)
  },

  login(params){
    return axios.post(url_login, params)
  },

  logout(params){
    return axios.get(url_logout, params)
  }
}
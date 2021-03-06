import axios from 'axios';


const url_reg = 'http://localhost:5000/register';
const url_res = 'http://localhost:5000/results';
const url_login = 'http://localhost:5000/login';
const url_logout = 'http://localhost:5000/logout';
const url_detail = 'http://localhost:5000/detail/';


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

  logout(){
    return axios.get(url_logout)
  },

  findFriseur(params){
    return axios.get(url_detail + params.id
    )}

}
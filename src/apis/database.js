import axios from 'axios';

export default axios.create({
  baseURL: 'https://sqladmin.googleapis.com/sql/v1beta4/'
})
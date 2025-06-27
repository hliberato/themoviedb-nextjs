import { environment } from '@/environment/environment';
import axios from 'axios';

const http = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    Authorization: environment.authorization,
    accept: 'application/json',
  },
});

export default http;

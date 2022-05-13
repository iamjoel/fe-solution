import axios from 'axios'
import { API_PREFIX } from '@/config'
const http = axios.create({
  baseURL: API_PREFIX
})
export default http

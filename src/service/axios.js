import axios from 'axios'
import {apiPoint, localApiPoint} from '@/constants'
import {getItem} from '@/helpers/persistaneStorage'


axios.defaults.baseURL = apiPoint;

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : ''
    config.headers.Authorization = authorization
    config.headers.Accept = 'application/json'
    config.headers['Content-Type'] = 'application/json'
    return config
})
export default axios;
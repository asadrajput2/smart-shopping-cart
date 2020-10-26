import axios from 'axios'

const api = axios.create({
    baseURL= 'http://localhost:8000/api/',
    timeout = 5000,
    headers = {
        "Authorization": "JWT " + localStorage.getItem('access_token'),
        "Content-Type": "application/json",
        "accept": "application/json"
    }
})

export default api;
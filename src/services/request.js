import axios from 'axios'

const baseURL = process.env.VUE_APP_END_POINT
const headers = { 'Content-Type': 'application/json' }

const instance = axios.create({ baseURL, headers })

export default instance

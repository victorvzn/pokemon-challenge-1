import request from '@/services/request'

export default {
  fetchAll (payload = { offset: 0, limit: 1118 }) {
    const url = `pokemon?offset=${payload.offset}&limit=${payload.limit}`
    return request({ method: 'GET', url })
  },
  getByName (payload) {
    const url = `pokemon/${payload}`
    return request({ method: 'GET', url })
  }
}

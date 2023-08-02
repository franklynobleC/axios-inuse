import axios from 'axios'

const authFetch = axios.create({
  baseURL: 'https://course-api.com'
})

authFetch.interceptors.request.use(
  request => {
    request.headers.common['Accept'] = 'application/json'
    console.log('request sent')
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

authFetch.interceptors.response.use(
  response => {
    console.log('Got Response')
    return response
  },
  error => {
    if (error.response.status === 404) {
      //write logic
      console.log('NOT FOUND --------------------')
    }
    return Promise.reject(error)
  }
)

export default authFetch

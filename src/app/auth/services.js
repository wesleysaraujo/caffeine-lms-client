import axios from '@/http'

export const postLogin = (email, password) => {
  return axios.get('https://uinames.com/api/?ext')
    .then(response => response.data)
}

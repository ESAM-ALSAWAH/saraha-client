import axios from 'axios'

export const Register = (data) =>
  axios.post(process.env.REACT_APP_API_REGISTER, data).then((res) => res.data)

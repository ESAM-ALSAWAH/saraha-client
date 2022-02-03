import axios from 'axios'
import { setUser } from '../auth'
export const Login = (data) =>
  axios
    .post(process.env.REACT_APP_API_LOGIN, data)
    .then((res) => res.data)
    .then(({ data }) => {
      if (!!data) setUser(data)
      return !!data
    })

import axios from 'axios'

export const createMessage = (data) =>
  axios.post(process.env.REACT_APP_API_CREATEMESSAGE, data)

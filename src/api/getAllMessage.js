import axios from 'axios'

export const getAllMessage = async (UserId) =>
  await axios.get(`${process.env.REACT_APP_API_GETALLMESSAGE}/${UserId}`)

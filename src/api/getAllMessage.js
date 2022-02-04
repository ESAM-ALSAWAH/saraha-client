import axios from 'axios'
import { IsUser } from '../auth'
const config = {
  headers: {
    Authorization: IsUser,
  },
}
export const getAllMessage = async () =>
  await axios.get(process.env.REACT_APP_API_GETALLMESSAGE, config)

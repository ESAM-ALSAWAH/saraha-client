import axios from 'axios'

export const deleteMessage = async (id) =>
  await axios.delete(`${process.env.REACT_APP_API_DELETEMESSAGE}/${id}`)

import jwt_decode from 'jwt-decode'
export const IsUser = localStorage.getItem('IsUser')

export const setUser = (value) =>
  localStorage.setItem('IsUser', JSON.stringify(value))

export const deleteUser = () => localStorage.removeItem('IsUser')

export const getUserID = () => {
  const token = JSON.parse(IsUser)
  const decode = jwt_decode(token)
  return decode.id
}

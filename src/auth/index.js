export const IsUser = localStorage.getItem('IsUser')

export const setUser = (value) =>
  localStorage.setItem('IsUser', JSON.stringify(value))

export const deleteUser = () => localStorage.removeItem('IsUser')

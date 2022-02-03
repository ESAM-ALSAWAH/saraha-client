import { Navigate, Outlet } from 'react-router-dom'
import { IsUser } from '../auth'
export const PrivateRoute = () => {
  return !!IsUser ? <Outlet /> : <Navigate to="/signin" />
}
export const HomeRoute = () => {
  return !IsUser ? <Outlet /> : <Navigate to="/" />
}

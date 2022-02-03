import React from 'react'
import { Login, Register, Home, User } from './pages'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute, HomeRoute } from './guard'
const App = () => {
  return (
    <Routes>
      <Route path="/user/:id" element={<User />} />
      <Route path="/*" element={<HomeRoute />}>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="*" element={<h1>not found page</h1>} />
      </Route>
      <Route path="/*" element={<PrivateRoute />}>
        <Route index element={<Home />} />
        <Route path="*" element={<h1>not found page</h1>} />
      </Route>
    </Routes>
  )
}

export default App

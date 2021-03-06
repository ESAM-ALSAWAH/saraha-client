import React, { useState } from 'react'
import classes from './Navbar.module.scss'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { deleteUser, getUserID, IsUser } from '../../auth'

const LinksGuest = () => (
  <div className={classes.wrapper}>
    <Link to="/signup">Signup</Link>
    <Link to="/signin">SignIn</Link>
  </div>
)

const LinksUser = ({ _id, set_id }) => (
  <div className={classes.wrapper}>
    <Link to={`/user/${_id}`}>
      <box-icon name="user-circle"></box-icon>
      <span>Link your page</span>
    </Link>
    <Link to="/">
      <box-icon type="solid" name="message-dots"></box-icon>
      <span>Your message</span>
    </Link>
    <Link to="/">
      <box-icon
        name="log-out"
        onClick={() => {
          deleteUser()
          set_id((prev) => false)
          window.location.reload()
        }}
      ></box-icon>
      <span
        onClick={() => {
          deleteUser()
          set_id((prev) => false)
          window.location.reload()
        }}
      >
        Logout
      </span>
    </Link>
  </div>
)
export const Navbar = () => {
  const [_id, set_id] = useState(() => {
    if (IsUser) return getUserID()
    else return false
  })

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img src={logo} alt="saraha" width="30" />
          <h5>saraha</h5>
        </div>
        {_id !== false ? (
          <LinksUser _id={_id} set_id={set_id} />
        ) : (
          <LinksGuest />
        )}
      </div>
    </nav>
  )
}

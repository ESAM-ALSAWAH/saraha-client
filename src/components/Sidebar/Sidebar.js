import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMessage } from '../../hooks'
import classes from './Sidebar.module.scss'
const Avatar = ({ username }) => (
  <div className={classes.avatar}>{`${username[0]}${username[1]}`}</div>
)
export const Sidebar = (props) => {
  const { data: dataUser } = props
  const { data: dataMesage, isLoading } = useMessage(dataUser._id)

  if (isLoading) return <p>loading...</p>
  return (
    <div className={classes.sidebar}>
      <Avatar username={dataUser.name} />
      <p>username : {dataUser.name}</p>
      <p>Message : {dataMesage.length}</p>

      <Link to={`/user/${dataUser._id}`}>
        {process.env.USER_LINK}user/{dataUser._id}
      </Link>
    </div>
  )
}

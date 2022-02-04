import React from 'react'
import jwt_decode from 'jwt-decode'
import { Navbar, Sidebar, Messages } from '../../components'
import { useUser } from '../../hooks'
import { getUserID } from '../../auth'

export const Home = () => {
  const { data, isLoading } = useUser(getUserID())

  if (isLoading) return <p>loading please ...</p>
  return (
    <div>
      <Navbar />
      <main
        className="container"
        style={{ display: 'flex ', gap: '50px', marginBlock: '2rem' }}
      >
        <Sidebar data={data} />
        <Messages />
      </main>
    </div>
  )
}

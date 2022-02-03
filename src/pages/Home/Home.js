import React from 'react'
import { Navbar, Sidebar, Messages } from '../../components'
import { useUser } from '../../hooks'
import { IsUser } from '../../auth'

const { _id } = !!IsUser && JSON.parse(IsUser)
export const Home = () => {
  const { data, isLoading } = useUser(_id)

  if (isLoading) return <p>loading please ...</p>
  return (
    <div>
      <Navbar />
      <main
        className="container"
        style={{ display: 'flex ', gap: '50px', marginBlock: '2rem' }}
      >
        <Sidebar data={data} />
        <Messages id={data._id} />
      </main>
    </div>
  )
}

import React, { useState } from 'react'
import ReactiveButton from 'reactive-button'
import classes from './User.module.scss'
import { Navbar } from '../../components'
import { useParams } from 'react-router-dom'
import { useUser } from '../../hooks'
import { createMessage } from '../../api'
const Avatar = ({ username }) => (
  <div className={classes.avatar}>{`${username[0]}${username[1]}`}</div>
)
export const User = () => {
  const { id } = useParams()
  const { data, isLoading } = useUser(id)
  const [value, setValue] = useState('')
  const [IsSent, setIsSent] = useState(false)
  const handleSubmit = async () => {
    if (value.trim() === '') return
    const message = {
      description: value,
      userID: id,
    }
    await createMessage(message).then((res) => setIsSent((prev) => true))
    setValue('')
  }
  if (isLoading) return <p>loading ....</p>
  return (
    <div>
      <Navbar />
      <div className={classes.messageContainer}>
        {!!data && (
          <>
            <Avatar username={data.name} />
            <p className={classes.name}>{data.name}</p>
            {!IsSent ? (
              <>
                <span
                  style={{
                    color: '#48f',
                    display: 'block',
                    marginBlock: '1rem',
                  }}
                >
                  Make your message constructive :)
                </span>
                <textarea
                  className={classes.textarea}
                  dir="auto"
                  value={value}
                  onChange={(e) => setValue((prev) => e.target.value)}
                ></textarea>
                <ReactiveButton
                  idleText="send"
                  className={classes.button}
                  onClick={handleSubmit}
                />
              </>
            ) : (
              <span
                style={{
                  color: '#48f',
                  display: 'block',
                  marginBlock: '1rem',
                }}
              >
                Message has been sent :)
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

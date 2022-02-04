import React from 'react'
import classes from './Messages.module.scss'
import { useMessage } from '../../hooks'
import { useDeleteMessage } from '../../hooks'
import { getUserID } from '../../auth'
export const Messages = () => {
  const { data: dataMesage, isLoading } = useMessage(getUserID())
  const deleteMessage = useDeleteMessage()
  const onDelete = (messageID) => {
    deleteMessage.mutate(messageID)
  }
  if (isLoading) return <p>loading please ...</p>
  return (
    <div className={classes.messagesContainer}>
      <div className={classes.messageHeader}>
        Messages <box-icon type="solid" name="message-dots"></box-icon>
      </div>
      <div className={classes.messagesBox}>
        {dataMesage.map((message, index) => (
          <div className={classes.message} key={index}>
            <box-icon type="solid" name="user"></box-icon>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className={classes.description}>{message.description}</span>
              <span className={classes.date}>{message.date}</span>
            </div>
            <box-icon
              type="solid"
              name="x-circle"
              style={{
                position: 'absolute',
                right: '10px',
                top: '16px',
                fill: 'red',
                cursor: 'pointer',
              }}
              onClick={(e) => onDelete(message._id)}
            ></box-icon>
          </div>
        ))}
      </div>
    </div>
  )
}

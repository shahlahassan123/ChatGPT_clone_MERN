import React from 'react'

const Feed = ({currentChat}) => {
  return (
    <ul className="feed">
        
          {currentChat?.map((chat,index)=>{
            return(
              <li key={index}>
              <p className="role">{chat.role}</p>
              <p>{chat.content}</p>
            </li>
            )
          })
          }

        </ul>
  )
}

export default Feed

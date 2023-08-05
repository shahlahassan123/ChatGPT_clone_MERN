import React from 'react'

const SideBar = ({createNewChat,uniqueTitles, handleClick}) => {
  return (
    <section className="sidebar">
        <button onClick={createNewChat}>+ New Chat</button>
        <ul className="history">
       
          { uniqueTitles?.map((title,index)=>{
            return (<li key={index} onClick={()=>handleClick(title)}>{title}</li>)
          })}
         
        </ul>
        <nav>
          <p>Made By Shahla</p>
        </nav>
      </section>
  )
}

export default SideBar

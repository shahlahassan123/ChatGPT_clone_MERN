import React, {useRef} from 'react'
import Bottom from './Bottom'
import Examples from './Examples'
import Feed from './Feed'

const Main = ({currentTitle, currentChat,value,setValue, handleKeyPress, getMessages, inputRef}) => {
   
  return (
    <section className='main'>
        {!currentTitle && <h1>ChatGPT</h1>}
       {currentTitle ?  <Feed currentChat={currentChat} /> :<Examples /> }
        <Bottom value={value} setValue={setValue} handleKeyPress={handleKeyPress} getMessages={getMessages} 
        inputRef={inputRef} />

      </section>
  )
}

export default Main

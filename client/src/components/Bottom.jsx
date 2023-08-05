import React from 'react'

const Bottom = ({value,setValue,handleKeyPress,getMessages, inputRef}) => {
  return (
    <div className="bottomSection">
    <div className="inputContainer">
      <input type="text" value={value} onChange= {e=>setValue(e.target.value)} onKeyPress={(e)=>handleKeyPress(e)}
      ref={inputRef}/>
      <div id="submit" onClick={getMessages}>➢</div>
    </div>
    <div className="info">
      <p>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT July 20 Version</p>
    </div>
  </div>
  )
}

export default Bottom

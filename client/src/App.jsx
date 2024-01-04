import { useEffect, useState , useRef} from "react"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  const [value,setValue] = useState("")
  const [message,setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)
  const [userMessage, setUserMessage] = useState('')

  const inputRef = useRef(null)

  const createNewChat = () =>{
    setValue('')
    setCurrentTitle(null)
    setMessage(null)
    inputRef.current.focus() 
  }

  /***
   * Fetching messages from the api
   */
  // const getMessages = async() =>{
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       model: "gpt-3.5-turbo",
  //       messages: [{ role: "user", content: value }], 
  //       max_tokens: 100,
  //     }),
  //     headers : {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   const response = await fetch("http://localhost:9000/completions", options)
  //   const data = await response.json()
  //   setMessage(data.choices[0].message.content)
  //   setUserMessage(value)
  //   setValue('')


  // }

  const getMessages = async () => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: value }], 
          max_tokens: 100,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      const response = await fetch("http://localhost:9000/completions", options);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data)
      setMessage(data.choices[0].message.content);
      setUserMessage(value);
      setValue('');
    } catch (error) {
      console.error("Error fetching messages:", error);
      // Handle the error, e.g., show a user-friendly error message
    }
  }
  
  
  useEffect(()=>{
 
      if(!currentTitle && userMessage && message){

      setCurrentTitle(userMessage)
    }
  
      if(currentTitle && userMessage && message){
      setPreviousChats(prev=>[
        ...prev,
        {
          title: currentTitle,
          role: "User",
          content : userMessage
        },
        {
          title: currentTitle,
          role: "AI",
          content: message
        },

      ])
    }

  },[currentTitle, message])




  const currentChat = previousChats.filter(prev=>prev.title === currentTitle)

  const uniqueTitles = Array.from(new Set(previousChats.map((prev)=>prev.title)))
 

  const handleClick = (title)=>{
    setCurrentTitle(title)
    setValue('')
    setMessage(null)
    
  }
 
 //On pressing 'Enter' Key
  const handleKeyPress = e =>{
    if(e.key ==='Enter'){
      getMessages()
    }
  }

  return (
    <div className="app">
     <SideBar createNewChat={createNewChat} uniqueTitles={uniqueTitles} handleClick={handleClick} />
      <Main currentTitle={currentTitle} currentChat={currentChat} 
      value={value} setValue={setValue} handleKeyPress={handleKeyPress} getMessages={getMessages}
      inputRef={inputRef} />
    </div>
  )
}

export default App



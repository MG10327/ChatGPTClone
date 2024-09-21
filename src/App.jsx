import './App.scss'
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImageLogo from './assets/chatgptLogo.svg'
import React, {useContext} from 'react'
import {Context} from './context/context'

const App = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">

          <div className="upperSideTop">
            <img className="logo" src={gptLogo} alt="Logo" />
            <span className="brand">ChatGPT</span>
          </div>

          <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>

          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How do you use an API?</button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
        </div>
    </div>

    <div className="main">


      <div className="chats">
        <div className="chat">
          <img src={userIcon} alt="" className="userImage" />
          <p className="txt">{recentPrompt}</p>
        </div>
        <div className="chat bot">
          <img src={gptImageLogo} alt="" />
          {loading ? <div className="loader">
            <hr />
            <hr />
            <hr />
          </div>
          : <p className="txt" dangerouslySetInnerHTML={{__html:resultData}} />}

        </div>
      </div>

      <div className="chatFooter">
        <div className="inp">
          <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Send a message..." /><button className="send" ><img onClick={()=>onSent()} src={sendBtn} alt="Send" /></button>
        </div>
        <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 version </p>

      </div>

    </div>
  </div>
  )
}

export default App
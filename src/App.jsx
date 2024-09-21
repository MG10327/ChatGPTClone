import './App.scss'
import {assets} from './assets/assets'

const App = () => {


  return (
    <div className="App">
      {/* <div className="sidebar">
        <div className="upperSide">

          <div className="upperSideTop">
            <img className="logo" src= alt="Logo" />
            <span className="brand">ChatGPT</span>
          </div>

          <button className="midBtn"><img src= alt="" className="addBtn" />New Chat</button>

          <div className="upperSideBottom">
            <button className="query"><img src= alt="Query" />What is Programming?</button>
            <button className="query"><img src= alt="Query" />How do you use an API?</button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems"><img src= alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src= alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src= alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
        </div>
    </div> */}

    <div className="main">

      <div className="nav">
        <p>Gemini</p>
        <img className="user-icon" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <p><span>Hello, Dev.</span></p>
        <p>How can I help you today?</p>
      </div>
        <div className="cards">
          <div className="card">
            <p>Suggets beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
    </div>
  </div>
  )
}

export default App
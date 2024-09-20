import './App.scss'
import gptLogo from './assets/chatgpt.svg'

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">

          <div className="upperSideTop">
            <img className="logo" src={gptLogo} alt="Logo" />
            <span className="brand">ChatGPT</span>
          </div>

          <button className="midBtn"><img src="" alt="" className="addBtn" />New Chat</button>

          <div className="upperSideBottom">
            <button className="query"><img src="" alt="" />What is Programming?</button>
            <button className="query"><img src="" alt="" />What is Programming?</button>
          </div>
        </div>

        <div className="lowerSide">

        </div>
    </div>

    <div className="main">

    </div>
  </div>
  )
}

export default App
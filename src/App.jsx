import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './components/sidebar/sidebar'
import { Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleDisplaySidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div>
        {showSidebar && <SideBar />}
        <button className='sidebar-btn' onClick={toggleDisplaySidebar}>☰</button>
        <div className='navbar'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/episodes">Episodes</a>
          <a href="/characters">Characters</a>
        </div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

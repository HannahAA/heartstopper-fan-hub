import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import EpisodesPage from './pages/EpisodesPage/EpisodesPage'
import CharactersPage from './pages/CharactersPage/CharactersPage'
import './App.css'
import Navbar from './components/navbar/navbar'
import SideBar from './components/sidebar/sidebar'
import { useState } from 'react'

function App() {

  const [showSidebar, setShowSidebar] = useState(false)
    
  const toggleDisplaySidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
    {showSidebar && <SideBar />}
    <button className='sidebar-btn' onClick={toggleDisplaySidebar}>☰</button>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/characters" element={<CharactersPage />} />
    </Routes>
    </>
  )
}

export default App

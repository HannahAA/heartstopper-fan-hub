import { Route, Routes } from 'react-router-dom'
import HomePage from './features/home/HomePage'
import AboutPage from './features/about/AboutPage'
import ContactPage from './features/contact/ContactPage'
import EpisodesPage from './features/episodes/EpisodesPage'
import CharactersPage from './features/characters/CharactersPage'
import './App.css'
import Navbar from './components/navbar/navbar'
import SideBar from './components/sidebar/sidebar'
import { useState } from 'react'
import Layout from './layouts/layout'

function App() {

  const [showSidebar, setShowSidebar] = useState(false)
    
  const toggleDisplaySidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
    {showSidebar && <SideBar />}
    <button className='sidebar-btn' onClick={toggleDisplaySidebar}>☰</button>
    {/* <Navbar /> */}
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './styles/global.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import MenuDinner from './pages/MenuDinner'
import MenuLunch from './pages/MenuLunch'
import Bar from './pages/Bar'
import Visit from './pages/Visit'
import Catering from './pages/Catering'
import Reservations from './pages/Reservations'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/menu"       element={<MenuDinner />} />
        <Route path="/menu/lunch" element={<MenuLunch />} />
        <Route path="/bar"        element={<Bar />} />
        <Route path="/visit"      element={<Visit />} />
        <Route path="/catering"      element={<Catering />} />
        <Route path="/reservations"  element={<Reservations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

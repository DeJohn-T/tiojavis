import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}${open ? ' nav--open' : ''}`}>
        <Link to="/" className="nav-wordmark" onClick={close}>
          <img src="/logo.png" alt="Tío Javi's" className="nav-logo" />
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/bar">Bar</NavLink></li>
          <li><NavLink to="/visit">Visit</NavLink></li>
          <li><NavLink to="/catering">Catering</NavLink></li>
        </ul>

        <div className="nav-right">
          <a href="tel:2259240377" className="nav-phone">225-924-0377</a>
          <NavLink to="/reservations" className="nav-reserve alfa" onClick={close}>Reserve</NavLink>
          <button
            className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-mobile${open ? ' nav-mobile--open' : ''}`}>
        <ul className="nav-mobile-links">
          <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
          <li><NavLink to="/menu" onClick={close}>Menu</NavLink></li>
          <li><NavLink to="/bar" onClick={close}>Bar</NavLink></li>
          <li><NavLink to="/visit" onClick={close}>Visit</NavLink></li>
          <li><NavLink to="/catering" onClick={close}>Catering</NavLink></li>
          <li><NavLink to="/reservations" onClick={close}>Reservations</NavLink></li>
        </ul>
        <div className="nav-mobile-bottom">
          <a href="tel:2259240377" className="nav-mobile-phone cormorant">225-924-0377</a>
          <p className="nav-mobile-address">4738 Constitution Ave · Baton Rouge, LA</p>
        </div>
      </div>
    </>
  )
}

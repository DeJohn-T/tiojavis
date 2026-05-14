import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col footer-brand-col">
          <div className="footer-wordmark alfa">Tío <span>Javi's</span></div>
          <p className="footer-sub">Mexican Grill · Baton Rouge, LA</p>
          <p className="footer-established">Formerly Ninfas · Still the same soul.</p>
        </div>
        <div className="footer-col">
          <span className="footer-col-head">Menu</span>
          <ul className="footer-links">
            <li><Link to="/menu">Dinner</Link></li>
            <li><Link to="/menu/lunch">Lunch</Link></li>
            <li><Link to="/bar">Bar</Link></li>
            <li><Link to="/catering">Catering</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="footer-col-head">Visit</span>
          <ul className="footer-links">
            <li><Link to="/visit">Hours</Link></li>
            <li><a href="https://maps.google.com" target="_blank" rel="noreferrer">Directions</a></li>
            <li><a href="tel:2259240377">225-924-0377</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="footer-col-head">Follow</span>
          <ul className="footer-links">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Tío Javi's Mexican Grill · All rights reserved</p>
        <p>Design by <span>Deej</span></p>
      </div>
    </footer>
  )
}

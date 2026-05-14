import { Link } from 'react-router-dom'
import './Visit.css'

const HOURS = [
  { day: 'Monday',    time: 'Closed',       closed: true },
  { day: 'Tuesday',   time: '11am – 9pm' },
  { day: 'Wednesday', time: '11am – 9pm' },
  { day: 'Thursday',  time: '11am – 9pm' },
  { day: 'Friday',    time: '11am – 10pm' },
  { day: 'Saturday',  time: '11am – 10pm' },
  { day: 'Sunday',    time: '11am – 9pm' },
]

export default function Visit() {
  return (
    <main className="visit-page">

      {/* ── HERO ── */}
      <div className="visit-page-hero">
        <div className="visit-hero-text">
          <span className="visit-hero-kicker">4738 Constitution Ave · Baton Rouge, LA</span>
          <h1 className="visit-page-title cormorant">Come<br /><em>Find Us.</em></h1>
          <p className="visit-page-sub">Walk-ins always welcome. Parties of 6+, give us a call.</p>
        </div>
        <div className="visit-hero-photo">
          <img src="/dining-room.webp" alt="Tío Javi's dining room" />
        </div>
      </div>

      {/* ── INFO GRID ── */}
      <div className="visit-grid">
        <div className="visit-block">
          <span className="visit-block-label">Hours</span>
          <div className="vhours-list">
            {HOURS.map(({ day, time, closed }) => (
              <div className="vhour-row" key={day}>
                <span className="vhour-day">{day}</span>
                <span className={`vhour-time${closed ? ' closed' : ''}`}>{time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="visit-block">
          <span className="visit-block-label">Contact</span>
          <a href="tel:2259240377" className="visit-big-phone cormorant">225-924-0377</a>
          <p className="visit-block-body">
            For parties of 6 or more, please call ahead.<br />
            Walk-ins are always welcome for smaller groups.
          </p>
          <div className="visit-happy-hour">
            <span className="visit-hh-label">Happy Hour</span>
            <p>Mon – Thu · 4 – 7pm</p>
            <p>Fri · 12 – 7pm</p>
            <p>½ off house &amp; to-go margaritas · $3.50 bottled beer</p>
          </div>
        </div>

        <div className="visit-block">
          <span className="visit-block-label">Find Us</span>
          <p className="visit-block-address cormorant">
            4738<br />Constitution<br />Ave
          </p>
          <a
            href="https://maps.google.com/?q=4738+Constitution+Ave+Baton+Rouge+LA"
            className="visit-map-link"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps →
          </a>
        </div>
      </div>

      {/* ── RESERVATIONS CTA ── */}
      <section className="visit-reserve" id="reserve">
        <div className="visit-reserve-cta-inner">
          <div className="visit-reserve-left">
            <span className="visit-reserve-eyebrow">Plan Ahead</span>
            <h2 className="visit-reserve-title cormorant">
              Reserve<br /><em>a Table.</em>
            </h2>
            <p className="visit-reserve-body">
              Book a table instantly through OpenTable, or give us a call. Walk-ins always welcome.
            </p>
          </div>
          <div className="visit-reserve-actions">
            <Link to="/reservations" className="visit-ot-btn alfa">Book on OpenTable</Link>
            <a href="tel:2259240377" className="visit-call-btn cormorant">225-924-0377</a>
            <span className="visit-reserve-note">Quickest way to book</span>
          </div>
        </div>
      </section>

    </main>
  )
}


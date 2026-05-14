import './Reservations.css'

const OT_BOOKING_URL =
  'https://www.opentable.com/restref/client/?rid=995206&restref=995206&lang=en-US'

export default function Reservations() {
  return (
    <main className="resv-page">

      {/* ── HERO ── */}
      <section className="resv-hero">
        <div className="resv-hero-bg">
          <img src="/dining-room.webp" alt="" aria-hidden="true" />
        </div>
        <div className="resv-hero-inner">
          <span className="resv-eyebrow">Tío Javi's Mexican Grill</span>
          <h1 className="resv-title cormorant">
            Reserve<br /><em>Your Table.</em>
          </h1>
          <p className="resv-subtitle">
            Walk-ins always welcome · Parties of 6+ please call ahead
          </p>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section className="resv-cta-section">
        <div className="resv-cta-inner">
          <div className="resv-cta-text">
            <span className="resv-cta-kicker">Book Instantly</span>
            <h2 className="resv-cta-title cormorant">
              We're on<br /><em>OpenTable.</em>
            </h2>
            <p className="resv-cta-body">
              Select your date, time, and party size. Booking takes under a minute. Walk-ins are always welcome too — just come on in.
            </p>
          </div>
          <div className="resv-cta-actions">
            <a
              href={OT_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="resv-ot-btn alfa"
            >
              Book on OpenTable
            </a>
            <div className="resv-cta-divider">
              <span>or</span>
            </div>
            <a href="tel:2259240377" className="resv-call cormorant">225-924-0377</a>
            <span className="resv-call-note">Call to reserve · quickest option for large parties</span>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="resv-info">
        <div className="resv-info-block">
          <span className="resv-info-label">Location</span>
          <p>4738 Constitution Ave<br />Baton Rouge, LA 70808</p>
          <a
            href="https://maps.google.com/?q=4738+Constitution+Ave+Baton+Rouge+LA"
            className="resv-map-link"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions →
          </a>
        </div>
        <div className="resv-info-block">
          <span className="resv-info-label">Hours</span>
          {[
            { day: 'Monday',    time: 'Closed',       closed: true },
            { day: 'Tuesday',   time: '11am – 9pm' },
            { day: 'Wednesday', time: '11am – 9pm' },
            { day: 'Thursday',  time: '11am – 9pm' },
            { day: 'Friday',    time: '11am – 10pm' },
            { day: 'Saturday',  time: '11am – 10pm' },
            { day: 'Sunday',    time: '11am – 9pm' },
          ].map(({ day, time, closed }) => (
            <div className="resv-hour-row" key={day}>
              <span>{day}</span>
              <span className={closed ? 'closed' : ''}>{time}</span>
            </div>
          ))}
        </div>
        <div className="resv-info-block">
          <span className="resv-info-label">Happy Hour</span>
          <div className="resv-hh-split">
            <div>
              <p className="resv-hh-time cormorant">4 – 7 <em>pm</em></p>
              <p className="resv-hh-days">Mon – Thu</p>
            </div>
            <div>
              <p className="resv-hh-time cormorant">12 – 7 <em>pm</em></p>
              <p className="resv-hh-days">Friday</p>
            </div>
          </div>
          <div className="resv-hh-deals">
            <div className="resv-hh-deal">
              <span className="resv-hh-price cormorant">½ off</span>
              <span>House Margaritas</span>
            </div>
            <div className="resv-hh-deal">
              <span className="resv-hh-price cormorant">$3.50</span>
              <span>Bottled Beer</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

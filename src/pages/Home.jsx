import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Home.css'

const HOURS = [
  { day: 'Monday',    time: 'Closed',       closed: true },
  { day: 'Tuesday',   time: '11am – 9pm' },
  { day: 'Wednesday', time: '11am – 9pm' },
  { day: 'Thursday',  time: '11am – 9pm' },
  { day: 'Friday',    time: '11am – 10pm' },
  { day: 'Saturday',  time: '11am – 10pm' },
  { day: 'Sunday',    time: '11am – 9pm' },
]

export default function Home() {
  useEffect(() => {
    let ticking = false
    const heroBg = document.querySelector('.h-hero-bg img')

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (heroBg) heroBg.style.transform = `translateY(${y * 0.28}px)`

        const photoEl = document.querySelector('.h-photo-full')
        const photoImg = photoEl?.querySelector('img')
        if (photoEl && photoImg) {
          const rect = photoEl.getBoundingClientRect()
          const center = rect.top + rect.height / 2 - window.innerHeight / 2
          photoImg.style.transform = `translateY(${center * -0.12}px)`
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view')
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="h-hero">
        <div className="h-hero-bg">
          <img src="/hero.jpg" alt="Tío Javi's" />
        </div>
        <div className="h-hero-inner">
          <div className="h-hero-top">
            <span className="h-hero-pill">Mexican Grill · Baton Rouge, LA</span>
          </div>
          <div className="h-hero-bottom">
            <h1 className="h-hero-name cormorant">
              Tío<br /><em>Javi's.</em>
            </h1>
            <div className="h-hero-cta-block">
              <Link to="/menu" className="h-hero-cta alfa">View Menu</Link>
              <Link to="/visit" className="h-hero-cta-ghost">Hours &amp; Location</Link>
              <span className="h-hero-note">Open Tue – Sun from 11am</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="h-ticker" aria-hidden="true">
        <div className="h-ticker-track">
          {Array(3).fill(null).map((_, i) => (
            <span key={i}>
              ENCHILADAS · FAJITAS · SHRIMP GABRIEL · MARGARITAS · TACOS AL PASTOR · COCHINITA PIBIL · GUACAMOLE TABLESIDE · 20+ COCKTAILS · TEQUILA PROGRAM ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── INTRO SPLIT ── */}
      <div className="h-intro reveal">
        <div className="h-intro-left">
          <span className="h-intro-kicker">Since day one</span>
          <h2 className="h-intro-headline cormorant">
            The kind of place<br />you <em>come back to.</em>
          </h2>
          <p className="h-intro-body">
            We've been feeding Baton Rouge for a long time. The recipes have grown but the feeling hasn't. Come in, sit down, and let us take care of you.
          </p>
          <Link to="/menu" className="h-intro-link alfa">Explore the Menus →</Link>
        </div>
        <div className="h-intro-right">
          <img src="/bar-wide.jpg" alt="Tío Javi's bar and dining room" />
          <div className="h-intro-float-label">
            <span>4738 Constitution Ave</span>
            <span>Baton Rouge, Louisiana</span>
          </div>
        </div>
      </div>

      {/* ── FULL-BLEED FOOD PHOTO ── */}
      <div className="h-photo-full reveal">
        <img src="/enchiladas.webp" alt="Enchiladas at Tío Javi's" />
        <div className="h-photo-full-label">
          <span className="h-photo-full-dish cormorant">Enchiladas Verdes.</span>
        </div>
      </div>

      {/* ── MENUS: editorial hover rows ── */}
      <section className="h-menus">
        <div className="h-menus-header reveal">
          <span className="h-menus-kicker">What We're Serving</span>
          <h2 className="cormorant h-menus-title">The Menus.</h2>
        </div>
        <div className="h-menus-list">
          <Link to="/menu/lunch" className="h-menu-row reveal" style={{ '--bg': 'url(/Lunch-Menu-Header1.webp)' }}>
            <span className="h-mr-num alfa">01</span>
            <div className="h-mr-name-block">
              <h3 className="h-mr-name cormorant">Lunch</h3>
              <span className="h-mr-hours">Tue – Fri, 11am – 3pm</span>
            </div>
            <p className="h-mr-desc">Burrito bowls, blackened shrimp tacos, Carne Picada, the fajita burger.</p>
            <span className="h-mr-arrow">→</span>
          </Link>
          <Link to="/menu" className="h-menu-row reveal" style={{ '--bg': 'url(/Dinner-Menu-Entrees-Fajitas-Close.webp)' }}>
            <span className="h-mr-num alfa">02</span>
            <div className="h-mr-name-block">
              <h3 className="h-mr-name cormorant">Dinner</h3>
              <span className="h-mr-hours">Daily from 11am</span>
            </div>
            <p className="h-mr-desc">Enchiladas, fajitas, Shrimp Gabriel, Cochinita Pibil, and the Platos that keep regulars coming back.</p>
            <span className="h-mr-arrow">→</span>
          </Link>
          <Link to="/bar" className="h-menu-row reveal" style={{ '--bg': 'url(/marg-pour.jpg)' }}>
            <span className="h-mr-num alfa">03</span>
            <div className="h-mr-name-block">
              <h3 className="h-mr-name cormorant">Bar</h3>
              <span className="h-mr-hours">Full bar, open daily</span>
            </div>
            <p className="h-mr-desc">20+ cocktails built around a serious tequila program. Made right every time.</p>
            <span className="h-mr-arrow">→</span>
          </Link>
          <Link to="/catering" className="h-menu-row reveal" style={{ '--bg': 'url(/dining-room.webp)' }}>
            <span className="h-mr-num alfa">04</span>
            <div className="h-mr-name-block">
              <h3 className="h-mr-name cormorant">Catering</h3>
              <span className="h-mr-hours">Off-site · Full-service · Private parties</span>
            </div>
            <p className="h-mr-desc">Fajita party packs, full-service events, and private dining for groups of any size.</p>
            <span className="h-mr-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* ── HAPPY HOUR ── */}
      <section className="h-happy-hour reveal">
        <div className="h-hh-photo">
          <img src="/Bar-Menu-Margarita1.webp" alt="Happy hour margaritas" />
          <div className="h-hh-photo-overlay" />
        </div>
        <div className="h-hh-content">
          <div className="h-hh-left">
            <span className="h-hh-eyebrow">Every Weekday</span>
            <h2 className="h-hh-title cormorant">Happy<br /><em>Hour.</em></h2>
            <div className="h-hh-schedule">
              <div className="h-hh-sched-row">
                <span className="h-hh-time alfa">4 – 7 <small>pm</small></span>
                <span className="h-hh-sched-days">Mon – Thu</span>
              </div>
              <div className="h-hh-sched-row">
                <span className="h-hh-time alfa">12 – 7 <small>pm</small></span>
                <span className="h-hh-sched-days">Friday</span>
              </div>
            </div>
          </div>
          <div className="h-hh-divider" />
          <div className="h-hh-right">
            <div className="h-hh-deal">
              <span className="h-hh-deal-price cormorant">½ Off</span>
              <span className="h-hh-deal-item">House Margaritas</span>
            </div>
            <div className="h-hh-deal">
              <span className="h-hh-deal-price cormorant">$3.50</span>
              <span className="h-hh-deal-item">Bottled Beer</span>
            </div>
            <Link to="/bar" className="h-hh-cta alfa">Full Bar Menu →</Link>
          </div>
        </div>
      </section>

      {/* ── SECOND FOOD PHOTO ── */}
      <div className="h-photo-full reveal">
        <img src="/Dinner-Entree-Shrimp-Gabriel.webp" alt="Shrimp Gabriel at Tío Javi's" />
        <div className="h-photo-full-label">
          <span className="h-photo-full-dish cormorant">Shrimp Gabriel.</span>
        </div>
      </div>

      {/* ── BAR FEATURE ── */}
      <section className="h-bar reveal">
        <div className="h-bar-photo">
          <img src="/Homepage-BarSection-Dark.webp" alt="Bar at Tío Javi's" />
        </div>
        <div className="h-bar-text">
          <span className="h-bar-kicker">The Bar</span>
          <h2 className="h-bar-title cormorant">Built on<br /><em>tequila.</em></h2>
          <p className="h-bar-body">
            Every cocktail made by hand. Every pour measured.
            20+ drinks on the menu — we know how to make every one right.
          </p>
          <div className="h-bar-cocktails">
            {['Spicy Margarita', 'Javirita', 'Mexican Firing Squad', 'Paloma', 'Ranch Water', 'Tequila Old Fashioned'].map(c => (
              <span key={c} className="h-bar-cocktail">{c}</span>
            ))}
          </div>
          <Link to="/bar" className="h-bar-cta alfa">Full Bar Menu →</Link>
        </div>
      </section>

      {/* ── RESERVE A TABLE ── */}
      <section className="h-reserve reveal">
        <div className="h-reserve-bg">
          <img src="/interior.jpg" alt="" aria-hidden="true" />
        </div>
        <div className="h-reserve-inner h-reserve-inner--cta">
          <div className="h-reserve-text">
            <span className="h-reserve-kicker">Join Us</span>
            <h2 className="h-reserve-title cormorant">
              Reserve<br /><em>a Table.</em>
            </h2>
            <p className="h-reserve-body">
              Book through OpenTable or give us a call. Walk-ins always welcome — we'll find you a spot.
            </p>
            <a href="tel:2259240377" className="h-reserve-phone cormorant">225-924-0377</a>
          </div>
          <div className="h-reserve-cta-block">
            <Link to="/reservations" className="h-reserve-ot-btn alfa">
              Book on OpenTable
            </Link>
            <span className="h-reserve-or">or</span>
            <a href="tel:2259240377" className="h-reserve-call">Call to Reserve</a>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <div className="h-statement reveal">
        <p className="h-statement-text cormorant">
          Come for the food.<br /><em>Stay for the marg.</em>
        </p>
        <Link to="/menu" className="h-statement-cta alfa">View Menus</Link>
      </div>

      {/* ── VISIT ── */}
      <section className="h-visit">
        <div className="h-visit-bg">
          <img src="/bar-interior.jpg" alt="" />
        </div>
        <div className="h-visit-inner reveal">
          <div className="h-visit-left">
            <h2 className="h-visit-title cormorant">Come<br /><em>Find Us.</em></h2>
            <a href="tel:2259240377" className="h-visit-phone cormorant">225-924-0377</a>
            <p className="h-visit-address">
              4738 Constitution Ave<br />
              Baton Rouge, LA 70808<br /><br />
              Walk-ins always welcome.<br />
              Parties of 6+, give us a call.
            </p>
            <a
              href="https://maps.google.com/?q=4738+Constitution+Ave+Baton+Rouge+LA"
              className="h-visit-directions"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions →
            </a>
          </div>
          <div className="h-visit-hours">
            <span className="h-visit-col-label">Hours</span>
            {HOURS.map(({ day, time, closed }) => (
              <div className="h-visit-hour-row" key={day}>
                <span>{day}</span>
                <span className={closed ? 'closed' : ''}>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}


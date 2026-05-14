import { Link } from 'react-router-dom'
import './Catering.css'

const SERVICES = [
  {
    title: 'Off-Site Delivery & Pickup',
    body: 'Pick up your order whenever is convenient, or we deliver it hot and ready with disposable serving trays and utensils. Delivery requires a $250 minimum order and a $75 delivery fee.',
  },
  {
    title: 'Full-Service Catering',
    body: "A professional, uniformed staff — servers and bartenders — for your off-site event. We bring chafing dishes, china, and silverware. Linens, tables, and other party supplies available on request. Fees vary.",
  },
  {
    title: 'Private Parties at Tío Javi\'s',
    body: 'Private rooms available at our Baton Rouge location. We help you select your menu, decorate the space, and serve your guests. All you do is show up and enjoy. Fees vary.',
  },
]

export default function Catering() {
  return (
    <main className="catering-page">

      {/* ── HERO ── */}
      <section className="catering-hero">
        <div className="catering-hero-text">
          <span className="section-kicker">Catering &amp; Events</span>
          <h1 className="catering-title alfa">
            It's Fiesta<br /><em>Time.</em>
          </h1>
          <p className="catering-hero-desc">
            Birthday celebrations, retirement parties, wedding showers — we
            offer a variety of options to fit your event. Let us take care of
            the food so you can enjoy the party.
          </p>
          <a href="#contact" className="cta-big alfa">Start Planning</a>
        </div>
        <div className="catering-hero-photo">
          <img src="/dining-room.webp" alt="Tío Javi's dining room" />
        </div>
      </section>

      {/* ── SERVICE OPTIONS ── */}
      <section className="catering-services">
        {SERVICES.map(({ title, body }) => (
          <div className="catering-service-card" key={title}>
            <h2 className="catering-service-title alfa">{title}</h2>
            <p className="catering-service-body">{body}</p>
          </div>
        ))}
      </section>

      {/* ── FAJITA PARTY PACK ── */}
      <section className="catering-featured">
        <div className="catering-featured-text">
          <span className="section-kicker">Most Popular</span>
          <h2 className="alfa catering-featured-title">Fajita Party Pack</h2>
          <p className="catering-featured-price alfa">$25 <span>per person</span></p>
          <ul className="fajita-pack-list">
            {[
              'Chicken and beef fajita',
              'Handmade flour tortillas',
              'Pico de gallo',
              'Guacamole',
              'Sour cream',
              'Rice and refried beans',
              'Chili con queso',
              'Plates, silverware & serving utensils',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="catering-featured-photo">
          <img src="/spread.webp" alt="Catering spread" />
        </div>
      </section>

      {/* ── A LA CARTE MENU ── */}
      <section className="catering-menu">
        <div className="catering-menu-header">
          <span className="section-kicker">Build Your Own</span>
          <h2 className="alfa catering-menu-title">À La Carte</h2>
        </div>

        <div className="catering-menu-grid">

          {/* Shrimp */}
          <div className="catering-cat">
            <span className="cat-head">Shrimp</span>
            <p className="cat-note">Served by the dozen</p>
            {[
              { name: 'Shrimp Gabriel', price: 40 },
              { name: 'Tampico Shrimp', price: 35 },
              { name: 'Diablo Shrimp',  price: 35 },
            ].map((i) => (
              <div className="cat-row" key={i.name}>
                <span>{i.name}</span><span>${i.price}</span>
              </div>
            ))}
          </div>

          {/* Appetizers */}
          <div className="catering-cat">
            <span className="cat-head">Appetizers</span>
            {[
              { name: 'Queso Fundido — Cheese (tray)',   price: 48 },
              { name: 'Queso Fundido — Fajita Beef',     price: 60 },
              { name: 'Queso Fundido — Fajita Chicken',  price: 60 },
              { name: 'Quesadillas — Cheese',            price: 40 },
              { name: 'Quesadillas — Fajita Beef',       price: 55 },
              { name: 'Quesadillas — Fajita Chicken',    price: 55 },
            ].map((i) => (
              <div className="cat-row" key={i.name}>
                <span>{i.name}</span><span>${i.price}</span>
              </div>
            ))}
          </div>

          {/* Salsas */}
          <div className="catering-cat">
            <span className="cat-head">Salsas & Dips</span>
            {[
              { name: 'Red & Green Salsa — Half Pint', price: 5 },
              { name: 'Red & Green Salsa — Pint',      price: 9 },
              { name: 'Red & Green Salsa — Quart',     price: 18 },
              { name: 'Chili Con Queso — Half Pint',   price: 7 },
              { name: 'Chili Con Queso — Pint',        price: 14 },
              { name: 'Chili Con Queso — Quart',       price: 28 },
              { name: 'Guacamole — Half Pint',         price: 8 },
              { name: 'Guacamole — Pint',              price: 12 },
              { name: 'Guacamole — Quart',             price: 24 },
            ].map((i) => (
              <div className="cat-row" key={i.name}>
                <span>{i.name}</span><span>${i.price}</span>
              </div>
            ))}
          </div>

          {/* Tacos */}
          <div className="catering-cat">
            <span className="cat-head">Tacos</span>
            <p className="cat-note">Served by the dozen</p>
            {[
              { name: 'Al Pastor Street Tacos',       price: 40 },
              { name: 'Carne Picada Street Tacos',    price: 40 },
              { name: 'Cochinita Pibil Street Tacos', price: 40 },
              { name: 'Tuna Tacos',                   price: 40 },
              { name: 'Ground Beef Handmade Tacos',   price: 35 },
              { name: 'Ranchera Chicken Tacos',       price: 35 },
            ].map((i) => (
              <div className="cat-row" key={i.name}>
                <span>{i.name}</span><span>${i.price}</span>
              </div>
            ))}
          </div>

          {/* Enchiladas */}
          <div className="catering-cat">
            <span className="cat-head">Enchiladas</span>
            <p className="cat-note">Served by the dozen</p>
            {[
              { name: 'Cheese',           price: 30 },
              { name: 'Ground Beef',      price: 36 },
              { name: 'Shredded Chicken', price: 36 },
              { name: 'Fajita Chicken',   price: 50 },
              { name: 'Fajita Beef',      price: 50 },
              { name: 'Suissas Pork',     price: 50 },
              { name: 'Suissas Chicken',  price: 50 },
            ].map((i) => (
              <div className="cat-row" key={i.name}>
                <span>{i.name}</span><span>${i.price}</span>
              </div>
            ))}
          </div>

          {/* Sides */}
          <div className="catering-cat">
            <span className="cat-head">Sides</span>
            <p className="cat-note">Small serves 10–15 · Large serves 15–20</p>
            {[
              { name: 'Rice — Small / Large',          price: '15 / 20' },
              { name: 'Green Rice — Small / Large',    price: '15 / 20' },
              { name: 'Refried Beans — Small / Large', price: '15 / 20' },
              { name: 'Charra Beans — Small / Large',  price: '15 / 20' },
            ].map((i) => (
              <div className="cat-row" key={i.name}>
                <span>{i.name}</span><span>${i.price}</span>
              </div>
            ))}
          </div>

          {/* Desserts */}
          <div className="catering-cat">
            <span className="cat-head">Desserts</span>
            <p className="cat-note">Serves 10–12 people</p>
            {[
              { name: 'Sopapillas', price: 20 },
              { name: 'Churros',    price: 20 },
            ].map((i) => (
              <div className="cat-row" key={i.name}>
                <span>{i.name}</span><span>${i.price}</span>
              </div>
            ))}
          </div>

          {/* Beverages */}
          <div className="catering-cat">
            <span className="cat-head">Beverages</span>
            <p className="cat-note">By the gallon</p>
            {[
              { name: 'Sweet Tea',          price: 8 },
              { name: 'Unsweet Tea',        price: 8 },
              { name: 'Lemonade',           price: 8 },
              { name: 'Frozen Margaritas',  price: 65 },
              { name: 'Rocks Margaritas',   price: 85 },
            ].map((i) => (
              <div className="cat-row" key={i.name}>
                <span>{i.name}</span><span>${i.price}</span>
              </div>
            ))}
          </div>

        </div>

        <p className="catering-extras-note">
          Disposable chafing dishes available upon request · $8 per dish
        </p>
      </section>

      {/* ── CONTACT ── */}
      <section className="catering-contact" id="contact">
        <div className="catering-contact-inner">
          <span className="section-kicker">Let's Get Started</span>
          <h2 className="alfa catering-contact-title">Ready to spice up<br /><em>your event?</em></h2>
          <p className="catering-contact-body">
            Call us or stop by to talk through your event. We'll help you
            put together the right menu, staffing, and setup for your group.
          </p>
          <div className="catering-contact-ctas">
            <a href="tel:2259240377" className="cta-big alfa">225-924-0377</a>
            <Link to="/visit" className="cta-outline">Hours &amp; Location</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

import { NavLink } from 'react-router-dom'
import './Menu.css'

const ENTREES = [
  { name: 'Lunch Fajita', desc: '6 oz. mixed chicken and beef fajita with handmade flour tortillas, rice, beans, and chili con queso' },
  { name: 'Texas Combo', desc: 'Cheese enchilada with onions, crispy beef taco, and sliced fajita meat, served with fresh tortilla, rice, and refried beans' },
  { name: 'Plaza Suissas', desc: 'Two chopped fajita chicken or pork enchiladas topped with crema suissas, Swiss cheese, sour cream, and green onions, served with rice and refried beans' },
  { name: 'Plaza Al Carbon', desc: 'Two fajita beef or chicken enchiladas topped with cheese and enchilada sauce, served with rice and refried beans' },
  { name: 'El Leon', desc: 'Two soft or crispy tacos — fajita beef or chicken — topped with lettuce, tomatoes, and cheese, served with rice and refried beans' },
  { name: 'Delicioso', desc: 'Chicken flauta, guacamole, pico, sour cream, and a lunch taco al carbon (fajita beef or chicken), served with rice and refried beans' },
  { name: 'Adobo Marinated Chicken', desc: 'Chargrilled chicken with adobo marinade and grilled pineapple, served with salsa verde, cilantro lime rice, and mixed vegetables' },
  { name: 'Taco Al Pastor', desc: 'Roasted pork, grilled onion, and pineapple on corn tortillas with tomatillo salsa and cilantro lime rice' },
  { name: 'Blackened Shrimp Tacos', desc: 'Gulf shrimp and slaw on corn tortillas with poblano crema and cilantro lime rice' },
  { name: 'Carne Picada Tacos', desc: 'Fajita beef, sautéed onions, avocado, and cilantro on corn tortillas with molcajete salsa and cilantro lime rice' },
  { name: 'Burrito Bowl', desc: 'Black beans, roasted corn, avocados, cilantro lime rice, tomatoes, sour cream, cilantro, and queso fresco — add chicken, shrimp, or beef' },
  { name: 'Spicy Tuna Tostadas', desc: 'Raw ahi tuna, chilis, scallions, crispy tortilla, chipotle crema, avocado, and cilantro lime rice' },
  { name: 'Taco Salad', desc: 'Romaine, avocado, crispy tortilla, black beans, roasted corn, queso fresco — add fajita beef, fajita chicken, or grilled shrimp' },
  { name: 'Fajita Burger', desc: 'Brioche bun, Monterey Jack cheese, and bacon, served with fries' },
]

export default function MenuLunch() {
  return (
    <main className="menu-page">

      <div className="menu-hero">
        <div className="menu-hero-bg">
          <img src="/Lunch-Menu-Header1.webp" alt="" aria-hidden="true" />
        </div>
        <div className="menu-hero-text">
          <span className="menu-hero-kicker">Tuesday – Friday · 11am – 3pm</span>
          <h1 className="menu-hero-title">Lunch<br /><em>Menu</em></h1>
          <p className="menu-hero-note">A focused midday menu. Ask your server about today's prices.</p>
        </div>
      </div>

      <MenuTabsBar active="lunch" />

      <div className="menu-body">
        <div className="menu-section">
          <div className="menu-section-head">
            <h2 className="menu-section-title">Lunch Entrées</h2>
            <p className="menu-section-note">Available Tuesday – Friday · 11am – 3pm</p>
          </div>
          {ENTREES.map((item, i) => (
            <div className="menu-item" key={i}>
              <div className="menu-item-left">
                <span className="menu-item-name">{item.name}</span>
                {item.desc && <span className="menu-item-desc">{item.desc}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <PhotoBreak src="/chips+and+sauce.webp" label="Chips &amp; Salsa." />

      <p className="menu-footer-note">
        Lunch served Tuesday – Friday, 11am – 3pm · Parties of 15 or more will have an 18% gratuity added to the bill.
      </p>

    </main>
  )
}

function MenuTabsBar({ active }) {
  return (
    <div className="menu-tabs-bar">
      <NavLink to="/menu/lunch" className={`menu-tab-link${active === 'lunch' ? ' active' : ''}`}>Lunch</NavLink>
      <NavLink to="/menu"       className={`menu-tab-link${active === 'dinner' ? ' active' : ''}`}>Dinner</NavLink>
      <NavLink to="/bar"        className={`menu-tab-link${active === 'bar' ? ' active' : ''}`}>Bar</NavLink>
    </div>
  )
}

function PhotoBreak({ src, label }) {
  return (
    <div className="menu-photo-break">
      <img src={src} alt="" aria-hidden="true" />
      {label && <span className="menu-photo-break-label" dangerouslySetInnerHTML={{ __html: label }} />}
    </div>
  )
}

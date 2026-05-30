import { NavLink } from 'react-router-dom'
import './Menu.css'

const ENTREES = [
  { name: 'Lunch Fajita', price: 18, desc: '6 oz. mixed chicken and beef fajita. House made tortillas.' },
  { name: 'Texas Combo', price: 17, desc: 'Cheese enchilada with onions, crispy beef taco and sliced fajita meat. Served with fresh tortilla, rice and refried beans.' },
  { name: 'Plaza Suissas', price: 15, desc: 'Two chopped chicken fajita or pork carnitas enchiladas topped with crema suissas, Swiss cheese, sour cream and green onions. Served with rice and refried beans.' },
  { name: 'Plaza Al Carbon', price: 15, desc: 'Two beef or chicken fajita enchiladas topped with cheese, rice and refried beans.' },
  { name: 'El Leon', price: 15, desc: 'Two soft or crispy tacos, fajita beef or chicken topped with lettuce, tomatoes and cheese. Served with rice and refried beans.' },
  { name: 'Delicioso', price: 14, desc: 'Chicken flauta, guacamole, pico, sour cream and a lunch taco al carbon (beef or chicken fajita). Served with rice and refried beans.' },
  { name: 'Adobo Marinated Chicken', price: 17, desc: 'Adobo marinade, grilled pineapple, cilantro lime rice and mixed veggies. Served with salsa verde.' },
  { name: 'Taco Al Pastor', price: 15, desc: 'Corn or flour tortillas, roasted pork, grilled onion and pineapple, tomatillo salsa, cilantro lime rice.' },
  { name: 'Blackened Shrimp Tacos', price: 17, desc: 'Corn or flour tortillas, slaw, poblano crema, cilantro lime rice.' },
  { name: 'Carne Picada Tacos', price: 16, desc: 'Corn or flour tortillas, fajita beef, avocado, cilantro, molcajete salsa, sautéed onions, cilantro lime rice.' },
  { name: 'Burrito Bowl', price: 10, desc: 'Black beans, roasted corn, avocados, cilantro lime rice, tomatoes, sour cream, cilantro, queso fresco.', addons: [{ label: 'Add Chicken', price: 13 }, { label: 'Add Shrimp', price: 14 }, { label: 'Add Beef', price: 14 }] },
  { name: 'Spicy Tuna Tostadas', price: 14, desc: 'Ahi tuna, chilis, scallions, crispy tortilla, chipotle crema and avocado, cilantro lime rice.' },
  { name: 'Caesar Salad', price: 12, desc: 'Manchego cheese, crispy tortilla.', addons: [{ label: 'Fajita Beef', price: 16 }, { label: 'Fajita Chicken', price: 15 }, { label: 'Grilled Shrimp', price: 16 }] },
  { name: 'Taco Salad', price: 12, desc: 'Romaine, avocado, crispy tortilla, black beans, queso fresco.', addons: [{ label: 'Add Fajita Beef', price: 16 }, { label: 'Add Grilled Shrimp', price: 16 }, { label: 'Add Fajita Chicken', price: 15 }] },
  { name: 'Fajita Burger', price: 16, desc: 'Brioche bun, monterey jack cheese, and bacon, with fries.' },
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
          <p className="menu-hero-note">A focused midday menu.</p>
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
                {item.addons && (
                  <span className="menu-item-addons">
                    {item.addons.map(a => (
                      <span key={a.label}>{a.label} <b>${a.price}</b></span>
                    ))}
                  </span>
                )}
              </div>
              <span className="menu-item-price">${item.price}</span>
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

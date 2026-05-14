import { NavLink } from 'react-router-dom'
import './Menu.css'

const ANTOJITOS = [
  { name: 'Nachos', variants: [{ label: 'Fajita Beef', price: 18 }, { label: 'Fajita Chicken', price: 17 }, { label: 'Ground Beef', price: 16 }] },
  { name: 'Quesadillas', variants: [{ label: 'Fajita Beef — 6pc / 12pc', price: '18 / 25' }, { label: 'Fajita Chicken — 6pc / 12pc', price: '18 / 22' }, { label: 'Shrimp — 6pc / 12pc', price: '19 / 26' }] },
  { name: 'Spicy Tuna Tostada', desc: 'Raw tuna, chilis, scallions, chipotle crema, avocado', price: 18 },
  { name: 'Guacamole', desc: 'Prepared tableside with lime, pico, jalapeño, salt, pepper', price: 16 },
  { name: 'Ceviche', desc: 'Gulf shrimp and local white fish tossed in cilantro lime vinaigrette, avocado, cocktail sauce, tortilla chips', price: 17 },
  { name: 'Queso Fundido', variants: [{ label: 'Fajita Beef', price: 18 }, { label: 'Fajita Chicken', price: 17 }] },
  { name: 'Queso Dip', variants: [{ label: 'Yellow or White (sm / lg)', price: '7 / 14' }, { label: 'Chorizo (sm / lg)', price: '8 / 16' }, { label: 'Ground Beef (sm / lg)', price: '9 / 18' }] },
]

const SOUPS_SALADS = [
  { name: 'Xochitl Soup', desc: 'Mexican chicken soup, rice, avocado, pico, cilantro, lime, tortilla strips', price: 11 },
  { name: 'Taco Salad', desc: 'Romaine, avocado, black beans, queso fresco, roasted corn, pico, tortilla strips', variants: [{ label: 'Chicken / Steak / Ground Beef', price: '16 / 19' }] },
  { name: 'Caesar Salad', desc: 'Romaine, manchego cheese, crispy tortilla', variants: [{ label: 'Chicken / Steak / Ground Beef / Shrimp', price: '14 / 19' }] },
]

const ENCHILADAS = [
  { name: 'Cheese', price: 16 },
  { name: 'Beef', price: 16 },
  { name: 'Fajita', desc: 'Fajita beef / Fajita chicken / Shrimp', price: '19 / 18 / 19' },
  { name: 'Deluxe', desc: 'Ground beef / Shredded chicken', price: 17 },
  { name: 'Suizas', desc: 'Fajita pork / Fajita chicken', price: '18 / 18' },
]

const TACOS = [
  { name: 'Dannie', desc: 'Three crispy shredded chicken or ground beef tacos', price: 16 },
  { name: 'Eddie', desc: 'Three soft flour shredded beef or ground tacos', price: 16 },
  { name: 'Tacos al Carbon', desc: 'Fajita chicken / Fajita beef', variants: [{ label: 'One / Two', price: '18 / 28' }] },
  { name: 'Shrimp Tacos', desc: 'Gulf shrimp, marinated slaw, poblano crema', price: 18 },
  { name: 'Fish Tacos', desc: 'Fried snapper, marinated slaw, poblano crema', price: 18 },
  { name: 'Cochinita Pibil', desc: 'Slow cooked pulled pork, pickled red onions, jalapeños, cabbage, tomatillo salsa', price: 17 },
  { name: 'Tuna Tacos', desc: 'Raw tuna, chipotle crema, mango pico de gallo, avocado, poblano crema', price: 18 },
  { name: 'Al Pastor', desc: 'Roasted pork, pineapple, sautéed onions, cilantro, tomatillo salsa', price: 17 },
  { name: 'Carne Picada', desc: 'Fajita beef, avocado, sautéed onions, cilantro, molcajete salsa', price: 18 },
]

const ENTREES = [
  { name: 'Pollo Buenas', desc: 'Charbroiled chicken breast', price: 26 },
  { name: 'Carne Asada', desc: 'Grilled skirt steak', price: 37 },
  { name: 'Pollo Gratinadas', desc: 'Charbroiled chicken breast, sautéed mushrooms, onions, bell peppers, Monterey Jack cheese', price: 28 },
  { name: 'Shrimp Gabriel', desc: '8 Gulf shrimp, cheese, jalapeño, wrapped in bacon', price: 32 },
]

const FAJITAS = [
  { name: 'Steak', variants: [{ label: 'For one / For two', price: '32 / 55' }] },
  { name: 'Veggie', variants: [{ label: 'For one / For two', price: '15 / 28' }] },
  { name: 'Chicken', variants: [{ label: 'For one / For two', price: '26 / 45' }] },
  { name: 'Shrimp', variants: [{ label: 'For one / For two', price: '30 / 58' }] },
  { name: 'Steak & Chicken', variants: [{ label: 'For one / For two', price: '29 / 50' }] },
  { name: 'Fajitas & Shrimp', desc: 'Choose your fajita meat + 4 grilled shrimp', variants: [{ label: 'For one / For two', price: '32 / 64' }] },
  { name: 'Chihuahua Topping', desc: 'Add to any fajita', variants: [{ label: 'For one / For two', price: '5 / 10' }] },
  { name: 'Family of 4 — Chicken & Steak', desc: 'Family-style with guacamole, pico, queso, sour cream, lettuce, rice, and beans', price: 80 },
]

const BURRITOS = [
  { name: 'Shredded Chicken', desc: 'Monterey Jack cheese', price: 18 },
  { name: 'Fajita Chicken', desc: 'Monterey Jack cheese', price: 18 },
  { name: 'Ground Beef', desc: 'Cheddar cheese', price: 17 },
  { name: 'Fajita Beef', desc: 'Cheddar cheese', price: 20 },
]

const PLATOS = [
  { name: 'Delirio', desc: '4 chicken and cheese flautas', price: 18 },
  { name: 'Henry', desc: 'Cheese enchilada, pork tamale, crispy beef taco', price: 18 },
  { name: 'Texas Combo', desc: 'Cheese enchilada, crispy beef taco, sliced fajita beef or chicken', price: 22 },
]

const DESSERTS = [
  { name: 'Churros', desc: 'Bavarian cream', price: 6 },
  { name: 'Sopapillas', desc: 'Three / Four / Six', price: '4 / 5 / 6' },
  { name: 'Flan', desc: 'Caramel custard', price: 6 },
  { name: 'Fried Ice Cream', price: 6 },
  { name: 'Chocolate Banana', price: 6 },
]

export default function MenuDinner() {
  return (
    <main className="menu-page">

      <div className="menu-hero">
        <div className="menu-hero-bg">
          <img src="/Dinner-Entree-Shrimp-Gabriel.webp" alt="" aria-hidden="true" />
        </div>
        <div className="menu-hero-text">
          <span className="menu-hero-kicker">Daily from 11am</span>
          <h1 className="menu-hero-title">Dinner<br /><em>Menu</em></h1>
          <p className="menu-hero-note">All dinner plates served with rice and beans unless noted.</p>
        </div>
      </div>

      <MenuTabsBar active="dinner" />

      {/* ── GROUP 1: Starters ── */}
      <div className="menu-body">
        <MenuSection title="Antojitos" note="Starters" items={ANTOJITOS} />
        <MenuSection title="Soups &amp; Salads" items={SOUPS_SALADS} />
      </div>

      <PhotoBreak src="/enchiladas.webp" label="Enchiladas Verdes." />

      {/* ── GROUP 2: Enchiladas, Tacos ── */}
      <div className="menu-body">
        <MenuSection title="Enchiladas" note="Three enchiladas with red enchilada sauce, rice, and beans" items={ENCHILADAS} />
        <MenuSection title="Tacos" note="Served with rice and beans" items={TACOS} />
      </div>

      <PhotoBreak src="/Dinner-Menu-Entrees-Fajitas-Close.webp" label="Fajitas." />

      {/* ── GROUP 3: Mains ── */}
      <div className="menu-body">
        <MenuSection title="Entrées" note="Served with rice and beans" items={ENTREES} />
        <MenuSection title="Fajitas" note="Served with rice and beans" items={FAJITAS} />
      </div>

      <PhotoBreak src="/Dinner-Entree-Shrimp-Gabriel.webp" label="Shrimp Gabriel." />

      {/* ── GROUP 4: Burritos, Platos, Desserts ── */}
      <div className="menu-body">
        <MenuSection title="Burritos" note="Served with black or refried beans and queso inside, topped with enchilada sauce" items={BURRITOS} />
        <MenuSection title="Platos" note="Big plates — served with rice and beans" items={PLATOS} />
        <MenuSection title="Desserts" items={DESSERTS} />
      </div>

      <p className="menu-footer-note">
        Parties of 15 or more will have an 18% gratuity added to the bill.
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

function MenuSection({ title, note, items }) {
  return (
    <div className="menu-section">
      <div className="menu-section-head">
        <h2 className="menu-section-title" dangerouslySetInnerHTML={{ __html: title }} />
        {note && <p className="menu-section-note">{note}</p>}
      </div>
      {items.map((item, i) => (
        <div className="menu-item" key={i}>
          <div className="menu-item-left">
            <span className="menu-item-name">{item.name}</span>
            {item.desc && <span className="menu-item-desc">{item.desc}</span>}
          </div>
          {item.price && <span className="menu-item-price">${item.price}</span>}
          {item.variants && (
            <div className="menu-item-variants">
              {item.variants.map((v, j) => (
                <div className="menu-item-variant" key={j}>
                  <span>{v.label}</span>
                  <span>${v.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function PhotoBreak({ src, label }) {
  return (
    <div className="menu-photo-break">
      <img src={src} alt="" aria-hidden="true" />
      {label && <span className="menu-photo-break-label">{label}</span>}
    </div>
  )
}

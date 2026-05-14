import { NavLink } from 'react-router-dom'
import './Menu.css'
import './Bar.css'

const MARGARITAS = [
  { name: 'Javirita', desc: '100% agave tequila, fresh citrus juices, orange liqueur', variants: [{ label: 'Regular / Grande', price: '10 / 18' }] },
  { name: 'Additional Flavors', desc: 'Strawberry · Raspberry · Peach · Sangria', variants: [{ label: 'Add to any marg — Regular / Grande', price: '+1 / +2' }] },
  { name: 'Build Your Own', desc: 'Shaken with house simple, fresh citrus juices, on the rocks. Choose your tequila from the program below. Add Cointreau (+$1) or Grand Marnier (+$2).' },
]

const SIGNATURE = [
  { name: 'Blueberry Lemon Drop', desc: 'Blueberry vodka, fresh blueberries, fresh lemon juice, sugar-rimmed martini glass', price: 14 },
  { name: 'Mexican Mojito', desc: 'Silver tequila, fresh lime juice, mint', price: 13 },
  { name: 'House Red or White Sangria', desc: 'Red or white wine, fresh citrus, Absolut Raspberri, Bacardi Limón, peach purée', price: 13 },
  { name: 'Skinny Margarita', desc: '100% agave silver tequila, fresh lime juice, Grand Marnier, Cointreau, agave', variants: [{ label: 'Regular / Grande', price: '12 / 19' }] },
  { name: 'Paloma', desc: 'Reposado tequila, grapefruit, fresh lime juice, agave, club soda', price: 13 },
  { name: 'Spicy Margarita', desc: 'Añejo tequila, fresh lime juice, agave, cucumber, Cointreau, jalapeño', price: 17 },
  { name: 'Ranch Water', desc: 'Topo Chico, hibiscus syrup, lime juice, silver tequila', price: 15 },
  { name: 'Hibiscus Spritz', desc: 'Mint leaves, agave simple syrup, hibiscus syrup, pinot grigio, club soda, lemon juice', price: 15 },
]

const TEQUILA_HIGHLAND = [
  { name: 'Gran Centenario', plata: 13, reposado: 15, anejo: 17, flight: 15 },
  { name: 'Espolon',         plata: 11, reposado: 13, anejo: 15, flight: 13 },
  { name: 'Casamigos',       plata: 13, reposado: 15, anejo: 17, flight: 15 },
  { name: 'Don Julio',       plata: 13, reposado: 15, anejo: 17, flight: 15 },
  { name: 'Patrón',          plata: 13, reposado: 15, anejo: 17, flight: 15 },
  { name: 'Partida',         plata: 11, reposado: 13, anejo: 15, flight: 13 },
]

const TEQUILA_LOWLAND = [
  { name: '1800',                    plata:  9, reposado: 11, anejo: 13, flight: 11 },
  { name: 'Fortaleza',               plata: 13, reposado: 15, anejo: 18, flight: 16 },
  { name: 'Herradura',               plata: 12, reposado: 14, anejo: 16, flight: 14 },
  { name: 'Tres Agaves',             plata:  9, reposado: 11, anejo: 13, flight: 11 },
  { name: 'Jose Cuervo Tradicional', plata: 10, reposado: 12, anejo: 14, flight: 12 },
  { name: 'Hornitos',                plata:  8, reposado: 10, anejo: 12, flight: 10 },
]

const MEZCAL = [
  { name: 'Del Maguey Vida', desc: 'Smoky, sublime & intense', price: 11 },
  { name: 'Casamigos Mezcal',     desc: 'Subtle, smoky, balanced & sweet', price: 13 },
]

const WINE_SECTIONS = [
  { cat: 'Sparkling', items: [{ name: 'La Marca Prosecco', desc: 'Veneto, Italy', variants: [{ label: 'Split / Bottle', price: '7 / 14' }] }] },
  { cat: 'White',     items: [{ name: 'Santa Cristina Pinot Grigio', variants: [{ label: 'Glass / Bottle', price: '8 / 32' }] }, { name: 'J. Lohr Chardonnay', desc: 'Central Coast, CA', variants: [{ label: 'Glass / Bottle', price: '9 / 36' }] }] },
  { cat: 'Red',       items: [{ name: 'J. Lohr Seven Oaks Cabernet Sauvignon', desc: 'Paso Robles, CA', variants: [{ label: 'Glass / Bottle', price: '9 / 36' }] }, { name: 'J. Lohr Merlot', desc: 'Paso Robles, CA', variants: [{ label: 'Glass / Bottle', price: '9 / 36' }] }] },
]

const SELTZERS = [
  { name: 'Black Cherry White Claw', price: 6 },
  { name: 'High Noon Watermelon',    price: 6 },
]

const BEERS = [
  { cat: 'Louisiana Brewed', items: ['Abita Amber $6', 'Abita Purple Haze $6', 'Gnarly Barley Holy Roller $6', 'Gnarly Barley Jucifer IPA $6', 'Gnarly Barley Milk Porter $6', 'Gnarly Barley Korova $6', 'Goose Island IPA $7', 'NOLA Blonde (NA) $5', 'Parish Canebrake $7', 'Urban South Holy Roller $7', 'Urban South Paradise Park $7', 'Yuengling $6'] },
  { cat: 'Domestic', items: ['Angry Orchard $6', 'Blue Moon $6', 'Bud Light $5', 'Budweiser $5', 'Coors Light $5', 'Michelob ULTRA $5', 'Miller Lite $5', "O'Doul's Amber (NA) $5", 'Shiner Bock $6'] },
  { cat: 'Mexican', items: ['Bohemia $5', 'Corona $6', 'Corona Light $6', 'Corona Premier $6', 'Dos Equis Lager $6', 'Dos Equis Ámbar $6', 'Modelo Especial $6', 'Modelo Negra $6', 'Pacifico $7', 'Sol $7', 'Tecate $6', 'Victoria $6'] },
  { cat: 'Imported', items: ['Heineken $6', 'Stella Artois $6'] },
]

export default function Bar() {
  return (
    <main className="menu-page">

      {/* ── HERO ── */}
      <div className="menu-hero">
        <div className="menu-hero-bg">
          <img src="/bar-shots.jpg" alt="" aria-hidden="true" />
        </div>
        <div className="menu-hero-text">
          <span className="menu-hero-kicker">Open Daily</span>
          <h1 className="menu-hero-title">Bar<br /><em>Menu</em></h1>
          <p className="menu-hero-note">Every cocktail made by hand. Every pour measured. Built on tequila.</p>
        </div>
        <div className="menu-hero-hh">
          <span className="menu-hero-hh-label">Happy Hour</span>
          <p className="menu-hero-hh-time">Mon – Thu · 4 – 7pm<br />Fri · 12 – 7pm</p>
          <p className="menu-hero-hh-deal">
            ½ off house margaritas<br />
            ½ off to-go margaritas<br />
            $3.50 bottled beer
          </p>
        </div>
      </div>

      <MenuTabsBar active="bar" />

      {/* ── GROUP 1: Margaritas + Cocktails ── */}
      <div className="menu-body">
        <MenuSection title="Margaritas" note="House favorites" items={MARGARITAS} />
        <MenuSection title="Signature Cocktails" items={SIGNATURE} />
      </div>

      <PhotoBreak src="/marg-pour.jpg" label="Tequila Flights." />

      {/* ── GROUP 2: Tequila Program ── */}
      <div className="menu-body">
        <div className="menu-section">
          <div className="menu-section-head">
            <h2 className="menu-section-title">Tequila</h2>
            <p className="menu-section-note">Choose a tequila and taste the aging process</p>
          </div>
          <div className="aging-legend">
            {[
              { label: 'Plata',     desc: 'Unaged, white-silver' },
              { label: 'Reposado',  desc: 'Rested and aged in oak for two months' },
              { label: 'Añejo',     desc: 'Extra aged in oak for one year' },
              { label: 'Flight',    desc: 'Try a 1 oz pour of all three' },
            ].map(({ label, desc }) => (
              <div className="aging-item" key={label}>
                <span className="aging-label">{label}</span>
                <span className="aging-desc">{desc}</span>
              </div>
            ))}
          </div>

          <TequilaTable
            title="Highland"
            desc="The Highland climate is cooler with mineral-rich terrain — yields a larger, sweeter agave producing more floral and fruity tequila."
            rows={TEQUILA_HIGHLAND}
          />
          <TequilaTable
            title="Lowland"
            desc="The Lowland climate is warmer with volcanic soils — yields a smaller, less sweet agave producing a more herbaceous and earthy tequila."
            rows={TEQUILA_LOWLAND}
          />
        </div>

        <MenuSection title="Mezcal" note="A distilled beverage made from smoked agave" items={MEZCAL} />
      </div>

      <PhotoBreak src="/Bar-Menu-Cocktails1.webp" label="Cocktails." />

      {/* ── GROUP 3: Wine + Beer ── */}
      <div className="menu-body">
        <div className="menu-section">
          <div className="menu-section-head">
            <h2 className="menu-section-title">Wine</h2>
          </div>
          {WINE_SECTIONS.map(({ cat, items }) => (
            <div key={cat}>
              <span className="menu-cat-label">{cat}</span>
              {items.map((item, i) => (
                <div className="menu-item" key={i}>
                  <div className="menu-item-left">
                    <span className="menu-item-name">{item.name}</span>
                    {item.desc && <span className="menu-item-desc">{item.desc}</span>}
                  </div>
                  {item.variants && (
                    <div className="menu-item-variants" style={{ gridColumn: '1 / -1' }}>
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
          ))}
        </div>

        <MenuSection title="Seltzers" items={SELTZERS} />

        <div className="menu-section">
          <div className="menu-section-head">
            <h2 className="menu-section-title">Cervezas</h2>
            <p className="menu-section-note">Beers</p>
          </div>
          {BEERS.map(({ cat, items }) => (
            <div key={cat}>
              <span className="menu-cat-label">{cat}</span>
              <div className="beer-grid">
                {items.map((b, i) => {
                  const lastDollar = b.lastIndexOf('$')
                  const name = b.slice(0, lastDollar).trim()
                  const price = b.slice(lastDollar)
                  return (
                    <div className="beer-row" key={i}>
                      <span>{name}</span>
                      <span>{price}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="menu-footer-note" />

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
        <h2 className="menu-section-title">{title}</h2>
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

function TequilaTable({ title, desc, rows }) {
  return (
    <div className="tequila-block">
      <div className="tequila-block-head">
        <p className="tequila-block-title">{title}</p>
        <p className="tequila-block-desc">{desc}</p>
      </div>
      <div className="tequila-table">
        <div className="tequila-col-labels">
          <span></span>
          <span>Plata</span>
          <span>Reposado</span>
          <span>Añejo</span>
          <span>Flight</span>
        </div>
        {rows.map((r) => (
          <div className="tequila-row" key={r.name}>
            <span className="tequila-name">{r.name}</span>
            <span>${r.plata}</span>
            <span>${r.reposado}</span>
            <span>${r.anejo}</span>
            <span className="tequila-flight">${r.flight}</span>
          </div>
        ))}
      </div>
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

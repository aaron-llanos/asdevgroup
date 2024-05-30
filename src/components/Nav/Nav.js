import './nav.scss'

import Link from 'next/link'

export default function Nav({ light, openMenu }) {

  return (
      <div className="nav-container">
        <Link href="/">
          <img
            atl="Agador logo"
            style={{ 'width': '250px' }}
            src={light ? '/agador-logo-b.png' : '/agador-logo.png'}
          />
        </Link>
        <nav>
          <Link href="/portfolio/us">
            <p>Portfolio</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
          <img
            height="26px"
            atl="Hamburger"
            onClick={openMenu}
            src="/hamburger.png"
            style={{ cursor: 'pointer' }}
          />
        </nav>
      </div>
  );
}

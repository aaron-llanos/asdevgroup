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
        <p>Portfolio</p>
        <p>Contact</p>
        <img atl="Hamburger" src="/hamburger.png" height="26px" onClick={openMenu} />
      </nav>
    </div>
  );
}

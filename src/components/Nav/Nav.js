import './nav.scss'

export default function Nav({ light }) {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img atl="Agador logo" src={light ? '/agador-logo-b.png' : 'agador-logo.png'} style={{ 'width': '250px' }} />
      <nav>
        <p>Portfolio</p>
        <p>Contact</p>
        <img atl="Hamburger" src="/hamburger.png" height="26px" />
      </nav>
    </div>
  );
}

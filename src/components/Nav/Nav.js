import './nav.scss'

export default function Nav({ light }) {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img atl="Agador logo" src={light ? '/agador-logo-b.png' : 'agador-logo.png'} />
      <nav>
        <p>Portfolio</p>
        <p>Contact</p>
        <p>Hamburger</p>
      </nav>
    </div>
  );
}

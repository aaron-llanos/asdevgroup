import './nav.scss'

export default function Nav() {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src="/agador-logo.png" atl="Agador logo"/>
      <nav>
        <p>Portfolio</p>
        <p>Contact</p>
        <p>Hamburger</p>
      </nav>
    </div>
  );
}

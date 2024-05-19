import './underline.scss'

export default function Underline({ text, width }) {

  return (
    <div className="underline-container">
      <p className="text">{text}</p>
      <div className="bg-line" style={{ width: `${width ? width : '100%' }` }}>
        <div className="line"></div>
      </div>
    </div>
  );
}

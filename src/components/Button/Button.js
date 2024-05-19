import './button.scss'

export default function Button({ text, css, click }) {

  return (
    <button type="submit" className={css} onClick={click}>
      {text}
    </button>
  );
}

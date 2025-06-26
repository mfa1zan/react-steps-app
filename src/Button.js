export default function Button({ textColor, bgColor, onClick, text, emoji }) {
  return <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}><span>{emoji}</span>{text}</button>;
}

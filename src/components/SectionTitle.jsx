function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export default SectionTitle

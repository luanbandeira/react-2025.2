export default function TimelineItem({ title, org, period, items = [] }) {
  return (
    <div className="tl-item">
      <div className="dot" />
      <h3 style={{ margin: "0 0 4px" }}>
        {title} <span className="muted">— {org}</span>
      </h3>
      <div className="badge" style={{ marginBottom: 8 }}>{period}</div>
      <ul className="muted" style={{ margin: "6px 0 0 18px" }}>
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  );
}

import { c, shadow } from '../theme'

export function Card({ title, sub, right, children, style }) {
  return (
    <div style={{
      background: c.card,
      border: `1px solid ${c.border}`,
      borderRadius: 16,
      boxShadow: shadow.card,
      padding: '18px 20px',
      ...style,
    }}>
      {(title || right) && (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: c.ink }}>{title}</h3>
            {sub && <p style={{ fontSize: 11, color: c.muted, marginTop: 4 }}>{sub}</p>}
          </div>
          {right}
        </div>
      )}
      {children}
    </div>
  )
}

export function SectionTitle({ children, style }) {
  return <h2 style={{ fontSize: 16, fontWeight: 700, color: c.ink, marginBottom: 14, ...style }}>{children}</h2>
}

export function Trend({ value, positive }) {
  return (
    <span style={{ fontSize: 12, fontWeight: 700, color: positive ? c.up : c.down }}>
      {positive ? '▲' : '▼'} {value}
    </span>
  )
}

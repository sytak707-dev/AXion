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

// on/off 토글 스위치
export function Toggle({ on, onChange }) {
  return (
    <button
      onClick={onChange}
      aria-pressed={on}
      style={{
        width: 40, height: 22, borderRadius: 99, border: 'none', cursor: 'pointer',
        background: on ? c.primary : c.borderStrong, padding: 2, flexShrink: 0,
        display: 'flex', alignItems: 'center',
        justifyContent: on ? 'flex-end' : 'flex-start',
        transition: 'background 0.18s',
      }}
    >
      <span style={{
        width: 18, height: 18, borderRadius: '50%', background: '#fff',
        boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
        transition: 'all 0.18s',
      }} />
    </button>
  )
}

// 상태 배지
export function Badge({ children, color = c.primary, soft = c.primarySoft }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '3px 9px',
      borderRadius: 99, background: soft, color, fontSize: 11, fontWeight: 700,
      whiteSpace: 'nowrap',
    }}>{children}</span>
  )
}

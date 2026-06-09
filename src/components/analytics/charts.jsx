import { c } from '../../theme'

// 꺾은선 그래프 (SVG)
export function LineChart({ data, labels, color = c.primary, fill = 'rgba(36,177,105,0.12)', height = 190 }) {
  const W = 600, H = height, padX = 16, padTop = 16, padBottom = 28
  const max = Math.max(...data), min = Math.min(...data)
  const range = (max - min) || 1
  const innerH = H - padTop - padBottom
  const stepX = (W - padX * 2) / (data.length - 1)
  const pts = data.map((v, i) => [padX + i * stepX, padTop + innerH - ((v - min) / range) * innerH])
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${padTop + innerH} L${pts[0][0].toFixed(1)} ${padTop + innerH} Z`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      <path d={area} fill={fill} stroke="none" />
      <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="#fff" stroke={color} strokeWidth="2" />
      ))}
      {labels && labels.map((l, i) => (
        <text key={i} x={pts[i][0]} y={H - 9} fontSize="11" fill={c.muted} textAnchor="middle">{l}</text>
      ))}
    </svg>
  )
}

// 세로 막대 그래프
export function BarChart({ data, labels, color = c.primary, height = 200, format = v => v }) {
  const max = Math.max(...data) || 1
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 14, height }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: c.ink, marginBottom: 6 }}>{format(v)}</span>
          <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <div style={{
              width: '60%', maxWidth: 42, height: `${(v / max) * 100}%`,
              background: color, borderRadius: '7px 7px 0 0', minHeight: 4,
            }} />
          </div>
          <span style={{ fontSize: 11, color: c.muted, marginTop: 8, textAlign: 'center' }}>{labels[i]}</span>
        </div>
      ))}
    </div>
  )
}

// 도넛 차트
export function Donut({ segments, size = 170, thickness = 28 }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1
  const r = (size - thickness) / 2
  const cx = size / 2, cy = size / 2
  const circ = 2 * Math.PI * r
  let offset = 0
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={c.track} strokeWidth={thickness} />
      {segments.map((s, i) => {
        const frac = s.value / total
        const dash = circ * frac
        const el = (
          <circle
            key={i} cx={cx} cy={cy} r={r} fill="none"
            stroke={s.color} strokeWidth={thickness}
            strokeDasharray={`${dash} ${circ - dash}`}
            strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        )
        offset += dash
        return el
      })}
    </svg>
  )
}

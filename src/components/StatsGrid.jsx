import { Info, ArrowRight } from 'lucide-react'
import { c, shadow } from '../theme'

function Trend({ value, positive }) {
  return (
    <span style={{ fontSize: 12, fontWeight: 700, color: positive ? c.up : c.down }}>
      {positive ? '▲' : '▼'} {value}
    </span>
  )
}

function SplitBar({ greenPct }) {
  return (
    <div style={{ display: 'flex', height: 8, borderRadius: 99, overflow: 'hidden', background: c.track }}>
      <div style={{
        width: `${greenPct}%`,
        background: c.green,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 4px)',
      }} />
      <div style={{ flex: 1, background: c.amber }} />
    </div>
  )
}

function LegendRow({ color, label, value, trend, positive }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: 99, background: color }} />
        <span style={{ fontSize: 12, color: c.body }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: c.ink }}>{value}</span>
        {trend != null && <Trend value={trend} positive={positive} />}
      </div>
    </div>
  )
}

export default function StatsGrid() {
  return (
    <section style={{ marginBottom: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>

        {/* 오늘 방문자 수 */}
        <div style={cardStyle}>
          <p style={labelStyle}>오늘 방문자 수 <Info size={12} color={c.faint} style={infoIcon} /></p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8, marginBottom: 16 }}>
            <span style={bigNum}>501</span>
            <Trend value="9" positive />
          </div>
          <SplitBar greenPct={60} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            <LegendRow color={c.green} label="신규" value="300" trend="12" positive />
            <LegendRow color={c.amber} label="재방문" value="201" trend="8" positive={false} />
          </div>
        </div>

        {/* 전체 회원수 */}
        <div style={cardStyle}>
          <p style={labelStyle}>전체 회원수 <Info size={12} color={c.faint} style={infoIcon} /></p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8 }}>
            <span style={bigNum}>2,001</span>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${c.border}`, paddingTop: 12 }}>
              <span style={{ fontSize: 12, color: c.body }}>신규 가입</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: c.primary }}>12</span>
            </div>
          </div>
        </div>

        {/* 오늘 매출 */}
        <div style={cardStyle}>
          <p style={labelStyle}>오늘 매출</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8, marginBottom: 4 }}>
            <span style={{ ...bigNum, fontSize: 28 }}>₩1,434,228</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
            <span style={{ fontSize: 12, color: c.muted }}>전일 대비</span>
            <Trend value="₩395,738" positive />
          </div>
          <SplitBar greenPct={45} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            <LegendRow color={c.green} label="신규" value="₩640,000" />
            <LegendRow color={c.amber} label="재구매" value="₩794,228" />
          </div>
        </div>

        {/* 전환율 */}
        <div style={cardStyle}>
          <p style={labelStyle}>전환율</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8, marginBottom: 12 }}>
            <span style={bigNum}>2.1<span style={{ fontSize: 20, fontWeight: 700 }}>%</span></span>
          </div>
          <p style={{ fontSize: 12, color: c.body, lineHeight: 1.6, marginBottom: 14 }}>
            전환율을 개선하세요. 같은 업종 매장은 캠페인으로<br />
            평균 전환율을 <b style={{ color: c.primary }}>0.1%p</b> 개선했어요.
          </p>
          <button
            style={improveBtn}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(170,190,90,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = improveBtn.boxShadow }}
          >
            개선하러 가기 <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  )
}

const cardStyle = {
  background: c.card,
  border: `1px solid ${c.border}`,
  borderRadius: 16,
  padding: '18px 20px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: shadow.card,
}

const labelStyle = {
  fontSize: 13,
  color: c.body,
  fontWeight: 600,
}

const bigNum = {
  fontSize: 34,
  fontWeight: 800,
  color: c.ink,
  letterSpacing: -1,
  lineHeight: 1,
}

const infoIcon = { display: 'inline', verticalAlign: 'middle', marginLeft: 2 }

const improveBtn = {
  display: 'inline-flex',
  alignSelf: 'flex-start',
  alignItems: 'center',
  gap: 6,
  marginTop: 'auto',
  padding: '9px 16px',
  borderRadius: 10,
  border: 'none',
  background: `linear-gradient(135deg, ${c.lime}, ${c.limeDark})`,
  color: c.primaryDark,
  fontSize: 13,
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(170,190,90,0.4)',
  transition: 'transform 0.15s, box-shadow 0.15s',
}

import { Info, ArrowRight } from 'lucide-react'

const PRIMARY = '#1B4332'
const GREEN = '#2D6A4F'
const GOLD = '#E0B84C'

function Trend({ value, positive }) {
  return (
    <span style={{ fontSize: 12, fontWeight: 700, color: positive ? '#2D6A4F' : '#C26A4A' }}>
      {positive ? '▲' : '▼'} {value}
    </span>
  )
}

function SplitBar({ greenPct }) {
  return (
    <div style={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden', background: '#EDF0EE' }}>
      <div style={{ width: `${greenPct}%`, background: GREEN }} />
      <div style={{ flex: 1, background: GOLD }} />
    </div>
  )
}

function LegendRow({ color, label, value, trend, positive }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
        <span style={{ fontSize: 12, color: '#7A8A80' }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#2E3D34' }}>{value}</span>
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
          <p style={labelStyle}>오늘 방문자 수 <Info size={12} color="#B5C0B9" style={infoIcon} /></p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8, marginBottom: 16 }}>
            <span style={bigNum}>501</span>
            <Trend value="9" positive />
          </div>
          <SplitBar greenPct={60} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            <LegendRow color={GREEN} label="신규" value="300" trend="12" positive />
            <LegendRow color={GOLD} label="재방문" value="201" trend="8" positive={false} />
          </div>
        </div>

        {/* 전체 회원수 */}
        <div style={cardStyle}>
          <p style={labelStyle}>전체 회원수 <Info size={12} color="#B5C0B9" style={infoIcon} /></p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8 }}>
            <span style={bigNum}>2,001</span>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F0F3F1', paddingTop: 12 }}>
              <span style={{ fontSize: 12, color: '#7A8A80' }}>신규 가입</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: PRIMARY }}>12</span>
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
            <span style={{ fontSize: 12, color: '#A7B2AB' }}>전일 대비</span>
            <Trend value="₩395,738" positive />
          </div>
          <SplitBar greenPct={45} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            <LegendRow color={GREEN} label="신규" value="₩640,000" />
            <LegendRow color={GOLD} label="재구매" value="₩794,228" />
          </div>
        </div>

        {/* 전환율 */}
        <div style={cardStyle}>
          <p style={labelStyle}>전환율</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8, marginBottom: 12 }}>
            <span style={bigNum}>2.1<span style={{ fontSize: 20, fontWeight: 700 }}>%</span></span>
          </div>
          <p style={{ fontSize: 12, color: '#7A8A80', lineHeight: 1.6, marginBottom: 14 }}>
            전환율을 개선하세요. 같은 업종 매장은 캠페인으로<br />
            평균 전환율을 <b style={{ color: PRIMARY }}>0.1%p</b> 개선했어요.
          </p>
          <button style={improveBtn}
            onMouseEnter={e => { e.currentTarget.style.background = '#163828' }}
            onMouseLeave={e => { e.currentTarget.style.background = PRIMARY }}
          >
            개선하러 가기 <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  )
}

const cardStyle = {
  background: '#fff',
  border: '1px solid #ECEFED',
  borderRadius: 14,
  padding: '18px 20px',
  display: 'flex',
  flexDirection: 'column',
}

const labelStyle = {
  fontSize: 13,
  color: '#5A6B61',
  fontWeight: 600,
}

const bigNum = {
  fontSize: 34,
  fontWeight: 800,
  color: '#1B2B22',
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
  borderRadius: 8,
  border: 'none',
  background: PRIMARY,
  color: '#fff',
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background 0.15s',
}

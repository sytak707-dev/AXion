import { Users, Monitor, Smartphone, ShoppingBag, ArrowRight, Info } from 'lucide-react'

const PRIMARY = '#1B4332'

function Trend({ value, positive }) {
  return (
    <span style={{
      fontSize: 11,
      fontWeight: 600,
      color: positive ? '#2D6A4F' : '#B07A5B',
    }}>
      {positive ? '▲' : '▼'} {value}
    </span>
  )
}

function MiniBar({ leftPct }) {
  return (
    <div style={{ display: 'flex', height: 5, borderRadius: 3, overflow: 'hidden', background: '#EDF0EE', marginTop: 8, marginBottom: 2 }}>
      <div style={{ width: `${leftPct}%`, background: PRIMARY }} />
      <div style={{ flex: 1, background: '#B9CABF' }} />
    </div>
  )
}

export default function SiteOverview() {
  return (
    <section style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#1B2B22' }}>사이트 현황</h2>
        <span style={{ fontSize: 11, color: '#A7B2AB' }}>데이터 기준일 2026. 6. 8. <Info size={11} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12 }}>
        {/* 전체 고객수 */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <p style={labelStyle}>전체 고객수 <Info size={11} color="#B5C0B9" style={{ display: 'inline', verticalAlign: 'middle' }} /></p>
            <div style={iconBox}>
              <Users size={14} color="#5A6B61" strokeWidth={1.8} />
            </div>
          </div>
          <p style={bigNumStyle}>1,311</p>
          <div style={{ marginTop: 12, borderTop: '1px solid #F0F3F1', paddingTop: 10 }}>
            <div style={subRowStyle}>
              <span style={subLabelStyle}>전화번호 보유</span>
              <span style={subValStyle}>1,301</span>
            </div>
            <div style={subRowStyle}>
              <span style={subLabelStyle}>이메일 보유</span>
              <span style={subValStyle}>1,311</span>
            </div>
          </div>
        </div>

        {/* DAU */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <p style={labelStyle}>DAU <Info size={11} color="#B5C0B9" style={{ display: 'inline', verticalAlign: 'middle' }} /></p>
            <div style={iconBox}>
              <Monitor size={14} color="#5A6B61" strokeWidth={1.8} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
            <p style={bigNumStyle}>441</p>
            <Trend value="9" positive />
          </div>
          <p style={{ fontSize: 10, color: '#A7B2AB', marginBottom: 6 }}>전일 대비</p>
          <MiniBar leftPct={66} />
          <div style={{ marginTop: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: 2, background: PRIMARY }} />
                <span style={subLabelStyle}>신규</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={subValStyle}>292</span>
                <Trend value="12" positive />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: 2, background: '#B9CABF' }} />
                <span style={subLabelStyle}>재방문</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={subValStyle}>149</span>
                <Trend value="21" positive={false} />
              </div>
            </div>
          </div>
        </div>

        {/* 매출액 */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <p style={labelStyle}>매출액</p>
            <div style={iconBox}>
              <ShoppingBag size={14} color="#5A6B61" strokeWidth={1.8} />
            </div>
          </div>
          <p style={{ ...bigNumStyle, fontSize: 18 }}>₩1,434,238</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, marginBottom: 8 }}>
            <Trend value="₩395,738" positive />
            <span style={{ fontSize: 10, color: '#A7B2AB' }}>전일 대비</span>
          </div>
          <MiniBar leftPct={3} />
          <div style={{ marginTop: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Monitor size={11} color="#A7B2AB" />
                <span style={subLabelStyle}>PC</span>
              </div>
              <span style={subValStyle}>₩44,000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Smartphone size={11} color="#A7B2AB" />
                <span style={subLabelStyle}>모바일</span>
              </div>
              <span style={subValStyle}>₩1,390,238</span>
            </div>
          </div>
        </div>

        {/* 숨은 매출 찾기 */}
        <div style={{ ...cardStyle, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
            <span style={{
              background: '#F2F4F3',
              color: '#5A6B61',
              fontSize: 9,
              fontWeight: 700,
              padding: '2px 7px',
              borderRadius: 4,
              letterSpacing: 0.5,
            }}>PICK</span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              fontSize: 11,
              color: PRIMARY,
              fontWeight: 600,
            }}>확인하기 <ArrowRight size={11} /></span>
          </div>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#1B2B22', lineHeight: 1.45, marginBottom: 10 }}>
            놓치고 있던 매출과<br />숨어 있는 상품을 찾아드려요
          </p>
          <div style={{ borderTop: '1px solid #F0F3F1', paddingTop: 10, marginTop: 'auto' }}>
            <p style={{ fontSize: 10, color: '#A7B2AB', marginBottom: 7 }}>예상 추가 매출</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {[
                { label: '상품 추천 CTA', amount: '₩330,000' },
                { label: '장바구니 알림', amount: '₩120,000' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: '#97A39C' }}>{item.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: PRIMARY }}>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const cardStyle = {
  background: '#fff',
  border: '1px solid #ECEFED',
  borderRadius: 12,
  padding: '16px',
}

const labelStyle = {
  fontSize: 12,
  color: '#7A8A80',
  fontWeight: 500,
}

const bigNumStyle = {
  fontSize: 26,
  fontWeight: 800,
  color: '#1B2B22',
  letterSpacing: -0.8,
  lineHeight: 1,
}

const subRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 5,
}

const subLabelStyle = {
  fontSize: 11,
  color: '#97A39C',
}

const subValStyle = {
  fontSize: 12,
  fontWeight: 600,
  color: '#2E3D34',
}

const iconBox = {
  width: 30,
  height: 30,
  background: '#F2F4F3',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

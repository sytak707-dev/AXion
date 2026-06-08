import { Users, TrendingUp, TrendingDown, Monitor, Smartphone, ShoppingBag, ArrowRight, Info } from 'lucide-react'

const PRIMARY = '#1B4332'

function StatBadge({ value, positive }) {
  const color = positive ? '#16A34A' : '#DC2626'
  const bg = positive ? '#DCFCE7' : '#FEE2E2'
  const Icon = positive ? TrendingUp : TrendingDown
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      background: bg,
      color,
      fontSize: 10,
      fontWeight: 600,
      padding: '2px 6px',
      borderRadius: 4,
    }}>
      <Icon size={10} strokeWidth={2.5} />
      {value}
    </span>
  )
}

function MiniBar({ leftPct, leftColor, rightColor }) {
  return (
    <div style={{ display: 'flex', height: 5, borderRadius: 3, overflow: 'hidden', background: '#F0F3F1', marginTop: 8, marginBottom: 2 }}>
      <div style={{ width: `${leftPct}%`, background: leftColor, borderRadius: '3px 0 0 3px' }} />
      <div style={{ flex: 1, background: rightColor }} />
    </div>
  )
}

export default function SiteOverview() {
  return (
    <section style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#0F2B1F' }}>사이트 현황</h2>
        <span style={{ fontSize: 11, color: '#9AADA2' }}>데이터 기준일 2026. 6. 8. <Info size={11} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12 }}>
        {/* 전체 고객수 */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <p style={labelStyle}>전체 고객수 <Info size={11} color="#9AADA2" style={{ display: 'inline', verticalAlign: 'middle' }} /></p>
            <div style={iconBox('#DCFCE7')}>
              <Users size={14} color="#16A34A" />
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
            <p style={labelStyle}>DAU <Info size={11} color="#9AADA2" style={{ display: 'inline', verticalAlign: 'middle' }} /></p>
            <div style={iconBox('#E0F2FE')}>
              <Monitor size={14} color="#0284C7" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <p style={bigNumStyle}>441</p>
            <StatBadge value="▲ 9" positive />
          </div>
          <p style={{ fontSize: 10, color: '#9AADA2', marginBottom: 8 }}>전일 대비</p>
          <MiniBar leftPct={66} leftColor={PRIMARY} rightColor="#52B788" />
          <div style={{ marginTop: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: 2, background: PRIMARY }} />
                <span style={subLabelStyle}>신규</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={subValStyle}>292</span>
                <StatBadge value="▲ 12" positive />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: 2, background: '#52B788' }} />
                <span style={subLabelStyle}>재방문</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={subValStyle}>149</span>
                <StatBadge value="▼ 21" positive={false} />
              </div>
            </div>
          </div>
        </div>

        {/* 매출액 */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <p style={labelStyle}>매출액</p>
            <div style={iconBox('#FEF3C7')}>
              <ShoppingBag size={14} color="#D97706" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <p style={{ ...bigNumStyle, fontSize: 18 }}>₩1,434,238</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <StatBadge value="▲ ₩395,738" positive />
            <span style={{ fontSize: 10, color: '#9AADA2' }}>전일 대비</span>
          </div>
          <MiniBar leftPct={3} leftColor="#E5E7EB" rightColor={PRIMARY} />
          <div style={{ marginTop: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Monitor size={11} color="#9AADA2" />
                <span style={subLabelStyle}>PC</span>
              </div>
              <div>
                <span style={subValStyle}>₩44,000</span>
                <span style={{ fontSize: 10, color: '#9AADA2', marginLeft: 4 }}>전일 대비 ₩44,000</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Smartphone size={11} color="#9AADA2" />
                <span style={subLabelStyle}>모바일</span>
              </div>
              <div>
                <span style={subValStyle}>₩1,390,238</span>
                <span style={{ fontSize: 10, color: '#9AADA2', marginLeft: 4 }}>전일 대비 ₩351,738</span>
              </div>
            </div>
          </div>
        </div>

        {/* 숨은 매출 찾기 */}
        <div style={{
          ...cardStyle,
          background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
          border: 'none',
          cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
            <span style={{
              background: '#52B788',
              color: '#fff',
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
              color: '#A7F3D0',
              cursor: 'pointer',
            }}>숨은 매출 확인하기 <ArrowRight size={11} /></span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 8 }}>
            놓치고 있던 매출과<br />숨어 있는 상품을 찾아드려요
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.12)',
            borderRadius: 8,
            padding: '10px 12px',
          }}>
            <p style={{ fontSize: 10, color: '#A7F3D0', marginBottom: 6 }}>예상 추가 매출</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {[
                { label: '상품 추천 CTA', amount: '₩330,000', change: '₩33,046,017' },
                { label: '장바구니 알림', amount: '₩120,000', change: '₩13,464,017' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 10, color: '#D1FAE5' }}>{item.label}</span>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>{item.amount}</p>
                    <p style={{ fontSize: 9, color: '#A7F3D0' }}>{item.change}</p>
                  </div>
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
  border: '1px solid #E8EDE9',
  borderRadius: 12,
  padding: '16px',
}

const labelStyle = {
  fontSize: 12,
  color: '#7A9183',
  fontWeight: 500,
}

const bigNumStyle = {
  fontSize: 26,
  fontWeight: 800,
  color: '#0F2B1F',
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
  color: '#9AADA2',
}

const subValStyle = {
  fontSize: 12,
  fontWeight: 600,
  color: '#1a2e22',
}

function iconBox(bg) {
  return {
    width: 30,
    height: 30,
    background: bg,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }
}

import { ArrowRight } from 'lucide-react'
import Page from '../Page'
import { Card, SectionTitle } from '../ui'
import { c, shadow } from '../../theme'

const churnPoints = [
  {
    stage: '상품 조회 → 장바구니',
    count: 4130,
    rate: '57.0%',
    desc: '상품을 봤지만 장바구니에 담지 않고 이탈',
    segment: '신규 방문 고객',
  },
  {
    stage: '장바구니 → 결제 시작',
    count: 1830,
    rate: '58.8%',
    desc: '장바구니에 담았으나 결제로 넘어가지 않음',
    segment: '재방문 · 가격 민감 고객',
  },
  {
    stage: '결제 시작 → 구매 완료',
    count: 768,
    rate: '60.0%',
    desc: '결제를 시작했으나 완료하지 않고 이탈',
    segment: '결제 단계 이탈 고객',
  },
  {
    stage: '구매 후 30일 미방문',
    count: 312,
    rate: '—',
    desc: '첫 구매 후 30일간 재방문이 없는 고객',
    segment: '이탈 위험 고객',
  },
]

export default function ChurnPage() {
  return (
    <Page title="애널리틱스 · 이탈 고객 분석">
      <SectionTitle>단계별 이탈 지점</SectionTitle>
      <p style={{ fontSize: 13, color: c.body, marginBottom: 16, marginTop: -6 }}>
        어느 단계에서 어떤 고객이 이탈했는지 확인하고, 바로 개선 캠페인을 실행하세요.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {churnPoints.map(p => (
          <Card key={p.stage} style={{ padding: '16px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, flex: 1, minWidth: 0 }}>
                <div style={{ minWidth: 92 }}>
                  <p style={{ fontSize: 24, fontWeight: 800, color: c.up, letterSpacing: -0.5 }}>
                    {p.count.toLocaleString()}
                  </p>
                  <p style={{ fontSize: 11, color: c.muted }}>이탈 고객</p>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: c.ink }}>{p.stage}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 600, color: c.primary,
                      background: c.primarySoft, padding: '2px 8px', borderRadius: 6,
                    }}>{p.segment}</span>
                  </div>
                  <p style={{ fontSize: 12, color: c.muted }}>{p.desc}</p>
                </div>
              </div>
              <button
                style={improveBtn}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(36,177,105,0.34)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = shadow.btn }}
              >
                이탈 개선하기 <ArrowRight size={14} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Page>
  )
}

const improveBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  flexShrink: 0,
  padding: '10px 16px',
  borderRadius: 10,
  border: 'none',
  background: `linear-gradient(135deg, ${c.primary}, ${c.primaryDark})`,
  color: '#fff',
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: shadow.btn,
  transition: 'transform 0.15s, box-shadow 0.15s',
  whiteSpace: 'nowrap',
}

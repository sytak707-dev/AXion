import Page from '../Page'
import { Card, SectionTitle } from '../ui'
import { c } from '../../theme'

const stages = [
  { name: '방문', count: 12480, color: '#1A8C52' },
  { name: '상품 조회', count: 7240, color: '#24B169' },
  { name: '장바구니 담기', count: 3110, color: '#46C485' },
  { name: '결제 시작', count: 1280, color: '#79D6A8' },
  { name: '구매 완료', count: 512, color: '#A9E6C8' },
]

export default function FunnelPage() {
  const top = stages[0].count
  const overall = ((stages[stages.length - 1].count / top) * 100).toFixed(1)

  return (
    <Page title="애널리틱스 · 퍼널">
      <SectionTitle>구매 전환 퍼널</SectionTitle>
      <Card sub={`최근 30일 · 전체 전환율 ${overall}%`} title="단계별 전환 흐름">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
          {stages.map((s, i) => {
            const widthPct = (s.count / top) * 100
            const prev = i === 0 ? null : stages[i - 1].count
            const conv = prev ? ((s.count / prev) * 100).toFixed(1) : null
            return (
              <div key={s.name}>
                {conv && (
                  <div style={{ textAlign: 'center', fontSize: 11, color: c.muted, padding: '2px 0' }}>
                    ↓ 전환율 <b style={{ color: c.primary }}>{conv}%</b>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    width: `${widthPct}%`,
                    minWidth: 180,
                    background: s.color,
                    borderRadius: 10,
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#fff',
                    transition: 'width 0.3s',
                  }}>
                    <span style={{ fontSize: 14, fontWeight: 700 }}>{s.name}</span>
                    <span style={{ fontSize: 16, fontWeight: 800 }}>{s.count.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </Page>
  )
}

import Page from './Page'
import { Card, SectionTitle, Trend } from './ui'
import { LineChart, BarChart, Donut } from './analytics/charts'
import { c } from '../theme'

const kpis = [
  { label: '총 발송수', value: '18,940', trend: '6.2%', positive: true },
  { label: '평균 도달률', value: '97.4%', trend: '0.3%p', positive: true },
  { label: '평균 오픈율', value: '42.1%', trend: '1.8%p', positive: true },
  { label: '평균 클릭률', value: '9.3%', trend: '0.5%p', positive: false },
]

const sent = [2100, 2480, 2310, 2890, 3120, 2740, 3300]
const days = ['월', '화', '수', '목', '금', '토', '일']

const channelShare = [
  { name: '알림톡', value: 8200, color: '#1A8C52' },
  { name: '브랜드 메시지', value: 6100, color: '#9333EA' },
  { name: '문자', value: 2940, color: '#0F5AF0' },
  { name: '이메일', value: 1700, color: '#B7791F' },
]

const ctrByChannel = [12.4, 9.8, 6.1, 4.7]
const channelLabels = ['알림톡', '브랜드', '문자', '이메일']

const campaignPerf = [
  { name: '만료 예정 쿠폰 알림', channel: '알림톡', sent: 4210, open: 51.2, ctr: 14.3, conv: 412 },
  { name: '장바구니 미구매 리마인드', channel: '브랜드 메시지', sent: 3680, open: 44.1, ctr: 11.2, conv: 268 },
  { name: '가입 첫 구매 유도', channel: '브랜드 메시지', sent: 5400, open: 38.6, ctr: 8.9, conv: 324 },
  { name: '관심 상품 할인 안내', channel: '문자', sent: 2440, open: 33.2, ctr: 6.1, conv: 96 },
  { name: '재구매 주기 리마인드', channel: '이메일', sent: 1320, open: 47.5, ctr: 9.4, conv: 78 },
]

export default function MessageStats() {
  const total = channelShare.reduce((s, x) => s + x.value, 0)

  return (
    <Page title="메시지 통계">
      <SectionTitle>핵심 성과</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
        {kpis.map(k => (
          <Card key={k.label}>
            <p style={{ fontSize: 13, color: c.body, fontWeight: 600, marginBottom: 10 }}>{k.label}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: c.ink, letterSpacing: -0.8 }}>{k.value}</span>
              <Trend value={k.trend} positive={k.positive} />
            </div>
            <p style={{ fontSize: 11, color: c.muted, marginTop: 6 }}>전주 대비</p>
          </Card>
        ))}
      </div>

      <SectionTitle>추이 분석</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, marginBottom: 28 }}>
        <Card title="일별 발송수 추이" sub="최근 7일">
          <LineChart data={sent} labels={days} />
        </Card>
        <Card title="채널별 클릭률" sub="단위: %">
          <BarChart data={ctrByChannel} labels={channelLabels} format={v => `${v}%`} />
        </Card>
      </div>

      <SectionTitle>채널 분포 · 캠페인별 성과</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.6fr', gap: 14 }}>
        <Card title="채널별 발송 비중" sub={`전체 ${total.toLocaleString()}건`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center', padding: '8px 0' }}>
            <div style={{ position: 'relative' }}>
              <Donut segments={channelShare} />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: c.ink }}>{(total / 1000).toFixed(1)}k</span>
                <span style={{ fontSize: 11, color: c.muted }}>총 발송</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {channelShare.map(s => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color }} />
                  <span style={{ fontSize: 12, color: c.body, minWidth: 78 }}>{s.name}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: c.ink }}>{((s.value / total) * 100).toFixed(0)}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card style={{ padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${c.border}` }}>
                {[
                  { label: '캠페인 이름', align: 'left' },
                  { label: '채널', align: 'left' },
                  { label: '발송수', align: 'right' },
                  { label: '오픈율', align: 'right' },
                  { label: '클릭률', align: 'right' },
                  { label: '전환수', align: 'right' },
                ].map(col => (
                  <th key={col.label} style={{
                    padding: '14px 16px', textAlign: col.align, fontSize: 11,
                    fontWeight: 600, color: c.muted, whiteSpace: 'nowrap',
                  }}>{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {campaignPerf.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: idx < campaignPerf.length - 1 ? `1px solid ${c.bg}` : 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = c.bg}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '13px 16px', fontSize: 12.5, fontWeight: 600, color: c.ink }}>{row.name}</td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.body, whiteSpace: 'nowrap' }}>{row.channel}</td>
                  <td style={{ padding: '13px 16px', textAlign: 'right', fontSize: 12, color: c.body }}>{row.sent.toLocaleString()}</td>
                  <td style={{ padding: '13px 16px', textAlign: 'right', fontSize: 12, color: c.body }}>{row.open}%</td>
                  <td style={{ padding: '13px 16px', textAlign: 'right', fontSize: 12, fontWeight: 700, color: c.primary }}>{row.ctr}%</td>
                  <td style={{ padding: '13px 16px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: c.ink }}>{row.conv.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </Page>
  )
}

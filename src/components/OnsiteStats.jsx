import Page from './Page'
import { Card, SectionTitle, Trend } from './ui'
import { LineChart, BarChart } from './analytics/charts'
import { c } from '../theme'

const kpis = [
  { label: '총 노출수', value: '64,210', trend: '8.4%', positive: true },
  { label: '총 클릭수', value: '4,318', trend: '5.1%', positive: true },
  { label: '평균 클릭률', value: '6.7%', trend: '0.4%p', positive: true },
  { label: '전환수', value: '892', trend: '2.3%', positive: false },
]

const impressions = [7820, 8910, 9040, 8680, 10230, 11340, 12190]
const days = ['월', '화', '수', '목', '금', '토', '일']

const ctrByType = [8.2, 5.4, 6.9, 3.1, 11.4]
const typeLabels = ['팝업', '띠배너', '슬라이드인', '플로팅', '전면배너']

const campaignPerf = [
  { name: '여름 시즌 세일 띠배너', type: '띠배너', impr: 24190, clicks: 1306, ctr: 5.4, conv: 218 },
  { name: '첫 방문 웰컴 쿠폰 팝업', type: '팝업', impr: 12480, clicks: 1023, ctr: 8.2, conv: 287 },
  { name: '회원가입 혜택 안내 팝업', type: '팝업', impr: 9870, clicks: 809, ctr: 8.2, conv: 164 },
  { name: '장바구니 이탈 방지 슬라이드인', type: '슬라이드인', impr: 8210, clicks: 566, ctr: 6.9, conv: 142 },
  { name: '앱 설치 유도 플로팅', type: '플로팅', impr: 5340, clicks: 166, ctr: 3.1, conv: 48 },
]

export default function OnsiteStats() {
  return (
    <Page title="온사이트 통계">
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
        <Card title="일별 노출수 추이" sub="최근 7일">
          <LineChart data={impressions} labels={days} />
        </Card>
        <Card title="유형별 클릭률" sub="단위: %">
          <BarChart data={ctrByType} labels={typeLabels} format={v => `${v}%`} />
        </Card>
      </div>

      <SectionTitle>캠페인별 성과</SectionTitle>
      <Card style={{ padding: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${c.border}` }}>
              {[
                { label: '캠페인 이름', align: 'left' },
                { label: '유형', align: 'left' },
                { label: '노출수', align: 'right' },
                { label: '클릭수', align: 'right' },
                { label: '클릭률', align: 'right' },
                { label: '전환수', align: 'right' },
              ].map(col => (
                <th key={col.label} style={{
                  padding: '14px 18px', textAlign: col.align, fontSize: 11,
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
                <td style={{ padding: '13px 18px', fontSize: 12.5, fontWeight: 600, color: c.ink }}>{row.name}</td>
                <td style={{ padding: '13px 18px', fontSize: 12, color: c.body }}>{row.type}</td>
                <td style={{ padding: '13px 18px', textAlign: 'right', fontSize: 12, color: c.body }}>{row.impr.toLocaleString()}</td>
                <td style={{ padding: '13px 18px', textAlign: 'right', fontSize: 12, color: c.body }}>{row.clicks.toLocaleString()}</td>
                <td style={{ padding: '13px 18px', textAlign: 'right', fontSize: 12, fontWeight: 700, color: c.primary }}>{row.ctr}%</td>
                <td style={{ padding: '13px 18px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: c.ink }}>{row.conv.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Page>
  )
}

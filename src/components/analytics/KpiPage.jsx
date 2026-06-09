import Page from '../Page'
import { Card, SectionTitle, Trend } from '../ui'
import { LineChart, BarChart } from './charts'
import { c } from '../../theme'

const kpis = [
  { label: '전환율', value: '2.1%', trend: '0.3%p', positive: true },
  { label: '객단가', value: '₩38,200', trend: '₩2,100', positive: true },
  { label: '재구매율', value: '34.0%', trend: '1.2%p', positive: false },
  { label: '신규 방문', value: '501', trend: '9', positive: true },
]

const revenue = [820, 910, 1040, 980, 1230, 1434]
const months = ['1월', '2월', '3월', '4월', '5월', '6월']

const channelConv = [128, 92, 47, 33, 64]
const channelLabels = ['알림톡', '브랜드', '문자', '이메일', '온사이트']

export default function KpiPage() {
  return (
    <Page title="애널리틱스 · KPI">
      {/* 핵심 지표 */}
      <SectionTitle>핵심 지표</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
        {kpis.map(k => (
          <Card key={k.label}>
            <p style={{ fontSize: 13, color: c.body, fontWeight: 600, marginBottom: 10 }}>{k.label}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: c.ink, letterSpacing: -0.8 }}>{k.value}</span>
              <Trend value={k.trend} positive={k.positive} />
            </div>
            <p style={{ fontSize: 11, color: c.muted, marginTop: 6 }}>전월 대비</p>
          </Card>
        ))}
      </div>

      {/* 주요 지표 시각화 */}
      <SectionTitle>주요 지표</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
        <Card title="월별 매출 추이" sub="단위: 천원">
          <LineChart data={revenue} labels={months} />
        </Card>
        <Card title="채널별 전환 수" sub="최근 7일">
          <BarChart data={channelConv} labels={channelLabels} />
        </Card>
      </div>
    </Page>
  )
}

import Page from '../Page'
import { Card, SectionTitle } from '../ui'
import { Donut } from './charts'
import { c } from '../../theme'

const segments = [
  { name: 'VIP', value: 142, color: '#1A8C52', desc: '월 3회 이상 구매' },
  { name: '충성 고객', value: 386, color: '#24B169', desc: '최근 30일 내 재구매' },
  { name: '일반', value: 824, color: '#79D6A8', desc: '1회 이상 구매' },
  { name: '신규', value: 431, color: '#C9E29A', desc: '최근 7일 가입' },
  { name: '휴면', value: 218, color: '#D9DEDA', desc: '60일 이상 미방문' },
]

export default function SegmentPage() {
  const total = segments.reduce((s, x) => s + x.value, 0)

  return (
    <Page title="애널리틱스 · 세그먼트">
      <SectionTitle>고객 세그먼트 분포</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 14 }}>
        <Card title="세그먼트 비중" sub={`전체 ${total.toLocaleString()}명`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, justifyContent: 'center', padding: '8px 0' }}>
            <div style={{ position: 'relative' }}>
              <Donut segments={segments} />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: c.ink }}>{total.toLocaleString()}</span>
                <span style={{ fontSize: 11, color: c.muted }}>총 고객</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {segments.map(s => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color }} />
                  <span style={{ fontSize: 12, color: c.body, minWidth: 64 }}>{s.name}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: c.ink }}>
                    {((s.value / total) * 100).toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card title="세그먼트 상세">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {segments.map(s => (
              <div key={s.name}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: c.ink }}>{s.name}</span>
                    <span style={{ fontSize: 11, color: c.muted }}>{s.desc}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: c.ink }}>{s.value.toLocaleString()}명</span>
                </div>
                <div style={{ height: 8, borderRadius: 99, background: c.track, overflow: 'hidden' }}>
                  <div style={{ width: `${(s.value / total) * 100}%`, height: '100%', background: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Page>
  )
}

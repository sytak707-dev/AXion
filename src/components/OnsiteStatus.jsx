import { useState } from 'react'
import Page from './Page'
import { SectionTitle, Toggle, Badge } from './ui'
import { c, shadow } from '../theme'

const typeColors = {
  '팝업': { color: '#1A8C52', soft: '#E6F5EC' },
  '띠배너': { color: '#0F5AF0', soft: '#E6EEFE' },
  '슬라이드인': { color: '#B7791F', soft: '#FBF1D9' },
  '플로팅': { color: '#9333EA', soft: '#F1E6FB' },
  '전면배너': { color: '#DE213D', soft: '#FBE3E7' },
}

const initialCampaigns = [
  { name: '첫 방문 고객 웰컴 쿠폰 팝업', type: '팝업', position: '메인 상단', period: '2026.06.01 ~ 06.30', impressions: 12480, on: true },
  { name: '장바구니 이탈 방지 슬라이드인', type: '슬라이드인', position: '장바구니', period: '상시', impressions: 8210, on: true },
  { name: '여름 시즌 세일 띠배너', type: '띠배너', position: '전 페이지 상단', period: '2026.06.05 ~ 06.20', impressions: 24190, on: true },
  { name: '앱 설치 유도 플로팅 버튼', type: '플로팅', position: '모바일 우하단', period: '상시', impressions: 5340, on: false },
  { name: '회원가입 혜택 안내 팝업', type: '팝업', position: '메인 상단', period: '상시', impressions: 9870, on: true },
  { name: '재고 소진 임박 상품 알림 띠배너', type: '띠배너', position: '상품 상세', period: '2026.06.08 ~ 06.15', impressions: 4120, on: false },
  { name: '신규 컬렉션 런칭 전면배너', type: '전면배너', position: '메인 진입', period: '2026.06.10 ~ 06.12', impressions: 0, on: false },
]

export default function OnsiteStatus() {
  const [campaigns, setCampaigns] = useState(initialCampaigns)

  const toggle = (idx) => setCampaigns(prev =>
    prev.map((cmp, i) => i === idx ? { ...cmp, on: !cmp.on } : cmp))

  const liveCount = campaigns.filter(c => c.on).length

  return (
    <Page title="온사이트 현황">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <SectionTitle style={{ marginBottom: 0 }}>온사이트 캠페인 목록</SectionTitle>
        <span style={{ fontSize: 12, color: c.muted }}>
          진행 중 <b style={{ color: c.primary, fontWeight: 800 }}>{liveCount}</b> / 전체 {campaigns.length}
        </span>
      </div>

      <div style={{
        background: c.card, border: `1px solid ${c.border}`, borderRadius: 14,
        overflow: 'hidden', boxShadow: shadow.card,
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${c.border}` }}>
              {[
                { label: '진행', align: 'center', w: 70 },
                { label: '캠페인 이름', align: 'left' },
                { label: '유형', align: 'left' },
                { label: '노출 위치', align: 'left' },
                { label: '노출 기간', align: 'left' },
                { label: '누적 노출수', align: 'right' },
              ].map(col => (
                <th key={col.label} style={{
                  padding: '12px 16px', textAlign: col.align, fontSize: 11,
                  fontWeight: 600, color: c.muted, whiteSpace: 'nowrap', width: col.w,
                }}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaigns.map((cmp, idx) => {
              const tc = typeColors[cmp.type] || {}
              return (
                <tr key={idx} style={{
                  borderBottom: idx < campaigns.length - 1 ? `1px solid ${c.bg}` : 'none',
                  opacity: cmp.on ? 1 : 0.6, transition: 'opacity 0.15s, background 0.12s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = c.bg}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '13px 16px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex' }}>
                      <Toggle on={cmp.on} onChange={() => toggle(idx)} />
                    </div>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 12.5, fontWeight: 600, color: c.ink, maxWidth: 300 }}>
                    {cmp.name}
                  </td>
                  <td style={{ padding: '13px 16px' }}>
                    <Badge color={tc.color} soft={tc.soft}>{cmp.type}</Badge>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.body, whiteSpace: 'nowrap' }}>{cmp.position}</td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.muted, whiteSpace: 'nowrap' }}>{cmp.period}</td>
                  <td style={{ padding: '13px 16px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: c.ink, whiteSpace: 'nowrap' }}>
                    {cmp.impressions.toLocaleString()}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Page>
  )
}

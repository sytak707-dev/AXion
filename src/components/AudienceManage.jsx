import { useState } from 'react'
import { Users } from 'lucide-react'
import Page from './Page'
import { SectionTitle, Toggle, Badge } from './ui'
import { c, shadow } from '../theme'

const sourceColors = {
  'AI 생성': { color: '#9333EA', soft: '#F1E6FB' },
  '수동': { color: '#0F5AF0', soft: '#E6EEFE' },
}

const initialAudiences = [
  { name: '장바구니 이탈 고가 관심 고객', source: 'AI 생성', summary: '14일 내 3회+ 조회 · 미구매 · 객단가 5만+', reach: 1840, created: '2026.06.08', on: true },
  { name: '재구매 주기 임박 충성 고객', source: 'AI 생성', summary: '재구매 주기 90% 도달 · 최근 30일 활동', reach: 920, created: '2026.06.06', on: true },
  { name: '신규 가입 미구매 회원', source: 'AI 생성', summary: '가입 30일 이내 · 구매 0건 · 수신 동의', reach: 540, created: '2026.06.03', on: false },
  { name: 'VIP 등급 전체', source: '수동', summary: '등급 = VIP', reach: 142, created: '2026.05.29', on: true },
  { name: '휴면 전환 임박 고객', source: 'AI 생성', summary: '최근 방문 45~59일 · 과거 구매 2건+', reach: 318, created: '2026.05.25', on: false },
  { name: '인스타그램 유입 신규', source: '수동', summary: '가입 경로 = 인스타그램 · 최근 14일', reach: 276, created: '2026.05.20', on: true },
]

export default function AudienceManage() {
  const [audiences, setAudiences] = useState(initialAudiences)

  const toggle = (idx) => setAudiences(prev =>
    prev.map((a, i) => i === idx ? { ...a, on: !a.on } : a))

  const liveCount = audiences.filter(a => a.on).length
  const liveReach = audiences.filter(a => a.on).reduce((s, a) => s + a.reach, 0)

  return (
    <Page title="오디언스 관리">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <SectionTitle style={{ marginBottom: 0 }}>오디언스 목록</SectionTitle>
        <span style={{ fontSize: 12, color: c.muted }}>
          활성 <b style={{ color: c.primary, fontWeight: 800 }}>{liveCount}</b> / 전체 {audiences.length} ·
          {' '}활성 도달 <b style={{ color: c.ink, fontWeight: 800 }}>{liveReach.toLocaleString()}</b>명
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
                { label: '활성', align: 'center', w: 70 },
                { label: '오디언스 이름', align: 'left' },
                { label: '생성 방식', align: 'left' },
                { label: '조건 요약', align: 'left' },
                { label: '도달 고객', align: 'right' },
                { label: '생성일', align: 'left' },
              ].map(col => (
                <th key={col.label} style={{
                  padding: '12px 16px', textAlign: col.align, fontSize: 11,
                  fontWeight: 600, color: c.muted, whiteSpace: 'nowrap', width: col.w,
                }}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {audiences.map((a, idx) => {
              const sc = sourceColors[a.source] || {}
              return (
                <tr key={idx} style={{
                  borderBottom: idx < audiences.length - 1 ? `1px solid ${c.bg}` : 'none',
                  opacity: a.on ? 1 : 0.6, transition: 'opacity 0.15s, background 0.12s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = c.bg}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '13px 16px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex' }}>
                      <Toggle on={a.on} onChange={() => toggle(idx)} />
                    </div>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 12.5, fontWeight: 600, color: c.ink, whiteSpace: 'nowrap' }}>{a.name}</td>
                  <td style={{ padding: '13px 16px' }}>
                    <Badge color={sc.color} soft={sc.soft}>{a.source}</Badge>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.body, maxWidth: 320 }}>{a.summary}</td>
                  <td style={{ padding: '13px 16px', textAlign: 'right' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: c.ink }}>
                      <Users size={13} color={c.muted} /> {a.reach.toLocaleString()}
                    </span>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.muted, whiteSpace: 'nowrap' }}>{a.created}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Page>
  )
}

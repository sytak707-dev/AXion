import { useState } from 'react'
import { Search } from 'lucide-react'
import Page from './Page'
import { SectionTitle, Badge } from './ui'
import { c, shadow } from '../theme'

const gradeColors = {
  'VIP': { color: '#1A8C52', soft: '#E6F5EC' },
  '골드': { color: '#B7791F', soft: '#FBF1D9' },
  '실버': { color: '#0F5AF0', soft: '#E6EEFE' },
  '일반': { color: '#8A988F', soft: '#EEF3F0' },
}

const customers = [
  { id: 'AX10293', name: '김서연', email: 'seoyeon.k@gmail.com', joined: '2026.05.28', channel: '네이버', grade: 'VIP', marketing: true, orders: 14 },
  { id: 'AX10287', name: '이준호', email: 'junho.lee@naver.com', joined: '2026.05.21', channel: '카카오', grade: '골드', marketing: true, orders: 9 },
  { id: 'AX10271', name: '박지민', email: 'jimin.park@daum.net', joined: '2026.05.14', channel: '구글', grade: '실버', marketing: false, orders: 5 },
  { id: 'AX10256', name: '최예진', email: 'yejin.choi@gmail.com', joined: '2026.04.30', channel: '직접', grade: '일반', marketing: true, orders: 2 },
  { id: 'AX10244', name: '정우성', email: 'woosung.j@kakao.com', joined: '2026.04.22', channel: '카카오', grade: 'VIP', marketing: true, orders: 21 },
  { id: 'AX10231', name: '한소희', email: 'sohee.han@naver.com', joined: '2026.04.11', channel: '인스타그램', grade: '골드', marketing: true, orders: 8 },
  { id: 'AX10218', name: '강민재', email: 'minjae.kang@gmail.com', joined: '2026.03.29', channel: '네이버', grade: '실버', marketing: false, orders: 4 },
  { id: 'AX10205', name: '윤하늘', email: 'haneul.yoon@daum.net', joined: '2026.03.18', channel: '구글', grade: '일반', marketing: true, orders: 1 },
  { id: 'AX10192', name: '임수빈', email: 'subin.lim@naver.com', joined: '2026.03.07', channel: '직접', grade: '골드', marketing: true, orders: 11 },
  { id: 'AX10180', name: '오세훈', email: 'sehoon.oh@gmail.com', joined: '2026.02.26', channel: '카카오', grade: '일반', marketing: false, orders: 0 },
]

export default function Customers() {
  const [query, setQuery] = useState('')

  const filtered = customers.filter(cu =>
    cu.name.includes(query) || cu.email.includes(query) || cu.id.toLowerCase().includes(query.toLowerCase()))

  return (
    <Page title="고객 목록">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <SectionTitle style={{ marginBottom: 0 }}>회원 가입 정보</SectionTitle>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, background: c.card,
          border: `1px solid ${c.border}`, borderRadius: 10, padding: '8px 12px', width: 260,
        }}>
          <Search size={15} color={c.muted} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="이름 · 이메일 · 회원 ID 검색"
            style={{ border: 'none', outline: 'none', fontSize: 12.5, color: c.ink, width: '100%', background: 'transparent' }}
          />
        </div>
      </div>

      <div style={{
        background: c.card, border: `1px solid ${c.border}`, borderRadius: 14,
        overflow: 'hidden', boxShadow: shadow.card,
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${c.border}` }}>
              {[
                { label: '회원 ID', align: 'left' },
                { label: '이름', align: 'left' },
                { label: '이메일', align: 'left' },
                { label: '가입일', align: 'left' },
                { label: '가입 경로', align: 'left' },
                { label: '등급', align: 'left' },
                { label: '마케팅 수신', align: 'center' },
                { label: '누적 주문', align: 'right' },
              ].map(col => (
                <th key={col.label} style={{
                  padding: '12px 16px', textAlign: col.align, fontSize: 11,
                  fontWeight: 600, color: c.muted, whiteSpace: 'nowrap',
                }}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ padding: '40px 16px', textAlign: 'center', fontSize: 13, color: c.muted }}>
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : filtered.map((cu, idx) => {
              const gc = gradeColors[cu.grade] || {}
              return (
                <tr key={cu.id} style={{ borderBottom: idx < filtered.length - 1 ? `1px solid ${c.bg}` : 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = c.bg}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.muted, fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{cu.id}</td>
                  <td style={{ padding: '13px 16px', fontSize: 12.5, fontWeight: 600, color: c.ink, whiteSpace: 'nowrap' }}>{cu.name}</td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.body, whiteSpace: 'nowrap' }}>{cu.email}</td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.body, whiteSpace: 'nowrap' }}>{cu.joined}</td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: c.body, whiteSpace: 'nowrap' }}>{cu.channel}</td>
                  <td style={{ padding: '13px 16px' }}>
                    <Badge color={gc.color} soft={gc.soft}>{cu.grade}</Badge>
                  </td>
                  <td style={{ padding: '13px 16px', textAlign: 'center', fontSize: 12, fontWeight: 600, color: cu.marketing ? c.primary : c.faint, whiteSpace: 'nowrap' }}>
                    {cu.marketing ? '동의' : '미동의'}
                  </td>
                  <td style={{ padding: '13px 16px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: c.ink }}>{cu.orders}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Page>
  )
}

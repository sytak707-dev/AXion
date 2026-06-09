import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const PRIMARY = '#1B4332'

const statusCounts = [
  { label: '대기', count: 0 },
  { label: '발송중', count: 0 },
  { label: '완료', count: 7 },
  { label: 'OFF', count: 1 },
]

const channels = ['알림톡', '브랜드 메시지', '문자', '이메일']

const campaignsByChannel = {
  '알림톡': [
    { name: '만료 예정 쿠폰 알림톡으로 알리기', start: '09:00', targets: 23, detail: '쿠폰이 곧 만료돼요! 지금 사용하세요.' },
  ],
  '브랜드 메시지': [
    { name: '7일 전 장바구니 담고 미구매 회원 대상 캠페인', start: '12:00', targets: 8, detail: '장바구니에 담아둔 상품이 기다리고 있어요.' },
    { name: '1일 전 장바구니 담고 미구매 회원 대상 캠페인', start: '12:00', targets: 5, detail: '아직 고민 중이신가요? 지금 구매하세요.' },
    { name: '90일 이내 회원가입한 미구매 회원 대상 캠페인', start: '12:00', targets: 540, detail: '첫 구매 시 사용 가능한 혜택을 드려요.' },
    { name: '고객의 관심 상품군 중에서 할인 알리기', start: '12:00', targets: 244, detail: '관심 상품이 지금 할인 중이에요!' },
    { name: '최근에 장바구니에 담은 상품 알리기', start: '12:00', targets: 47, detail: '담아두신 상품, 품절 전에 확인하세요.' },
  ],
  '문자': [],
  '이메일': [],
}

export default function SendStatus() {
  const [active, setActive] = useState('알림톡')
  const rows = campaignsByChannel[active] || []

  return (
    <section style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, color: '#1B2B22', marginBottom: 14 }}>발송현황</h2>

      {/* Status counts */}
      <div style={{ display: 'flex', gap: 28, marginBottom: 16 }}>
        {statusCounts.map(({ label, count }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 13, color: '#5A6B61', fontWeight: 500 }}>{label}</span>
            <span style={{
              fontSize: 16,
              fontWeight: 800,
              color: count > 0 ? '#1B2B22' : '#CDD6D1',
            }}>{count}</span>
          </div>
        ))}
      </div>

      {/* Channel tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 0 }}>
        {channels.map(ch => {
          const isActive = ch === active
          return (
            <button
              key={ch}
              onClick={() => setActive(ch)}
              style={{
                padding: '8px 18px',
                borderRadius: '8px 8px 0 0',
                border: '1px solid #ECEFED',
                borderBottom: isActive ? '1px solid #fff' : '1px solid #ECEFED',
                background: isActive ? '#fff' : '#F4F6F5',
                color: isActive ? PRIMARY : '#7A8A80',
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                position: 'relative',
                marginBottom: -1,
                transition: 'all 0.12s',
              }}
            >
              {ch}
            </button>
          )
        })}
      </div>

      {/* Table */}
      <div style={{
        background: '#fff',
        border: '1px solid #ECEFED',
        borderRadius: '0 10px 10px 10px',
        overflow: 'hidden',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F0F3F1' }}>
              {[
                { label: '캠페인 이름', align: 'left' },
                { label: '발송 시작', align: 'left' },
                { label: '대상자', align: 'right' },
                { label: '메시지 내용 상세', align: 'left' },
              ].map(col => (
                <th key={col.label} style={{
                  padding: '12px 16px',
                  textAlign: col.align,
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#A7B2AB',
                  whiteSpace: 'nowrap',
                }}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '40px 16px', textAlign: 'center', fontSize: 13, color: '#A7B2AB' }}>
                  발송 중인 캠페인이 없습니다.
                </td>
              </tr>
            ) : rows.map((row, idx) => (
              <tr key={idx} style={{
                borderBottom: idx < rows.length - 1 ? '1px solid #F4F6F5' : 'none',
                transition: 'background 0.1s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#FAFBFB'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding: '13px 16px', fontSize: 12, color: '#2E3D34', maxWidth: 280 }}>
                  <span style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {row.name}
                  </span>
                </td>
                <td style={{ padding: '13px 16px', fontSize: 12, color: '#7A8A80', whiteSpace: 'nowrap' }}>
                  {row.start}
                </td>
                <td style={{ padding: '13px 16px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: '#2E3D34', whiteSpace: 'nowrap' }}>
                  {row.targets.toLocaleString()}
                </td>
                <td style={{ padding: '13px 16px', fontSize: 12, color: '#97A39C', maxWidth: 320 }}>
                  <span style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {row.detail}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {rows.length > 0 && (
          <div style={{ textAlign: 'center', padding: '10px', borderTop: '1px solid #F0F3F1' }}>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              background: 'transparent',
              border: 'none',
              fontSize: 12,
              color: '#5A6B61',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '4px 12px',
              borderRadius: 6,
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#F5F7F6'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              더보기 <ChevronDown size={13} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

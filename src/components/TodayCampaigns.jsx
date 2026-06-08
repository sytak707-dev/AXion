import { ChevronDown } from 'lucide-react'

const campaigns = [
  { status: '완료', channel: '알림톡', name: '만료 예정 쿠폰 알림톡으로 알리기', targets: 23, time: '09:00' },
  { status: '완료', channel: '브랜드 메시지', name: '7일 전 장바구니 담고 7일 이내 미구매 회원 대상 캠페인', targets: 8, time: '12:00' },
  { status: '완료', channel: '브랜드 메시지', name: '1일 전 장바구니 담고 1일 이내 미구매 회원 대상 캠페인', targets: 5, time: '12:00' },
  { status: '완료', channel: '브랜드 메시지', name: '90일 이내 회원가입한 미구매 회원 대상 캠페인', targets: 540, time: '12:00' },
  { status: '완료', channel: '브랜드 메시지', name: '고객의 관심 상품군 중에서 할인 알리기', targets: 244, time: '12:00' },
  { status: '완료', channel: '브랜드 메시지', name: '최근에 장바구니에 담은 상품 알리기', targets: 47, time: '12:00' },
]

const statusDot = {
  '완료': '#2D6A4F',
  '발송중': '#5A6B61',
  '예정': '#A7B2AB',
  '종료': '#C4CECA',
}

const statusCounts = { 예정: 0, 발송중: 0, 완료: 7, 종료: 1 }

export default function TodayCampaigns() {
  return (
    <section style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#1B2B22' }}>오늘 발송 현황</h2>
        <span style={{ fontSize: 11, color: '#A7B2AB' }}>기준일시 2026. 6. 8. 20:55</span>
      </div>

      {/* Status counts */}
      <div style={{
        display: 'flex',
        background: '#fff',
        border: '1px solid #ECEFED',
        borderRadius: '10px 10px 0 0',
        borderBottom: 'none',
        overflow: 'hidden',
      }}>
        {Object.entries(statusCounts).map(([label, count], i) => (
          <div key={label} style={{
            flex: 1,
            padding: '12px 16px',
            borderRight: i < 3 ? '1px solid #F0F3F1' : 'none',
          }}>
            <p style={{ fontSize: 11, color: '#97A39C', marginBottom: 3 }}>{label}</p>
            <p style={{
              fontSize: 20,
              fontWeight: 800,
              color: count > 0 ? '#1B2B22' : '#CDD6D1',
              letterSpacing: -0.5,
            }}>{count}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{
        background: '#fff',
        border: '1px solid #ECEFED',
        borderRadius: '0 0 10px 10px',
        overflow: 'hidden',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F0F3F1' }}>
              {['상태', '채널', '캠페인명', '대상자 수', '발송시각'].map((col, i) => (
                <th key={col} style={{
                  padding: '11px 14px',
                  textAlign: i >= 3 ? 'right' : 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#A7B2AB',
                  whiteSpace: 'nowrap',
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaigns.map((row, idx) => (
              <tr key={idx} style={{
                borderBottom: idx < campaigns.length - 1 ? '1px solid #F4F6F5' : 'none',
                transition: 'background 0.1s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#FAFBFB'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding: '11px 14px', whiteSpace: 'nowrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#5A6B61' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: statusDot[row.status] || '#C4CECA' }} />
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: '11px 14px', whiteSpace: 'nowrap' }}>
                  <span style={{
                    background: '#F2F4F3',
                    color: '#5A6B61',
                    fontSize: 11,
                    fontWeight: 500,
                    padding: '2px 8px',
                    borderRadius: 4,
                  }}>{row.channel}</span>
                </td>
                <td style={{ padding: '11px 14px', fontSize: 12, color: '#2E3D34', maxWidth: 320 }}>
                  <span style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {row.name}
                  </span>
                </td>
                <td style={{ padding: '11px 14px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: '#2E3D34' }}>
                  {row.targets.toLocaleString()}
                </td>
                <td style={{ padding: '11px 14px', textAlign: 'right', fontSize: 12, color: '#7A8A80', fontWeight: 500 }}>
                  {row.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
      </div>
    </section>
  )
}

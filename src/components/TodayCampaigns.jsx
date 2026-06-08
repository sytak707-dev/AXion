import { ChevronDown } from 'lucide-react'

const PRIMARY = '#1B4332'

const campaigns = [
  { status: '완료', channel: '알림톡', name: '만료 예정 쿠폰 알림톡으로 알리기', targets: 23, time: '09:00' },
  { status: '완료', channel: '브랜드 메시지', name: '7일 전 장바구니 담고 7일 이내 미구매 회원 대상 캠페인', targets: 8, time: '12:00' },
  { status: '완료', channel: '브랜드 메시지', name: '1일 전 장바구니 담고 1일 이내 미구매 회원 대상 캠페인', targets: 5, time: '12:00' },
  { status: '완료', channel: '브랜드 메시지', name: '90일 이내 회원가입한 미구매 회원 대상 캠페인', targets: 540, time: '12:00' },
  { status: '완료', channel: '브랜드 메시지', name: '고객의 관심 상품군 중에서 할인 알리기', targets: 244, time: '12:00' },
  { status: '완료', channel: '브랜드 메시지', name: '최근에 장바구니에 담은 상품 알리기', targets: 47, time: '12:00' },
]

const statusConfig = {
  '완료': { bg: '#DCFCE7', color: '#16A34A' },
  '발송중': { bg: '#DBEAFE', color: '#2563EB' },
  '예정': { bg: '#FEF9C3', color: '#CA8A04' },
  '종료': { bg: '#F3F4F6', color: '#6B7280' },
}

const channelConfig = {
  '알림톡': { bg: '#FEF3C7', color: '#D97706' },
  '브랜드 메시지': { bg: `${PRIMARY}12`, color: PRIMARY },
  '이메일': { bg: '#EDE9FE', color: '#7C3AED' },
  '문자': { bg: '#FCE7F3', color: '#BE185D' },
}

const statusCounts = { 예정: 0, 발송중: 0, 완료: 7, 종료: 1 }

export default function TodayCampaigns() {
  return (
    <section style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#0F2B1F' }}>오늘 발송 현황</h2>
        <span style={{ fontSize: 11, color: '#9AADA2' }}>기준일시 2026. 6. 8. 20:55</span>
      </div>

      {/* Status tabs */}
      <div style={{
        display: 'flex',
        gap: 0,
        background: '#fff',
        border: '1px solid #E8EDE9',
        borderRadius: '10px 10px 0 0',
        borderBottom: 'none',
        overflow: 'hidden',
      }}>
        {Object.entries(statusCounts).map(([label, count], i) => (
          <div key={label} style={{
            flex: 1,
            padding: '12px 16px',
            borderRight: i < 3 ? '1px solid #E8EDE9' : 'none',
            background: label === '완료' ? `${PRIMARY}08` : '#fff',
          }}>
            <p style={{ fontSize: 11, color: '#9AADA2', marginBottom: 3 }}>{label}</p>
            <p style={{
              fontSize: 20,
              fontWeight: 800,
              color: label === '완료' ? PRIMARY : '#C4CECA',
              letterSpacing: -0.5,
            }}>{count}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{
        background: '#fff',
        border: '1px solid #E8EDE9',
        borderRadius: '0 0 10px 10px',
        overflow: 'hidden',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F0F3F1', background: '#FAFCFB' }}>
              {['상태', '채널', '캠페인명', '대상자 수', '발송시각'].map((col, i) => (
                <th key={col} style={{
                  padding: '10px 14px',
                  textAlign: i >= 3 ? 'right' : 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#9AADA2',
                  whiteSpace: 'nowrap',
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaigns.map((row, idx) => {
              const sc = statusConfig[row.status] || statusConfig['완료']
              const cc = channelConfig[row.channel] || channelConfig['브랜드 메시지']
              return (
                <tr key={idx} style={{
                  borderBottom: idx < campaigns.length - 1 ? '1px solid #F0F3F1' : 'none',
                  transition: 'background 0.1s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#FAFCFB'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '10px 14px', whiteSpace: 'nowrap' }}>
                    <span style={{
                      background: sc.bg,
                      color: sc.color,
                      fontSize: 10,
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: 4,
                    }}>{row.status}</span>
                  </td>
                  <td style={{ padding: '10px 14px', whiteSpace: 'nowrap' }}>
                    <span style={{
                      background: cc.bg,
                      color: cc.color,
                      fontSize: 10,
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: 4,
                    }}>{row.channel}</span>
                  </td>
                  <td style={{ padding: '10px 14px', fontSize: 12, color: '#1a2e22', maxWidth: 320 }}>
                    <span style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {row.name}
                    </span>
                  </td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: '#1a2e22' }}>
                    {row.targets.toLocaleString()}
                  </td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', fontSize: 12, color: '#4A6458', fontWeight: 500 }}>
                    {row.time}
                  </td>
                </tr>
              )
            })}
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
            color: PRIMARY,
            fontWeight: 600,
            cursor: 'pointer',
            padding: '4px 12px',
            borderRadius: 6,
          }}
            onMouseEnter={e => e.currentTarget.style.background = `${PRIMARY}10`}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            더보기 <ChevronDown size={13} />
          </button>
        </div>
      </div>
    </section>
  )
}

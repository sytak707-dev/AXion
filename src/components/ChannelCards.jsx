import { MessageSquare, Mail, Bell, MessageCircle, Monitor, LayoutGrid, ArrowRight, CreditCard } from 'lucide-react'

const PRIMARY = '#1B4332'

function ChannelCard({ icon: Icon, title, stats, cta }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #ECEFED',
      borderRadius: 12,
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{
          width: 32,
          height: 32,
          background: '#F2F4F3',
          borderRadius: 9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={15} color="#5A6B61" strokeWidth={1.8} />
        </div>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#1B2B22' }}>{title}</p>
      </div>

      {stats ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {stats.map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: '#97A39C' }}>{label}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#1B2B22' }}>{value}</span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: 11, color: '#97A39C', lineHeight: 1.6 }}>
          캠페인을 ON하고 고객을 데려오세요!
        </p>
      )}

      <button style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        padding: '8px',
        borderRadius: 7,
        border: '1px solid #E4E9E6',
        background: '#fff',
        color: '#3D5248',
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.15s',
        width: '100%',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#F5F7F6'
          e.currentTarget.style.borderColor = '#C9D4CD'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#fff'
          e.currentTarget.style.borderColor = '#E4E9E6'
        }}
      >
        {cta} <ArrowRight size={12} />
      </button>
    </div>
  )
}

export default function ChannelCards() {
  return (
    <>
      {/* 충전금 관리 */}
      <section style={{ marginBottom: 24 }}>
        <div style={{
          background: '#fff',
          border: '1px solid #ECEFED',
          borderRadius: 12,
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{
              width: 32,
              height: 32,
              background: '#F2F4F3',
              borderRadius: 9,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <CreditCard size={15} color="#5A6B61" strokeWidth={1.8} />
            </div>
            <div>
              <p style={{ fontSize: 11, color: '#97A39C' }}>충전금 관리</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1B2B22' }}>사용 가능 충전금</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <p style={{ fontSize: 20, fontWeight: 800, color: '#1B2B22', letterSpacing: -0.5 }}>₩26,987</p>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              padding: '7px 14px',
              borderRadius: 7,
              border: 'none',
              background: PRIMARY,
              color: '#fff',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
            }}>
              충전 설정
            </button>
          </div>
        </div>
      </section>

      {/* 채널별 현황 */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#1B2B22', marginBottom: 12 }}>채널별 현황</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          <ChannelCard
            icon={MessageSquare}
            title="브랜드 메시지"
            stats={[
              { label: 'ON 캠페인 수', value: '7개' },
              { label: '어제 발송 수', value: '259' },
            ]}
            cta="캠페인 관리"
          />
          <ChannelCard
            icon={Mail}
            title="이메일"
            stats={null}
            cta="바로가기"
          />
          <ChannelCard
            icon={Bell}
            title="알림톡"
            stats={[
              { label: 'ON 캠페인 수', value: '1개' },
              { label: '어제 발송 수', value: '25' },
            ]}
            cta="캠페인 관리"
          />
          <ChannelCard
            icon={MessageCircle}
            title="문자"
            stats={null}
            cta="바로가기"
          />
        </div>
      </section>

      {/* 온사이트 캠페인 & 위젯 */}
      <section style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#1B2B22' }}>온사이트 캠페인 &amp; 위젯</h2>
          <span style={{ fontSize: 11, color: '#A7B2AB' }}>데이터 기준일 2026. 6. 8.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <ChannelCard
            icon={Monitor}
            title="배너"
            stats={[
              { label: 'ON 캠페인 수', value: '3개' },
            ]}
            cta="캠페인 관리"
          />
          <ChannelCard
            icon={LayoutGrid}
            title="위젯"
            stats={null}
            cta="바로가기"
          />
        </div>
      </section>
    </>
  )
}

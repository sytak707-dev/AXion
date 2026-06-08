import { ArrowRight, UserPlus, AlertTriangle } from 'lucide-react'

const PRIMARY = '#1B4332'

const cards = [
  {
    icon: UserPlus,
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    tag: '신규 회원',
    tagColor: '#16A34A',
    tagBg: '#DCFCE7',
    title: '지금 잡아야 할 신규 회원',
    desc: '최근 7일 가입 후 미구매 회원 292명에게 첫 구매 유도 캠페인을 발송하세요.',
  },
  {
    icon: AlertTriangle,
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
    tag: '이탈 위험',
    tagColor: '#D97706',
    tagBg: '#FEF3C7',
    title: '이탈 위험 고객 잡기',
    desc: '30일 이상 미방문 회원을 대상으로 리텐션 캠페인을 지금 바로 시작하세요.',
  },
]

export default function AIActionCards() {
  return (
    <section style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
        <span style={{
          background: PRIMARY,
          color: '#fff',
          fontSize: 10,
          fontWeight: 700,
          padding: '2px 7px',
          borderRadius: 4,
          letterSpacing: 0.5,
        }}>AI</span>
        <h2 style={{ fontSize: 13, fontWeight: 600, color: '#0F2B1F' }}>AI 추천 액션</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {cards.map(({ icon: Icon, iconBg, iconColor, tag, tagColor, tagBg, title, desc }) => (
          <div key={title} style={{
            background: '#fff',
            border: '1px solid #E8EDE9',
            borderRadius: 12,
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            cursor: 'pointer',
            transition: 'box-shadow 0.15s, border-color 0.15s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,67,50,0.10)'
              e.currentTarget.style.borderColor = '#52B788'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#E8EDE9'
            }}
          >
            <div style={{
              width: 40,
              height: 40,
              background: iconBg,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={18} color={iconColor} strokeWidth={2} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 4 }}>
                <span style={{
                  background: tagBg,
                  color: tagColor,
                  fontSize: 10,
                  fontWeight: 600,
                  padding: '1px 6px',
                  borderRadius: 4,
                }}>{tag}</span>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#0F2B1F', marginBottom: 3 }}>{title}</p>
              <p style={{ fontSize: 11, color: '#7A9183', lineHeight: 1.5 }}>{desc}</p>
            </div>
            <ArrowRight size={16} color="#9AADA2" style={{ flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </section>
  )
}

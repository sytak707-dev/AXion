import { ArrowRight, UserPlus, AlertTriangle } from 'lucide-react'

const cards = [
  {
    icon: UserPlus,
    tag: '신규 회원',
    title: '지금 잡아야 할 신규 회원',
    desc: '최근 7일 가입 후 미구매 회원 292명에게 첫 구매 유도 캠페인을 발송하세요.',
  },
  {
    icon: AlertTriangle,
    tag: '이탈 위험',
    title: '이탈 위험 고객 잡기',
    desc: '30일 이상 미방문 회원을 대상으로 리텐션 캠페인을 지금 바로 시작하세요.',
  },
]

export default function AIActionCards() {
  return (
    <section style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 13, fontWeight: 600, color: '#5A6B61', marginBottom: 12 }}>AI 추천 액션</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {cards.map(({ icon: Icon, tag, title, desc }) => (
          <div key={title} style={{
            background: '#fff',
            border: '1px solid #ECEFED',
            borderRadius: 12,
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            cursor: 'pointer',
            transition: 'border-color 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9D4CD' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#ECEFED' }}
          >
            <div style={{
              width: 40,
              height: 40,
              background: '#F2F4F3',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={18} color="#5A6B61" strokeWidth={1.8} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 11, color: '#97A39C', marginBottom: 3 }}>{tag}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#1B2B22', marginBottom: 3 }}>{title}</p>
              <p style={{ fontSize: 11, color: '#97A39C', lineHeight: 1.5 }}>{desc}</p>
            </div>
            <ArrowRight size={16} color="#B5C0B9" style={{ flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </section>
  )
}

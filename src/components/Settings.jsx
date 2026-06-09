import { useState } from 'react'
import { ShoppingBag, Activity, MessageCircle, BarChart3, Check, Plug } from 'lucide-react'
import Page from './Page'
import { SectionTitle } from './ui'
import { c, shadow } from '../theme'

const integrations = [
  {
    key: 'cafe24',
    icon: ShoppingBag,
    name: '카페24',
    accent: '#0F5AF0',
    soft: '#E6EEFE',
    desc: '주문·회원 데이터를 가져옵니다.',
    detail: '카페24 쇼핑몰의 주문 내역과 회원 정보를 주기적으로 동기화합니다.',
    cta: '주문/회원 데이터 가져오기',
    connected: false,
  },
  {
    key: 'meta',
    icon: Activity,
    name: '메타 픽셀',
    accent: '#1877F2',
    soft: '#E6EFFD',
    desc: '사이트 행동 로그를 수집합니다.',
    detail: '메타 픽셀을 연결해 페이지뷰·장바구니·구매 등 사용자 행동 이벤트를 수집합니다.',
    cta: '행동 로그 수집 연동',
    connected: false,
  },
  {
    key: 'kakao',
    icon: MessageCircle,
    name: '카카오톡 채널',
    accent: '#FAE100',
    soft: '#FEF9D9',
    iconColor: '#3C1E1E',
    desc: '메시지를 발송합니다.',
    detail: '카카오톡 채널을 연결하면 알림톡·친구톡 메시지를 고객에게 발송할 수 있습니다.',
    cta: '카카오톡 채널 연결',
    connected: false,
  },
  {
    key: 'ga4',
    icon: BarChart3,
    name: 'GTM / GA4',
    accent: '#E8710A',
    soft: '#FCEDD9',
    desc: '대시보드 지표를 연동합니다.',
    detail: 'Google Tag Manager와 GA4를 연동해 트래픽·전환 지표를 대시보드에서 확인합니다.',
    cta: 'GTM/GA4 연동하기',
    connected: false,
  },
]

export default function Settings() {
  const [state, setState] = useState(
    Object.fromEntries(integrations.map(i => [i.key, i.connected]))
  )

  const toggle = (key) => setState(prev => ({ ...prev, [key]: !prev[key] }))

  const connectedCount = Object.values(state).filter(Boolean).length

  return (
    <Page title="설정">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <SectionTitle style={{ marginBottom: 0 }}>연동 관리</SectionTitle>
        <span style={{ fontSize: 12, color: c.muted }}>
          연결됨 <b style={{ color: c.primary, fontWeight: 800 }}>{connectedCount}</b> / 전체 {integrations.length}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {integrations.map(it => {
          const Icon = it.icon
          const isConnected = state[it.key]
          return (
            <div key={it.key} style={{
              background: c.card, border: `1px solid ${isConnected ? c.primary : c.border}`,
              borderRadius: 16, boxShadow: shadow.card, padding: 20,
              display: 'flex', flexDirection: 'column', gap: 14,
              transition: 'border-color 0.15s',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: it.soft, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={22} color={it.iconColor || it.accent} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: c.ink }}>{it.name}</h3>
                    {isConnected && (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 8px',
                        borderRadius: 99, background: c.primarySoft, color: c.primary,
                        fontSize: 11, fontWeight: 700,
                      }}>
                        <Check size={11} strokeWidth={3} /> 연결됨
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 12.5, color: c.body, fontWeight: 500, marginTop: 4 }}>{it.desc}</p>
                </div>
              </div>

              <p style={{ fontSize: 12, color: c.muted, lineHeight: 1.6 }}>{it.detail}</p>

              <button
                onClick={() => toggle(it.key)}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                  width: '100%', padding: '11px', borderRadius: 10, cursor: 'pointer',
                  border: isConnected ? `1px solid ${c.borderStrong}` : 'none',
                  background: isConnected ? c.card : it.accent,
                  color: isConnected ? c.body : (it.iconColor || '#fff'),
                  fontSize: 13, fontWeight: 700, transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (!isConnected) e.currentTarget.style.opacity = '0.9' }}
                onMouseLeave={e => { if (!isConnected) e.currentTarget.style.opacity = '1' }}
              >
                {isConnected ? '연동 해제' : <><Plug size={15} /> {it.cta}</>}
              </button>
            </div>
          )
        })}
      </div>
    </Page>
  )
}

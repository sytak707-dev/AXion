import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Page from './Page'
import { SectionTitle, Toggle, Badge } from './ui'
import { c, shadow } from '../theme'

const channelColors = {
  '알림톡': { color: '#1A8C52', soft: '#E6F5EC' },
  '브랜드 메시지': { color: '#9333EA', soft: '#F1E6FB' },
  '문자': { color: '#0F5AF0', soft: '#E6EEFE' },
  '이메일': { color: '#B7791F', soft: '#FBF1D9' },
}

const initialCampaigns = [
  {
    name: '만료 예정 쿠폰 알림톡으로 알리기', channel: '알림톡', schedule: '매일 09:00',
    targets: 23, on: true,
    title: '[AXion] 쿠폰 만료 안내', detail: '쿠폰이 곧 만료돼요! 지금 사용하세요.\n\n보유하신 5,000원 할인 쿠폰이 6월 12일 자정에 만료됩니다. 만료 전 원하시는 상품에 사용해보세요.',
    button: '쿠폰 사용하기',
  },
  {
    name: '7일 전 장바구니 담고 미구매 회원 대상 캠페인', channel: '브랜드 메시지', schedule: '매일 12:00',
    targets: 8, on: true,
    title: '장바구니에 담아둔 상품이 기다려요', detail: '장바구니에 담아둔 상품이 기다리고 있어요.\n\n관심 있게 보셨던 상품을 다시 한번 확인해보세요. 지금 구매 시 무료배송 혜택을 드립니다.',
    button: '장바구니 보기',
  },
  {
    name: '90일 이내 회원가입한 미구매 회원 대상 캠페인', channel: '브랜드 메시지', schedule: '매주 월 12:00',
    targets: 540, on: true,
    title: '첫 구매 혜택이 준비되어 있어요', detail: '첫 구매 시 사용 가능한 혜택을 드려요.\n\n아직 첫 구매를 하지 않으셨네요! 지금 가입 축하 10% 할인 쿠폰으로 마음에 드는 상품을 만나보세요.',
    button: '혜택 받기',
  },
  {
    name: '고객 관심 상품군 할인 안내 문자', channel: '문자', schedule: '할인 발생 시',
    targets: 244, on: false,
    title: '관심 상품 할인 안내', detail: '관심 상품이 지금 할인 중이에요!\n\n자주 보신 카테고리의 상품이 최대 30% 할인 중입니다. 품절되기 전에 서둘러 확인하세요.',
    button: '할인 상품 보기',
  },
  {
    name: '재구매 주기 도래 고객 리마인드 이메일', channel: '이메일', schedule: '주기 도래 시',
    targets: 132, on: true,
    title: '다시 채워야 할 시간이에요', detail: '이전에 구매하신 상품, 이제 다 쓰셨을까요?\n\n재구매 시점이 다가왔어요. 같은 상품을 간편하게 다시 주문하거나 새로운 상품도 둘러보세요.',
    button: '재구매하기',
  },
]

export default function MessageStatus() {
  const [campaigns, setCampaigns] = useState(initialCampaigns)
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (idx) => setCampaigns(prev =>
    prev.map((cmp, i) => i === idx ? { ...cmp, on: !cmp.on } : cmp))

  const liveCount = campaigns.filter(c => c.on).length

  return (
    <Page title="메시지 현황">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <SectionTitle style={{ marginBottom: 0 }}>메시지 캠페인 목록</SectionTitle>
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
                { label: '채널', align: 'left' },
                { label: '발송 주기', align: 'left' },
                { label: '대상자', align: 'right' },
                { label: '상세', align: 'center', w: 80 },
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
              const cc = channelColors[cmp.channel] || {}
              const isOpen = openIdx === idx
              return (
                <FragmentRow key={idx}>
                  <tr style={{
                    borderBottom: isOpen ? 'none' : (idx < campaigns.length - 1 ? `1px solid ${c.bg}` : 'none'),
                    opacity: cmp.on ? 1 : 0.6, transition: 'opacity 0.15s, background 0.12s',
                    background: isOpen ? c.bg : 'transparent',
                  }}>
                    <td style={{ padding: '13px 16px', textAlign: 'center' }}>
                      <div style={{ display: 'inline-flex' }}>
                        <Toggle on={cmp.on} onChange={() => toggle(idx)} />
                      </div>
                    </td>
                    <td style={{ padding: '13px 16px', fontSize: 12.5, fontWeight: 600, color: c.ink, maxWidth: 300 }}>
                      {cmp.name}
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <Badge color={cc.color} soft={cc.soft}>{cmp.channel}</Badge>
                    </td>
                    <td style={{ padding: '13px 16px', fontSize: 12, color: c.body, whiteSpace: 'nowrap' }}>{cmp.schedule}</td>
                    <td style={{ padding: '13px 16px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: c.ink, whiteSpace: 'nowrap' }}>
                      {cmp.targets.toLocaleString()}
                    </td>
                    <td style={{ padding: '13px 16px', textAlign: 'center' }}>
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 2, background: 'transparent',
                          border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 600,
                          color: isOpen ? c.primary : c.body,
                        }}
                      >
                        {isOpen ? '닫기' : '보기'}
                        {isOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                      </button>
                    </td>
                  </tr>
                  {isOpen && (
                    <tr style={{ borderBottom: idx < campaigns.length - 1 ? `1px solid ${c.bg}` : 'none' }}>
                      <td colSpan={6} style={{ padding: '0 16px 18px', background: c.bg }}>
                        <MessagePreview cmp={cmp} color={cc.color} />
                      </td>
                    </tr>
                  )}
                </FragmentRow>
              )
            })}
          </tbody>
        </table>
      </div>
    </Page>
  )
}

// React.Fragment를 key와 함께 쓰기 위한 래퍼
function FragmentRow({ children }) {
  return <>{children}</>
}

function MessagePreview({ cmp, color }) {
  return (
    <div style={{ display: 'flex', gap: 20, paddingTop: 4 }}>
      {/* 메시지 미리보기 카드 */}
      <div style={{
        width: 280, flexShrink: 0, background: c.card, border: `1px solid ${c.border}`,
        borderRadius: 14, padding: 16, boxShadow: shadow.card,
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color, marginBottom: 8 }}>{cmp.channel} 미리보기</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: c.ink, marginBottom: 8 }}>{cmp.title}</div>
        <div style={{ fontSize: 12.5, color: c.body, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{cmp.detail}</div>
        <button style={{
          marginTop: 14, width: '100%', padding: '10px', borderRadius: 9, border: 'none',
          background: c.lime, color: c.ink, fontSize: 12.5, fontWeight: 700, cursor: 'pointer',
        }}>{cmp.button}</button>
      </div>

      {/* 상세 정보 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 6 }}>
        {[
          { k: '메시지 제목', v: cmp.title },
          { k: '발송 채널', v: cmp.channel },
          { k: '발송 주기', v: cmp.schedule },
          { k: '대상자 수', v: `${cmp.targets.toLocaleString()}명` },
          { k: 'CTA 버튼', v: cmp.button },
          { k: '진행 상태', v: cmp.on ? '진행 중' : '중지됨' },
        ].map(row => (
          <div key={row.k} style={{ display: 'flex', gap: 16, fontSize: 12.5 }}>
            <span style={{ width: 90, color: c.muted, flexShrink: 0 }}>{row.k}</span>
            <span style={{ color: c.ink, fontWeight: 500 }}>{row.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

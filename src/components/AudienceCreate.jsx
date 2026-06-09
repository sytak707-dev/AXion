import { useState } from 'react'
import { Sparkles, Users, Check, RefreshCw, Save } from 'lucide-react'
import Page from './Page'
import { SectionTitle, Card, Badge } from './ui'
import { c, shadow } from '../theme'

const presets = [
  '구매 직전에 이탈한 고가 상품 관심 고객',
  '재구매 주기가 임박한 충성 고객',
  '가입 후 30일간 미구매한 신규 회원',
  '특정 카테고리만 반복 조회하는 잠재 고객',
]

// AI가 입력을 바탕으로 세세한 세그먼트 조건을 "생성"하는 목업
function generateAudience(prompt) {
  const base = prompt?.trim() || '구매 직전에 이탈한 고가 상품 관심 고객'
  return {
    name: `AI 세그먼트 · ${base.slice(0, 14)}${base.length > 14 ? '…' : ''}`,
    summary: base,
    reach: 1240 + Math.floor(Math.random() * 800),
    confidence: 88 + Math.floor(Math.random() * 9),
    conditions: [
      { group: '행동', items: [
        '최근 14일 내 상품 상세 페이지 3회 이상 조회',
        '장바구니 담기 후 24시간 내 미구매',
        '단일 세션 체류 시간 상위 30%',
      ] },
      { group: '구매 이력', items: [
        '평균 객단가 ₩50,000 이상',
        '최근 90일 내 구매 0건 (이전 구매 이력은 보유)',
      ] },
      { group: '관심사', items: [
        '관심 카테고리: 의류 · 잡화 (조회 비중 60% 이상)',
        '할인 상품 클릭률 상위 25%',
      ] },
      { group: '속성', items: [
        '마케팅 수신 동의 회원',
        '가입 경로: 네이버 · 카카오',
        '휴면 전환 14일 이내 (이탈 위험)',
      ] },
    ],
  }
}

export default function AudienceCreate() {
  const [prompt, setPrompt] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done
  const [result, setResult] = useState(null)
  const [saved, setSaved] = useState(false)

  const run = (text) => {
    const value = text ?? prompt
    setStatus('loading')
    setResult(null)
    setSaved(false)
    setTimeout(() => {
      setResult(generateAudience(value))
      setStatus('done')
    }, 1100)
  }

  return (
    <Page title="오디언스 생성">
      <SectionTitle>AI 오디언스 만들기</SectionTitle>

      <Card style={{ marginBottom: 22 }}>
        <p style={{ fontSize: 12.5, color: c.body, marginBottom: 12, lineHeight: 1.6 }}>
          어떤 고객에게 닿고 싶으신가요? 자연어로 설명하면 AI가 행동·구매·관심사·속성을 조합한
          <b style={{ color: c.ink }}> 세세한 세그먼트</b>를 자동으로 구성합니다.
        </p>

        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="예) 고가 상품을 장바구니에 담았지만 결제하지 않고 떠난, 마케팅 수신에 동의한 고객"
          rows={3}
          style={{
            width: '100%', resize: 'vertical', borderRadius: 10, border: `1px solid ${c.border}`,
            padding: '12px 14px', fontSize: 13, color: c.ink, outline: 'none',
            fontFamily: 'inherit', lineHeight: 1.6, background: c.bg,
          }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '12px 0 16px' }}>
          {presets.map(p => (
            <button key={p} onClick={() => { setPrompt(p); run(p) }}
              style={{
                padding: '6px 12px', borderRadius: 99, border: `1px solid ${c.border}`,
                background: c.card, color: c.body, fontSize: 12, cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = c.primary; e.currentTarget.style.color = c.primary }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.body }}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          onClick={() => run()}
          disabled={status === 'loading'}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px',
            borderRadius: 11, border: 'none', cursor: status === 'loading' ? 'default' : 'pointer',
            background: c.primary, color: '#fff', fontSize: 13.5, fontWeight: 700,
            boxShadow: shadow.btn, opacity: status === 'loading' ? 0.7 : 1,
          }}
        >
          {status === 'loading'
            ? <><RefreshCw size={16} className="spin" /> AI가 세그먼트를 분석 중…</>
            : <><Sparkles size={16} /> 오디언스 만들기</>}
        </button>
      </Card>

      {result && (
        <>
          <SectionTitle>생성된 오디언스</SectionTitle>
          <Card>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Sparkles size={16} color={c.primary} />
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: c.ink }}>{result.name}</h3>
                  <Badge>신뢰도 {result.confidence}%</Badge>
                </div>
                <p style={{ fontSize: 12.5, color: c.muted }}>{result.summary}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: c.primary }}>
                  <Users size={18} />
                  <span style={{ fontSize: 26, fontWeight: 800, color: c.ink, letterSpacing: -0.8 }}>
                    {result.reach.toLocaleString()}
                  </span>
                </div>
                <p style={{ fontSize: 11, color: c.muted, marginTop: 2 }}>예상 도달 고객 수</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {result.conditions.map(group => (
                <div key={group.group} style={{
                  border: `1px solid ${c.border}`, borderRadius: 12, padding: '14px 16px', background: c.bg,
                }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: c.primary, marginBottom: 10, letterSpacing: 0.3 }}>
                    {group.group}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {group.items.map(it => (
                      <div key={it} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <Check size={14} color={c.primary} strokeWidth={2.5} style={{ marginTop: 1, flexShrink: 0 }} />
                        <span style={{ fontSize: 12.5, color: c.body, lineHeight: 1.5 }}>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <button
                onClick={() => setSaved(true)}
                disabled={saved}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, padding: '11px 20px',
                  borderRadius: 10, border: 'none', cursor: saved ? 'default' : 'pointer',
                  background: saved ? c.primarySoft : c.primary, color: saved ? c.primary : '#fff',
                  fontSize: 13, fontWeight: 700,
                }}
              >
                {saved ? <><Check size={15} strokeWidth={3} /> 저장됨 — 오디언스 관리에서 확인하세요</> : <><Save size={15} /> 이 오디언스 저장</>}
              </button>
              <button
                onClick={() => run()}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, padding: '11px 18px',
                  borderRadius: 10, border: `1px solid ${c.borderStrong}`, cursor: 'pointer',
                  background: c.card, color: c.body, fontSize: 13, fontWeight: 700,
                }}
              >
                <RefreshCw size={15} /> 다시 생성
              </button>
            </div>
          </Card>
        </>
      )}
    </Page>
  )
}

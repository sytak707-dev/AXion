import { useState } from 'react'
import {
  Home,
  Sparkles,
  Users,
  Monitor,
  MessageSquare,
  Bell,
  BarChart2,
  Settings,
  Gift,
  Search,
  ChevronDown,
  ChevronRight,
  CreditCard,
  User,
  MoreHorizontal,
} from 'lucide-react'

const PRIMARY = '#1B4332'
const PRIMARY_LIGHT = '#2D6A4F'
const ACCENT = '#52B788'

const navItems = [
  { icon: Home, label: '홈', active: true },
  { icon: Sparkles, label: 'AI 인사이트', badge: 'AI' },
  { icon: Users, label: '오디언스' },
  { icon: Monitor, label: '온사이트 캠페인', expandable: true },
  { icon: MessageSquare, label: '메시지 캠페인', expandable: true },
  { icon: Bell, label: '알림 메시지', expandable: true },
  { icon: BarChart2, label: '애널리틱스', expandable: true },
  { icon: Settings, label: '설정' },
]

const addons = [
  { icon: Gift, label: '상품 추천 위젯' },
  { icon: Search, label: '숨은 상품 찾기' },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState({})

  const toggle = (label) => setExpanded(prev => ({ ...prev, [label]: !prev[label] }))

  return (
    <aside style={{
      width: 220,
      minHeight: '100vh',
      background: '#fff',
      borderRight: '1px solid #E8EDE9',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px 12px', borderBottom: '1px solid #F0F3F1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{
            width: 28,
            height: 28,
            background: PRIMARY,
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: -0.5 }}>A</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: PRIMARY, letterSpacing: -0.3 }}>AXion</span>
        </div>

        {/* Brand selector */}
        <button style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#F4F6F5',
          border: '1px solid #E0E7E2',
          borderRadius: 7,
          padding: '7px 10px',
          cursor: 'pointer',
          fontSize: 13,
          color: '#1a2e22',
          fontWeight: 500,
        }}>
          <span>bttr</span>
          <ChevronDown size={14} color="#6B7E72" />
        </button>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '8px 8px', flex: 1 }}>
        <p style={{ fontSize: 10, fontWeight: 600, color: '#9AADA2', padding: '8px 8px 4px', letterSpacing: 0.5, textTransform: 'uppercase' }}>Menu</p>
        {navItems.map(({ icon: Icon, label, active, expandable, badge }) => (
          <button
            key={label}
            onClick={() => expandable && toggle(label)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              padding: '8px 10px',
              borderRadius: 7,
              border: 'none',
              cursor: 'pointer',
              background: active ? `${PRIMARY}12` : 'transparent',
              color: active ? PRIMARY : '#3D5248',
              fontSize: 13,
              fontWeight: active ? 600 : 400,
              textAlign: 'left',
              transition: 'background 0.15s',
              marginBottom: 1,
            }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#F4F6F5' }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
          >
            <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
            <span style={{ flex: 1 }}>{label}</span>
            {badge && (
              <span style={{
                background: PRIMARY,
                color: '#fff',
                fontSize: 9,
                fontWeight: 700,
                padding: '1px 5px',
                borderRadius: 4,
                letterSpacing: 0.5,
              }}>{badge}</span>
            )}
            {expandable && (
              expanded[label]
                ? <ChevronDown size={13} color="#9AADA2" />
                : <ChevronRight size={13} color="#9AADA2" />
            )}
          </button>
        ))}

        <p style={{ fontSize: 10, fontWeight: 600, color: '#9AADA2', padding: '12px 8px 4px', letterSpacing: 0.5, textTransform: 'uppercase' }}>Add-on</p>
        {addons.map(({ icon: Icon, label }) => (
          <button
            key={label}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              padding: '8px 10px',
              borderRadius: 7,
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              color: '#3D5248',
              fontSize: 13,
              fontWeight: 400,
              textAlign: 'left',
              transition: 'background 0.15s',
              marginBottom: 1,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F4F6F5' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            <Icon size={15} strokeWidth={1.8} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid #F0F3F1', padding: '10px 8px' }}>
        {/* Credits */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#F4F6F5',
          borderRadius: 8,
          padding: '8px 10px',
          marginBottom: 6,
          cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <CreditCard size={13} color={PRIMARY} strokeWidth={2} />
            <div>
              <p style={{ fontSize: 10, color: '#7A9183', marginBottom: 1 }}>사용 가능 충전금</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: PRIMARY }}>₩26,987</p>
            </div>
          </div>
          <ChevronRight size={13} color="#9AADA2" />
        </div>

        {/* User */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 10px',
          borderRadius: 7,
          cursor: 'pointer',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F4F6F5' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          <div style={{
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: `${PRIMARY}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <User size={13} color={PRIMARY} />
          </div>
          <span style={{ fontSize: 11, color: '#4A6458', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            sytak707@gmail.com
          </span>
          <MoreHorizontal size={13} color="#9AADA2" />
        </div>
      </div>
    </aside>
  )
}

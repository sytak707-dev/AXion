import { useState } from 'react'
import {
  Home,
  Users,
  Monitor,
  MessageSquare,
  BarChart2,
  Settings,
  ChevronDown,
  ChevronRight,
  User,
  MoreHorizontal,
} from 'lucide-react'

const PRIMARY = '#1B4332'

const navItems = [
  { icon: Home, label: '홈', active: true },
  { icon: Users, label: '오디언스' },
  { icon: Monitor, label: '온사이트 캠페인', expandable: true },
  { icon: MessageSquare, label: '메시지 캠페인', expandable: true },
  { icon: BarChart2, label: '애널리틱스', expandable: true },
  { icon: Settings, label: '설정' },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState({})

  const toggle = (label) => setExpanded(prev => ({ ...prev, [label]: !prev[label] }))

  return (
    <aside style={{
      width: 220,
      minHeight: '100vh',
      background: '#fff',
      borderRight: '1px solid #ECEFED',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
      </div>

      {/* Navigation */}
      <nav style={{ padding: '4px 8px', flex: 1 }}>
        <p style={{ fontSize: 10, fontWeight: 600, color: '#9AADA2', padding: '8px 8px 4px', letterSpacing: 0.5, textTransform: 'uppercase' }}>Menu</p>
        {navItems.map(({ icon: Icon, label, active, expandable }) => (
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
              background: active ? `${PRIMARY}0F` : 'transparent',
              color: active ? PRIMARY : '#3D5248',
              fontSize: 13,
              fontWeight: active ? 600 : 400,
              textAlign: 'left',
              transition: 'background 0.15s',
              marginBottom: 1,
            }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#F5F7F6' }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
          >
            <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
            <span style={{ flex: 1 }}>{label}</span>
            {expandable && (
              expanded[label]
                ? <ChevronDown size={13} color="#9AADA2" />
                : <ChevronRight size={13} color="#9AADA2" />
            )}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid #F0F3F1', padding: '10px 8px' }}>
        {/* Brand selector */}
        <button style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#fff',
          border: '1px solid #E4E9E6',
          borderRadius: 8,
          padding: '8px 11px',
          cursor: 'pointer',
          fontSize: 13,
          color: '#1a2e22',
          fontWeight: 600,
          marginBottom: 8,
          transition: 'border-color 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9D4CD' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#E4E9E6' }}
        >
          <span>bttr</span>
          <ChevronDown size={14} color="#9AADA2" />
        </button>

        {/* User */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 10px',
          borderRadius: 7,
          cursor: 'pointer',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F5F7F6' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          <div style={{
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: '#F0F3F1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <User size={13} color="#5A6B61" />
          </div>
          <span style={{ fontSize: 11, color: '#5A6B61', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            sytak707@gmail.com
          </span>
          <MoreHorizontal size={13} color="#9AADA2" />
        </div>
      </div>
    </aside>
  )
}

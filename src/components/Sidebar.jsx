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
  ArrowLeftRight,
} from 'lucide-react'

const PRIMARY = '#1B4332'

const navItems = [
  { icon: Home, label: '홈', active: true },
  { icon: Users, label: '오디언스' },
  { icon: Monitor, label: '온사이트 캠페인', expandable: true, children: ['온사이트 현황', '온사이트 목록', '온사이트 통계'] },
  { icon: MessageSquare, label: '메시지 캠페인', expandable: true, children: ['메시지 현황', '메시지 목록', '메시지 통계'] },
  { icon: BarChart2, label: '애널리틱스' },
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
        {navItems.map(({ icon: Icon, label, active, expandable, children }) => (
          <div key={label}>
            <button
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

            {expandable && expanded[label] && (
              <div style={{ marginBottom: 2 }}>
                {children.map(child => (
                  <button
                    key={child}
                    style={{
                      width: '100%',
                      display: 'block',
                      padding: '7px 10px 7px 34px',
                      borderRadius: 7,
                      border: 'none',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: '#7A8A80',
                      fontSize: 12.5,
                      textAlign: 'left',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#F5F7F6' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                  >
                    {child}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom — brand switcher */}
      <div style={{ borderTop: '1px solid #F0F3F1', padding: '12px 12px' }}>
        <button style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#fff',
          border: '1px solid #E4E9E6',
          borderRadius: 8,
          padding: '9px 12px',
          cursor: 'pointer',
          transition: 'border-color 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9D4CD' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#E4E9E6' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 6, background: PRIMARY,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 12 }}>B</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1a2e22' }}>bttr</span>
          </div>
          <ArrowLeftRight size={15} color="#9AADA2" />
        </button>
      </div>
    </aside>
  )
}

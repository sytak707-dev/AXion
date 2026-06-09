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
import { c, shadow } from '../theme'

const navItems = [
  { icon: Home, label: '홈', active: true },
  { icon: Users, label: '오디언스' },
  { icon: Monitor, label: '온사이트 캠페인', expandable: true, children: ['온사이트 목록', '온사이트 통계'] },
  { icon: MessageSquare, label: '메시지 캠페인', expandable: true, children: ['메시지 목록', '메시지 통계'] },
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
      background: c.bg,
      borderRight: `1px solid ${c.border}`,
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '22px 18px 16px', position: 'relative' }}>
        {/* white glow */}
        <div style={{
          position: 'absolute',
          left: 8,
          top: 12,
          width: 130,
          height: 44,
          background: 'radial-gradient(closest-side, rgba(255,255,255,0.95), rgba(255,255,255,0))',
          filter: 'blur(6px)',
          pointerEvents: 'none',
        }} />
        <span style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'baseline',
          letterSpacing: -0.5,
          textShadow: '0 0 10px rgba(255,255,255,0.95), 0 0 18px rgba(255,255,255,0.8)',
        }}>
          <span style={{ fontWeight: 800, fontSize: 24, color: c.primary }}>AX</span>
          <span style={{ fontWeight: 700, fontSize: 19, color: '#000' }}>ion</span>
        </span>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '4px 8px', flex: 1 }}>
        <p style={{ fontSize: 10, fontWeight: 600, color: c.faint, padding: '8px 8px 4px', letterSpacing: 0.5, textTransform: 'uppercase' }}>Menu</p>
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
                borderRadius: 9,
                border: 'none',
                cursor: 'pointer',
                background: active ? c.primarySoft : 'transparent',
                color: active ? c.primary : c.body,
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                textAlign: 'left',
                transition: 'background 0.15s',
                marginBottom: 1,
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = c.card }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
            >
              <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
              <span style={{ flex: 1 }}>{label}</span>
              {expandable && (
                expanded[label]
                  ? <ChevronDown size={13} color={c.faint} />
                  : <ChevronRight size={13} color={c.faint} />
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
                      borderRadius: 9,
                      border: 'none',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: c.muted,
                      fontSize: 12.5,
                      textAlign: 'left',
                      transition: 'background 0.15s, color 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = c.card; e.currentTarget.style.color = c.body }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = c.muted }}
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
      <div style={{ borderTop: `1px solid ${c.border}`, padding: '12px 12px' }}>
        <button style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: c.card,
          border: `1px solid ${c.borderStrong}`,
          borderRadius: 10,
          padding: '9px 12px',
          cursor: 'pointer',
          transition: 'border-color 0.15s, box-shadow 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = c.primary; e.currentTarget.style.boxShadow = shadow.card }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = c.borderStrong; e.currentTarget.style.boxShadow = 'none' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 7,
              background: '#fff', border: `1px solid ${c.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: 13 }}>B</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: c.ink }}>bttr</span>
          </div>
          <ArrowLeftRight size={15} color={c.faint} />
        </button>
      </div>
    </aside>
  )
}

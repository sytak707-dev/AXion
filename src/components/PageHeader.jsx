import { RefreshCw, User, Bell } from 'lucide-react'
import { c, shadow } from '../theme'

export default function PageHeader({ title, bold = false }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: c.muted }}>
          <RefreshCw size={12} /> updated 2026. 06. 09
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%', background: c.primarySoft,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <User size={15} color={c.primary} />
            </div>
            <div style={{ lineHeight: 1.3 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: c.ink }}>회원 이름</p>
              <p style={{ fontSize: 11, color: c.muted }}>sytak707@gmail.com</p>
            </div>
          </div>
          <button style={{
            width: 34, height: 34, borderRadius: '50%', border: `1px solid ${c.border}`,
            background: c.card, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            boxShadow: shadow.card,
          }}>
            <Bell size={16} color={c.body} />
          </button>
        </div>
      </div>

      <h1 style={{ fontSize: 26, fontWeight: bold ? 800 : 400, color: c.ink, letterSpacing: -0.6, marginBottom: 22 }}>
        {title}
      </h1>
    </>
  )
}

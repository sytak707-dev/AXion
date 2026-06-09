import { RefreshCw, User, Bell } from 'lucide-react'
import StatsGrid from './StatsGrid'
import SendStatus from './SendStatus'

export default function Dashboard() {
  return (
    <main style={{ flex: 1, padding: '24px 32px', maxWidth: 'calc(100vw - 220px)', overflowX: 'hidden' }}>
      {/* Top row: updated + user/notification */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#97A39C' }}>
          <RefreshCw size={12} /> updated 2026. 06. 09
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%', background: '#F0F3F1',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <User size={15} color="#5A6B61" />
            </div>
            <div style={{ lineHeight: 1.3 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#2E3D34' }}>회원 이름</p>
              <p style={{ fontSize: 11, color: '#97A39C' }}>sytak707@gmail.com</p>
            </div>
          </div>
          <button style={{
            width: 34, height: 34, borderRadius: '50%', border: '1px solid #ECEFED',
            background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>
            <Bell size={16} color="#5A6B61" />
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 26, fontWeight: 800, color: '#1B2B22', letterSpacing: -0.6, marginBottom: 22 }}>
        제목(Title)
      </h1>

      <StatsGrid />
      <SendStatus />
    </main>
  )
}

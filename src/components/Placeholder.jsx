import { Construction } from 'lucide-react'
import Page from './Page'
import { c } from '../theme'

export default function Placeholder({ title }) {
  return (
    <Page title={title}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 12, padding: '80px 0', color: c.muted,
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16, background: c.primarySoft,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Construction size={26} color={c.primary} />
        </div>
        <p style={{ fontSize: 14, fontWeight: 600, color: c.body }}>준비 중인 페이지입니다</p>
        <p style={{ fontSize: 12 }}>곧 만나보실 수 있어요.</p>
      </div>
    </Page>
  )
}

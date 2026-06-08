import AIActionCards from './AIActionCards'
import SiteOverview from './SiteOverview'
import TodayCampaigns from './TodayCampaigns'
import ChannelCards from './ChannelCards'

const PRIMARY = '#1B4332'

export default function Dashboard() {
  return (
    <main style={{ flex: 1, padding: '28px 32px', maxWidth: 'calc(100vw - 220px)', overflowX: 'hidden' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <p style={{ fontSize: 12, color: '#7A9183', marginBottom: 4 }}>데이터 기준일 2026. 6. 8.</p>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#0F2B1F', letterSpacing: -0.5 }}>
            안녕하세요, <span style={{ color: PRIMARY }}>bttr</span> 대시보드입니다
          </h1>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: `${PRIMARY}10`,
          padding: '6px 12px',
          borderRadius: 8,
        }}>
          <span style={{ fontSize: 11, color: PRIMARY, fontWeight: 600 }}>● LIVE</span>
          <span style={{ fontSize: 11, color: '#4A6458' }}>2026. 6. 8. 20:55</span>
        </div>
      </div>

      <AIActionCards />
      <SiteOverview />
      <TodayCampaigns />
      <ChannelCards />
    </main>
  )
}

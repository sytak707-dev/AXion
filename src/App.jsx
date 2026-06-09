import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Placeholder from './components/Placeholder'
import KpiPage from './components/analytics/KpiPage'
import FunnelPage from './components/analytics/FunnelPage'
import ChurnPage from './components/analytics/ChurnPage'
import CohortPage from './components/analytics/CohortPage'
import SegmentPage from './components/analytics/SegmentPage'
import OnsiteStatus from './components/OnsiteStatus'
import OnsiteStats from './components/OnsiteStats'
import MessageStatus from './components/MessageStatus'
import MessageStats from './components/MessageStats'
import Customers from './components/Customers'
import { c } from './theme'

const placeholderTitles = {
  'audience-create': '오디언스 생성',
  'audience-manage': '오디언스 관리',
  'settings': '설정',
}

function renderRoute(route) {
  switch (route) {
    case 'home': return <Dashboard />
    case 'analytics-kpi': return <KpiPage />
    case 'analytics-funnel': return <FunnelPage />
    case 'analytics-churn': return <ChurnPage />
    case 'analytics-cohort': return <CohortPage />
    case 'analytics-segment': return <SegmentPage />
    case 'onsite-status': return <OnsiteStatus />
    case 'onsite-stats': return <OnsiteStats />
    case 'message-status': return <MessageStatus />
    case 'message-stats': return <MessageStats />
    case 'customers': return <Customers />
    default: return <Placeholder title={placeholderTitles[route] || '페이지'} />
  }
}

export default function App() {
  const [route, setRoute] = useState('home')

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh', background: c.bg }}>
      <Sidebar route={route} onNavigate={setRoute} />
      {renderRoute(route)}
    </div>
  )
}

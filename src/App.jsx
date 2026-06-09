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
import { c } from './theme'

const placeholderTitles = {
  'audience-create': '오디언스 생성',
  'audience-manage': '오디언스 관리',
  'onsite-status': '온사이트 현황',
  'onsite-stats': '온사이트 통계',
  'message-status': '메시지 현황',
  'message-stats': '메시지 통계',
  'customers': '고객 목록',
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

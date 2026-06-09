import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { c } from './theme'

export default function App() {
  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh', background: c.bg }}>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

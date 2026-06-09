import Page from './Page'
import StatsGrid from './StatsGrid'
import SendStatus from './SendStatus'

export default function Dashboard() {
  return (
    <Page title="OOO님, 오늘의 성과를 확인해보세요.">
      <StatsGrid />
      <SendStatus />
    </Page>
  )
}

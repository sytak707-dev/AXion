import PageHeader from './PageHeader'

export default function Page({ title, bold, children }) {
  return (
    <main style={{ flex: 1, padding: '24px 32px', maxWidth: 'calc(100vw - 220px)', overflowX: 'hidden', background: '#fff' }}>
      <PageHeader title={title} bold={bold} />
      {children}
    </main>
  )
}

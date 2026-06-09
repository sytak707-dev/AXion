import Page from '../Page'
import { Card, SectionTitle } from '../ui'
import { c } from '../../theme'

const weekLabels = ['가입주', '1주', '2주', '3주', '4주', '5주', '6주']

const cohorts = [
  { label: '2026-04 W1', size: 412, values: [100, 64, 48, 39, 33, 29, 26] },
  { label: '2026-04 W2', size: 388, values: [100, 61, 45, 36, 30, 27, 24] },
  { label: '2026-04 W3', size: 451, values: [100, 67, 52, 44, 38, 33, 30] },
  { label: '2026-04 W4', size: 502, values: [100, 70, 55, 47, 41, 36, 32] },
  { label: '2026-05 W1', size: 478, values: [100, 66, 50, 42, 35, 31, null] },
  { label: '2026-05 W2', size: 523, values: [100, 72, 58, 49, 43, null, null] },
  { label: '2026-05 W3', size: 491, values: [100, 69, 54, 45, null, null, null] },
]

// 값에 따라 초록 농도로 셀 색상 결정
function cellColor(v) {
  if (v == null) return 'transparent'
  const t = v / 100
  return `rgba(36, 177, 105, ${(0.12 + t * 0.85).toFixed(3)})`
}

export default function CohortPage() {
  return (
    <Page title="애널리틱스 · 코호트">
      <SectionTitle>코호트 리텐션</SectionTitle>
      <Card title="가입 코호트별 잔존율" sub="셀 색이 진할수록 잔존율이 높습니다 (단위 %)">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'separate', borderSpacing: 4, width: '100%' }}>
            <thead>
              <tr>
                <th style={thStyle}>코호트</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>인원</th>
                {weekLabels.map(w => <th key={w} style={{ ...thStyle, textAlign: 'center' }}>{w}</th>)}
              </tr>
            </thead>
            <tbody>
              {cohorts.map(row => (
                <tr key={row.label}>
                  <td style={{ ...tdLabel, whiteSpace: 'nowrap' }}>{row.label}</td>
                  <td style={{ ...tdLabel, textAlign: 'right' }}>{row.size}</td>
                  {row.values.map((v, i) => (
                    <td key={i} style={{
                      background: cellColor(v),
                      borderRadius: 7,
                      textAlign: 'center',
                      padding: '11px 6px',
                      fontSize: 12,
                      fontWeight: v != null && v >= 55 ? 700 : 500,
                      color: v != null && v >= 55 ? '#fff' : c.body,
                      minWidth: 48,
                    }}>
                      {v != null ? `${v}%` : ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </Page>
  )
}

const thStyle = {
  fontSize: 11,
  fontWeight: 600,
  color: c.muted,
  padding: '4px 8px',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}

const tdLabel = {
  fontSize: 12,
  color: c.ink,
  fontWeight: 600,
  padding: '4px 8px',
}

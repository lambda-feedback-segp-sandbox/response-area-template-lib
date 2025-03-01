import { ThemeProvider } from '@lambda-feedback-segp-sandbox/styles'
import type React from 'react'

export function withTheme<P extends React.JSX.IntrinsicAttributes>(
  Component: React.FC<P>,
): React.FC<P> {
  return props => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  )
}

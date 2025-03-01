import { ThemeProvider } from '@lambda-feedback-segp-sandbox/styles'
import type React from 'react'

export function withTheme<P>(
  Component: React.FC<P>,
): React.FC<P & React.JSX.IntrinsicAttributes> {
  return props => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  )
}

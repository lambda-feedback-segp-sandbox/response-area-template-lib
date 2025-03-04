import { useState } from 'react'

export const useForceRerender = () => {
  const [hasRerendered, setHasRerendered] = useState(false)
  return () => {
    if (!hasRerendered) {
      setHasRerendered(true)
    }
  }
}

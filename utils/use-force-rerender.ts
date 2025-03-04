import { useState } from 'react'

export const useForceRerender = () => {
  const [_, setState] = useState(0)
  return () => setState(x => x + 1)
}

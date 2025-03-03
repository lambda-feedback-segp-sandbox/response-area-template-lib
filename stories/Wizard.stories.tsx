import type { ResponseAreaTub } from '@lambda-feedback-segp-sandbox/response-area-base'
import type { StoryObj } from '@storybook/react'

import { createInitialisedWizard } from '../components/initialised-components'

export function createMeta<T extends ResponseAreaTub>(createTub: () => T) {
  return {
    title: 'Wizard',
    component: createInitialisedWizard(createTub),
    parameters: { layout: 'centered' },
  }
}

type Story = StoryObj<ReturnType<typeof createMeta>>

export const Default: Story = {}

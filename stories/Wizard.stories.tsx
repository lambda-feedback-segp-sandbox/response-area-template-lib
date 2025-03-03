import type { ResponseAreaTub } from '@lambda-feedback-segp-sandbox/response-area-base'
import type { StoryObj } from '@storybook/react'

import {
  InitialisedWizardProps,
  createInitialisedWizard,
} from '../components/initialised-components'

export function createMeta<T extends ResponseAreaTub>(createTub: () => T) {
  return {
    title: 'Wizard',
    component: createInitialisedWizard(createTub),
    parameters: { layout: 'centered' },
    render: (args: InitialisedWizardProps) => {
      const Component = createInitialisedWizard(createTub, args)
      return <Component {...args} />
    },
  }
}

type Story = StoryObj<ReturnType<typeof createMeta>>

export const DefaultStory: Story = {}

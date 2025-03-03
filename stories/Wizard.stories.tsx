import type {
  BaseResponseAreaWizardProps,
  ResponseAreaTub,
} from '@lambda-feedback-segp-sandbox/response-area-base'
import type { Meta, StoryObj } from '@storybook/react'

import { createInitialisedWizard } from '../components/initialised-components'

export function createMeta<T extends ResponseAreaTub>(createTub: () => T) {
  return {
    title: 'Wizard',
    component: createInitialisedWizard(createTub),
    parameters: { layout: 'centered' },
    render: (args: Partial<BaseResponseAreaWizardProps>) => {
      const Component = createInitialisedWizard(createTub, args)
      return <Component {...args} />
    },
  } satisfies Meta<T['InputComponent']>
}

type Story = StoryObj<ReturnType<typeof createMeta>>

export const DefaultStory: Story = {}

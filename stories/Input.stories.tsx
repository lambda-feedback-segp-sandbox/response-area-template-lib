import type {
  BaseResponseAreaProps,
  ResponseAreaTub,
} from '@lambda-feedback-segp-sandbox/response-area-base'
import type { Meta, StoryObj } from '@storybook/react'

import { createInitialisedInput } from '../components/initialised-components'

export function createMeta<T extends ResponseAreaTub>(createTub: () => T) {
  return {
    title: 'Input',
    component: createInitialisedInput(createTub),
    parameters: { layout: 'centered' },
    render: (args: Partial<BaseResponseAreaProps>) => {
      const Component = createInitialisedInput(createTub, args)
      return <Component {...args} />
    },
  } satisfies Meta<T['InputComponent']>
}

type Story = StoryObj<ReturnType<typeof createMeta>>

export const StudentViewStory: Story = {
  args: { isTeacherMode: false },
}

export const TeacherViewStory: Story = {
  args: { isTeacherMode: true },
}

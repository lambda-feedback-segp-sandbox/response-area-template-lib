import type { ResponseAreaTub } from '@lambda-feedback-segp-sandbox/response-area-base'
import type { StoryObj } from '@storybook/react'

import {
  InitialisedInputProps,
  createInitialisedInput,
} from '../components/initialised-components'

export function createMeta<T extends ResponseAreaTub>(createTub: () => T) {
  return {
    title: 'Input',
    component: createInitialisedInput(createTub),
    parameters: { layout: 'centered' },
    render: (args: InitialisedInputProps) => {
      const Component = createInitialisedInput(createTub, args)
      return <Component {...args} />
    },
    args: {
      responseAreaId: '00000000-0000-0000-0000-000000000000',
      universalResponseAreaId: '00000000-0000-0000-0000-000000000000',
    },
  }
}

type Story = StoryObj<ReturnType<typeof createMeta>>

export const StudentViewStory: Story = {
  args: { isTeacherMode: false },
}

export const TeacherViewStory: Story = {
  args: { isTeacherMode: true },
}

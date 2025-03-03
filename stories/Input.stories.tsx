import type { ResponseAreaTub } from '@lambda-feedback-segp-sandbox/response-area-base'
import type { StoryObj } from '@storybook/react'

import { createInitialisedInput } from '../components/initialised-components'

export function createMeta<T extends ResponseAreaTub>(createTub: () => T) {
  return {
    title: 'Input',
    component: createInitialisedInput(createTub),
    parameters: { layout: 'centered' },
  }
}

type Story = StoryObj<ReturnType<typeof createMeta>>

export const StudentViewStory: Story = {
  args: { isTeacherMode: false },
}

export const TeacherViewStory: Story = {
  args: { isTeacherMode: true },
}

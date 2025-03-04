import type { ResponseAreaTub } from '@lambda-feedback-segp-sandbox/response-area-base'
import type { StoryObj } from '@storybook/react'

import {
  ActionButtonsState,
  SandboxResponseArea,
  createInitialisedInput,
} from '../components'

export function createMeta<T extends ResponseAreaTub>(createTub: () => T) {
  const shadowTub = createTub()
  const tub = createTub()

  const InitialisedInput = createInitialisedInput(() => shadowTub)
  tub.InputComponent = props => <InitialisedInput {...props} />

  return {
    title: 'Response Area',
    component: SandboxResponseArea,
    args: {
      tub,
      displayInputSymbols: false,
      displayMode: 'normal',
      inFlight: false,
      inputDisplayValue: [],
      inputType: tub.responseType,
      preResponseText: 'PRE',
      postResponseText: 'POST',
      responseAreaId: '00000000-0000-0000-0000-000000000000',
      universalResponseAreaId: '00000000-0000-0000-0000-000000000000',
      showLivePreview: true,
      visibleSymbols: [],
      wrapLabel: 'Area Label',
    },
    argTypes: {
      actionButtonsState: { table: { disable: true } },
      displayInputSymbols: { table: { disable: true } },
      displayMode: { table: { disable: true } },
      feedback: { table: { disable: true } },
      inFlight: { table: { disable: true } },
      inputDisplayValue: { table: { disable: true } },
      inputType: { table: { disable: true } },
      responseAreaId: { table: { disable: true } },
      universalResponseAreaId: { table: { disable: true } },
      showLivePreview: { table: { disable: true } },
      visibleSymbols: { table: { disable: true } },
      tub: { table: { disable: true } },
    },
  }
}

type Story = StoryObj<ReturnType<typeof createMeta>>

export const StudentViewStory: Story = {
  args: { actionButtonsState: ActionButtonsState.Hidden },
}

export const AllActionButtonsEnabledStory: Story = {
  args: { actionButtonsState: ActionButtonsState.AllEnabled },
}

export const ExploreActionButtonDisabledStory: Story = {
  args: { actionButtonsState: ActionButtonsState.ExploreDisabled },
}

export const AllActionButtonsDisabledStory: Story = {
  args: { actionButtonsState: ActionButtonsState.AllDisabled },
}

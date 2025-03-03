import type { ResponseAreaTub } from '@lambda-feedback-segp-sandbox/response-area-base'
import type { Meta, StoryObj } from '@storybook/react'

import {
  ActionButtonsState,
  SandboxResponseArea,
  createInitialisedInput,
} from '../components'

export function createMeta<T extends ResponseAreaTub>(createTub: () => T) {
  const shadowTub = createTub()
  const tub = createTub()

  tub.InputComponent = createInitialisedInput(() => shadowTub)

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
    } satisfies Meta,
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

import type { ResponseAreaTub } from '@lambda-feedback-segp-sandbox/response-area-base'
import type { StoryObj } from '@storybook/react'

import {
  ActionButtonsState,
  SandboxResponseArea,
  SandboxResponseAreaProps,
  createInitialisedInput,
} from '../components'

const defaultDisabledArgTypes = {
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
  tub: { table: { disable: true } },
  visibleSymbols: { table: { disable: true } },
}

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
      postResponseText: 'POST',
      preResponseText: 'PRE',
      responseAreaId: '00000000-0000-0000-0000-000000000000',
      universalResponseAreaId: '00000000-0000-0000-0000-000000000000',
      showLivePreview: true,
      visibleSymbols: [],
      wrapLabel: 'Area Label',
    },
    argTypes: defaultDisabledArgTypes,
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

interface CustomFeedbackStoryArgs extends SandboxResponseAreaProps {
  feedbackText: string
  feedbackIsCorrect: boolean
  feedbackIsError: boolean
}

export const CustomFeedbackStory: Story = {
  args: { actionButtons: ActionButtonsState.Hidden },
  argTypes: {
    ...defaultDisabledArgTypes,
    postResponseText: { table: { disable: true } },
    preResponseText: { table: { disable: true } },
    wrapLabel: { table: { disable: true } },
  },
  render: (args: CustomFeedbackStoryArgs) => {
    const feedback = {
      isCorrect: args.feedbackIsCorrect,
      isError: args.feedbackIsError,
      feedback: args.feedbackText,
      color: args.feedbackIsCorrect ? 'green' : 'red',
    }
    return <SandboxResponseArea {...args} feedback={feedback} />
  },
}

import {
  ResponseAreaView,
  ResponseAreaViewProps,
} from '@lambda-feedback-segp-sandbox/response-area'
import React, { useState } from 'react'

import { AllowOverrides } from '../types/allow-overrides'

import { ActionButtons } from './ActionButtons.component'
import { NotAvailableDialog } from './NotAvailableDialog.component'

export enum ActionButtonsState {
  Hidden,
  AllEnabled,
  ExploreDisabled,
  AllDisabled,
}

export interface SandboxResponseAreaProps
  extends AllowOverrides<
    ResponseAreaViewProps,
    'handleCheck' | 'handleDraftSave'
  > {
  actionButtonsState: ActionButtonsState
}

export const SandboxResponseArea: React.FC<SandboxResponseAreaProps> = ({
  actionButtonsState,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const [dialogFeatureName, setDialogFeatureName] = useState('')

  function handleButtonClick(featureName: string) {
    setDialogFeatureName(featureName)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <>
      <ResponseAreaView
        ActionButtons={
          actionButtonsState == ActionButtonsState.Hidden ? null : (
            <ActionButtons
              disabled={actionButtonsState == ActionButtonsState.AllDisabled}
              exploreDisabled={
                actionButtonsState == ActionButtonsState.ExploreDisabled
              }
              handleButtonClick={handleButtonClick}
            />
          )
        }
        handleCheck={() => handleButtonClick('Check')}
        handleDraftSave={() => handleButtonClick('Save')}
        {...props}
      />
      <NotAvailableDialog
        featureName={dialogFeatureName}
        handleClose={handleClose}
        open={open}
      />
    </>
  )
}

import {
  BaseResponseAreaProps,
  BaseResponseAreaWizardProps,
  IModularResponseSchema,
  ResponseAreaTub,
} from '@lambda-feedback-segp-sandbox/response-area-base'
import _ from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import type { z } from 'zod'

import { INPUT_KEY, WIZARD_KEY } from '../constants'
import type { AllowOverrides } from '../types/allow-overrides'
import { useForceRerender } from '../utils/use-force-rerender'

type OverridableInputProps = 'handleChange'

export type InitialisedInputProps = AllowOverrides<
  BaseResponseAreaProps,
  OverridableInputProps
>

export function createInitialisedInput<T extends ResponseAreaTub>(
  createTub: () => T,
  propOverrides?: Partial<Pick<BaseResponseAreaProps, OverridableInputProps>>,
): React.FC<InitialisedInputProps> {
  return props => {
    type Response = z.infer<T['answerSchema']>

    const [response, setResponse] = useState<Response | null>()
    const rerender = useForceRerender()

    const tub = useRef(createTub())

    useEffect(() => {
      const storedWizardResponseJson = sessionStorage.getItem(WIZARD_KEY)
      if (storedWizardResponseJson) {
        const storedWizardResponse = JSON.parse(storedWizardResponseJson)
        tub.current.initWithStudentFragment(storedWizardResponse)
      }

      const storedResponseJson = sessionStorage.getItem(INPUT_KEY)
      if (storedResponseJson) {
        const storedResponse = JSON.parse(storedResponseJson)
        if (!_.isEqual(storedResponse, response)) {
          setResponse(storedResponse)
        }
      }

      rerender()
    }, [response])

    const handleChange = (newResponse: Response) => {
      sessionStorage.setItem(INPUT_KEY, JSON.stringify(newResponse))

      setResponse(newResponse)
    }

    return (
      <tub.current.InputComponent
        {...props}
        handleChange={handleChange}
        answer={response}
        config={tub.current.config ?? undefined}
        {...propOverrides}
      />
    )
  }
}

type OverridableWizardProps = 'handleChange' | 'setAllowSave'

export type InitialisedWizardProps = AllowOverrides<
  BaseResponseAreaWizardProps,
  OverridableWizardProps
>

export function createInitialisedWizard<T extends ResponseAreaTub>(
  createTub: () => T,
  propOverrides?: Partial<
    Pick<BaseResponseAreaWizardProps, OverridableWizardProps>
  >,
): React.FC<InitialisedWizardProps> {
  return props => {
    const tub = useRef(createTub())

    const [response, setResponse] = useState(() => {
      tub.current.initWithDefault()
      return tub.current as IModularResponseSchema
    })

    useEffect(() => {
      const storedResponseJson = sessionStorage.getItem(WIZARD_KEY)
      if (storedResponseJson) {
        const storedResponse = JSON.parse(storedResponseJson)
        if (!_.isEqual(storedResponse, response)) {
          tub.current.initWithResponse(storedResponse)
          setResponse(storedResponse)
        }
      }
    }, [response])

    const handleChange = (newResponse: IModularResponseSchema) => {
      sessionStorage.setItem(WIZARD_KEY, JSON.stringify(newResponse))
      tub.current.initWithResponse(newResponse)
      setResponse(newResponse)
    }

    return (
      <tub.current.WizardComponent
        {...props}
        handleChange={handleChange}
        setAllowSave={_ => {}}
        {...propOverrides}
      />
    )
  }
}

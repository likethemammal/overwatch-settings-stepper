import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    shouldShowLeftStepper
} from '../../../../units/stepper/selectors'

describe('shouldShowLeftStepper', () => {
    describe('given an activeIndex and option', () => {

        validations.NO_VALUE(shouldShowLeftStepper)
        validations.NOT_NUMBER(shouldShowLeftStepper)
        validations.NEGATIVE_NUMBER(shouldShowLeftStepper)

        test('if activeIndex is greater than zero, return true', () => {
            expect(
                shouldShowLeftStepper(2)
            ).toBeTruthy()
        })

        test('if activeIndex is equal to zero, return false', () => {
            expect(
                shouldShowLeftStepper(0)
            ).toBeFalsy()
        })
    })
})
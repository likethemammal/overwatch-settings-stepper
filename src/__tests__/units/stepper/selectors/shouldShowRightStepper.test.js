import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    shouldShowRightStepper
} from '../../../../units/stepper/selectors'

describe('shouldShowRightStepper', () => {
    describe('given an activeIndex and option', () => {

        validations.NO_VALUE(shouldShowRightStepper)
        validations.NEGATIVE_NUMBER(shouldShowRightStepper)
        validations.NO_VALUE(shouldShowRightStepper.bind(null, 0))
        validations.NOT_ARRAY(shouldShowRightStepper.bind(null, 0))

        test('if activeIndex is less than options length minus 1, return true', () => {
            expect(
                shouldShowRightStepper(0, ['tests', 'other tests'])
            ).toBeTruthy()
        })

        test('if activeIndex is equal to options length minus 1, return false', () => {
            expect(
                shouldShowRightStepper(0, ['tests'])
            ).toBeFalsy()
        })

        test('if activeIndex is greater than options length minus 1, return false', () => {
            expect(
                shouldShowRightStepper(1, ['tests', 'other tests'])
            ).toBeFalsy()
        })
    })
})
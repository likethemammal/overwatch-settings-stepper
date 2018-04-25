import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    getNewToggledFromStep
} from '../../../../units/toggle/actions'

describe('getNewToggledFromStep', () => {
    describe('given an activeIndex', () => {

        validations.NO_VALUE(getNewToggledFromStep)

        test('if activeIndex is less than zero, throw an error', () => {
            expect(() => {
                getNewToggledFromStep(-1)
            }).toThrow()
        })

        test('if activeIndex is greater than zero, return false', () => {
            expect(
                getNewToggledFromStep(1)
            ).toBeFalsy()
        })

        test('if activeIndex is equal to zero, return true', () => {
            expect(
                getNewToggledFromStep(0)
            ).toBeTruthy()
        })
    })
})
import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    getNewActiveIndexFromStepLeft
} from '../../../../units/stepper/actions'

describe('getNewActiveIndexFromStepLeft', () => {
    describe('given an activeIndex', () => {

        validations.NO_VALUE(getNewActiveIndexFromStepLeft)

        test('if activeIndex is less than zero, throw an error', () => {
            expect(() => {
                getNewActiveIndexFromStepLeft(-1)
            }).toThrow()
        })

        test('if activeIndex is equal to zero, return activeIndex', () => {
            expect(
                getNewActiveIndexFromStepLeft(0)
            ).toEqual(0)
        })

        test('if activeIndex is greater than zero, return activeIndex minus 1', () => {
            expect(
                getNewActiveIndexFromStepLeft(5)
            ).toEqual(4)
        })

    })
})
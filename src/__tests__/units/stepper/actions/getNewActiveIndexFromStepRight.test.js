import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    getNewActiveIndexFromStepRight
} from '../../../../units/stepper/actions'

describe('getNewActiveIndexFromStepRight', () => {
    describe('given an activeIndex and options', () => {

        validations.NO_VALUE(getNewActiveIndexFromStepRight)
        validations.NEGATIVE_NUMBER(getNewActiveIndexFromStepRight)
        validations.NO_VALUE(getNewActiveIndexFromStepRight.bind(null, 0))
        validations.NOT_ARRAY(getNewActiveIndexFromStepRight.bind(null, 0))

        test('if activeIndex is greater than options length minus 1, throw an error', () => {
            expect(() => {
                getNewActiveIndexFromStepRight(1, ['test'])
            }).toThrow()
        })

        test('if activeIndex is equal to options length minus 1, return activeIndex', () => {
            expect(
                getNewActiveIndexFromStepRight(1, ['test', 'some other'])
            ).toEqual(1)
        })

        test('if activeIndex is less than options length minus 1, return activeIndex plus 1', () => {
            expect(
                getNewActiveIndexFromStepRight(1, ['test', 'some other', 'some other other'])
            ).toEqual(2)
        })

    })
})
import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    onStepLeft
} from '../../../../units/stepper/actions'

let changable_trigger = false

const _onStep = () => {
    changable_trigger = true;
}

describe('onStepLeft', () => {
    describe('given an options, activeIndex, onStep, and shouldShowLeftStepper,', () => {

        test('onStep should be called ', () => {

            onStepLeft(['test'], 0, _onStep, true)

            expect(
                changable_trigger
            ).toEqual(true)
        })

    })
})
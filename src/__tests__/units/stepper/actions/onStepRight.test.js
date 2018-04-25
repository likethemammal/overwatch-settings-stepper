import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    onStepRight
} from '../../../../units/stepper/actions'

let changable_trigger = false

const _onStep = () => {
    changable_trigger = true;
}

describe('onStepRight', () => {
    describe('given an options, activeIndex, onStep, and shouldShowRightStepper,', () => {

        test('onStep should be called ', () => {

            onStepRight(['test'], 0, _onStep, true)

            expect(
                changable_trigger
            ).toEqual(true)
        })

    })
})
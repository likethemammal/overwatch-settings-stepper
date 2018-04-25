import React from 'react'

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import {
    onStepMain,
} from '../../../../units/stepper/actions'

const _onStepLeft = jest.fn()
const _onStepRight = jest.fn()

describe('onStepMain', () => {
    describe('given a shouldShowRightStepper, onStepLeft, and onStepRight', () => {

        shared.SHOULD_CALL_MOCK_FROM_FUNCTION(
            onStepMain.bind(null, true, _onStepLeft, _onStepRight),
            _onStepRight,
        )

        shared.SHOULD_CALL_MOCK_FROM_FUNCTION(
            onStepMain.bind(null, false, _onStepLeft, _onStepRight),
            _onStepLeft,
        )

    })
})
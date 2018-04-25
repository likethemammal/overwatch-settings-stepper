import React from 'react'

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import {
    onStep,
} from '../../../../units/toggle/actions'

const _onToggle = jest.fn()
const _onToggle_2 = jest.fn()

describe('onStep', () => {
    describe('given an activeIndex and onToggle', () => {

        shared.SHOULD_CALL_MOCK_FROM_FUNCTION(
            onStep.bind(null, 0, _onToggle),
            _onToggle,
        )

        shared.SHOULD_CALL_MOCK_FROM_FUNCTION(
            onStep.bind(null, 1, _onToggle_2),
            _onToggle_2,
        )

    })
})
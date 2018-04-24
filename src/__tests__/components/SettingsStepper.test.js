import React from 'react';
import {mount} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import { Toggle, SettingsStepper } from '../../../src'

const mock_onStep = jest.fn()
const disabled_mock_onStep = jest.fn()


describe('SettingsStepper', () => {

    const component = mount(
        <SettingsStepper
            onStep={mock_onStep}
        />
    )

    const disabled_left_component = mount(
        <SettingsStepper
            onStep={mock_onStep}
            activeIndex={1}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component,
        disabled_left_component,
    ])

    shared.SHOULD_CALL_MOCK_FROM_SIMULATE(
        component.find('button').at(1),
        mock_onStep,
    )

    shared.INPUT_SHOULD_RECEIVE_DISABLED(
        disabled_left_component.find('button').at(1)
    )

    test('if activeIndex is less than option\'s first index, onStepLeft should not be called', () => {
        disabled_left_component.find(SettingsStepper).instance().onStepLeft()

        expect(
            disabled_mock_onStep.mock.calls.length
        ).toEqual(0)
    })

    test('if onStepLeft is called when there is no index less than activeIndex, throw an error', () => {
        expect(() => {
            disabled_left_component.find(SettingsStepper).instance().onStepRight()
        }).toThrow()
    })

})
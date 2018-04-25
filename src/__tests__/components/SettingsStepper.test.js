import React from 'react';
import {mount} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import { Toggle, SettingsStepper } from '../../../src'

const mock_onStep = jest.fn()
const mock_onStep_2 = jest.fn()
const mock_onStep_3 = jest.fn()

let changable_activeIndex = 2

const mock_options = [
    'One',
    'Three',
    'Seven',
    'Eighfty',
    'Seventy-slav',
    'Forteen-teen',
]

const onStep = (activeIndex) => {
    changable_activeIndex = activeIndex
}


describe('SettingsStepper', () => {

    const component = mount(
        <SettingsStepper
            onStep={onStep}
            activeIndex={changable_activeIndex}
            options={mock_options}
        />
    )

    const disabled_left_component = mount(
        <SettingsStepper
            onStep={mock_onStep}
        />
    )

    const disabled_left_component_2 = mount(
        <SettingsStepper
            onStep={mock_onStep_2}
        />
    )

    const disabled_right_component = mount(
        <SettingsStepper
            onStep={mock_onStep_3}
            activeIndex={1}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component,
        disabled_left_component,
        disabled_left_component_2,
        disabled_right_component,
    ])

    shared.SHOULD_CALL_MOCK_FROM_SIMULATE(
        disabled_left_component.find('button').at(1),
        mock_onStep,
    )

    shared.INPUT_SHOULD_RECEIVE_DISABLED(
        disabled_left_component.find('button').at(0)
    )

    test('if activeIndex is less than option\'s first index, onStepLeft should not be called', () => {

        try {
            disabled_left_component_2.find(SettingsStepper).instance().onStepLeft()
        } catch (e) {

        }

        expect(
            mock_onStep_2.mock.calls.length
        ).toEqual(0)
    })

    test('if onStepLeft is called when there is no index less than activeIndex, throw an error', () => {
        expect(() => {
            disabled_left_component_2.find(SettingsStepper).instance().onStepLeft()
        }).toThrow()
    })

    test('if activeIndex is not zero, onStep should be called, and should return the value of the new activeOption', () => {
        expect(
            changable_activeIndex
        ).toEqual(2)

        component.find(SettingsStepper).instance().onStepRight()

        expect(
            changable_activeIndex
        ).toEqual(3)
    })



})
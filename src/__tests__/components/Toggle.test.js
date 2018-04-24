import React from 'react'
import {mount} from 'enzyme'

import Toggle from '../../components/Toggle'
import SettingsStepper from '../../components/SettingsStepper'

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

const label = 'some test label'
const toggled = true
const mockToggle = jest.fn()


const component_jsx = <Toggle
    label={label}
    toggled={toggled}
    onToggle={mockToggle}
/>

describe('Toggle', () => {
    describe('given a label, toggled value, and onToggle', () => {

        const component = mount(
            component_jsx
        )

        shared.SNAPSHOTS_SHOULD_MATCH([
            component
        ])

        test('SettingsStepper should have activeIndex of 0 if toggled is true', () => {
            expect(
                component.find(SettingsStepper).props().activeIndex
            ).toEqual(0)
        })

        test('SettingsStepper should receive label as label', () => {
            expect(
                component.find(SettingsStepper).props().label
            ).toEqual(label)
        })

        test('label should have label as text', () => {
            expect(
                component.find(SettingsStepper)
                    .childAt(0)
                    .childAt(0)
                    .childAt(0)
                    .instance().textContent
            ).toEqual(label)
        })

        test('onToggle is called when toggled is toggled', () => {
            component.props().onToggle({}, true)

            expect(
                mockToggle.mock.calls.length
            ).toEqual(1)
        })
    })
})
import {
    options as basic_options,
    onStep as basic_onStep,
    activeIndex as basic_activeIndex,
    activeOption,
    shouldShowLeftStepper,
    shouldShowRightStepper,
} from '../selectors/stepper'

import {
    toggled as basic_toggled,
    onToggle as basic_onToggle,
    activeIndex,
} from '../selectors/toggle'

import _ from 'underscore'


const basic_selectors = {
    options: basic_options,
    onStep: basic_onStep,
    activeIndex: basic_activeIndex,
    toggled: basic_toggled,
    onToggle: basic_onToggle,
}


const mock_state = {
    options: ['test', 'some other'],
    onStep: jest.fn(),
    activeIndex: 0,
    toggled: true,
    onToggle: jest.fn(),
}

describe('basic selectors', () => {
    describe('given a state object', () => {

        _.map(basic_selectors, (selector, key) => {
            test(`selector for ${key}`, () => {
                expect(selector(mock_state)).toEqual(mock_state[key])
            })
        })

    })
})

describe('renderer selectors', () => {
    describe('given a state object', () => {

        describe('activeOption', () => {
            test('if state has activeIndex and options, return the option of that index', () => {
                expect(
                    activeOption(mock_state)
                ).toEqual('test')
            })

            test('if state does not have activeIndex and/or option, throw error', () => {
                expect(() => {
                    activeOption({})
                }).toThrow()
            })
        })

        describe('shouldShowLeftStepper', () => {
            test('if state has activeIndex, return whether that index is zero', () => {
                expect(
                    shouldShowLeftStepper(mock_state)
                ).toBeFalsy()
            })

            test('if state does not have activeIndex, throw error', () => {
                expect(() => {
                    shouldShowLeftStepper({})
                }).toThrow()
            })
        })

        describe('shouldShowRightStepper', () => {
            test('if state has activeIndex, return whether that index is less than last index', () => {
                expect(
                    shouldShowRightStepper(mock_state)
                ).toBeTruthy()
            })

            test('if state does not have activeIndex and/or options, throw error', () => {
                expect(() => {
                    shouldShowRightStepper({})
                }).toThrow()
            })
        })

        describe('activeIndex', () => {
            test('if state has toggled, return whether that index is less than last index', () => {
                expect(
                    activeIndex(mock_state)
                ).toEqual(0)
            })

            test('if state does not have toggled, return 1', () => {
                expect(
                    activeIndex({})
                ).toEqual(1)
            })
        })

    })
})


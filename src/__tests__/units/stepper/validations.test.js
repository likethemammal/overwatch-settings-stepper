import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    NO_STEP_RIGHT,
    NO_STEP_LEFT
} from '../../../units/stepper/validations'

describe('validations', () => {
    describe('NO_STEP_RIGHT', () => {

        test('if falsy supplied, throw', () => {
            expect(() => {
                NO_STEP_RIGHT(false)
            }).toThrow()

            expect(() => {
                NO_STEP_RIGHT('')
            }).toThrow()
        })

        test('if truthy supplied, don\'t throw', () => {
            expect(
                NO_STEP_RIGHT(true)
            ).toBeFalsy()
        })
    })

    describe('NO_STEP_LEFT', () => {

        test('if falsy supplied, throw', () => {
            expect(() => {
                NO_STEP_LEFT(false)
            }).toThrow()

            expect(() => {
                NO_STEP_LEFT('')
            }).toThrow()
        })

        test('if truthy supplied, don\'t throw', () => {
            expect(
                NO_STEP_LEFT(true)
            ).toBeFalsy()
        })
    })
})
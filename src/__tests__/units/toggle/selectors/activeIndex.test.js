import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    activeIndex,
} from '../../../../units/toggle/selectors'

describe('activeIndex', () => {
    describe('given a toggled state', () => {

        test('if null supplied, return 1', () => {
            expect(
                activeIndex()
            ).toEqual(1)
        })

        test('if falsy supplied, return 1', () => {
            expect(
                activeIndex(false)
            ).toEqual(1)

            expect(
                activeIndex('')
            ).toEqual(1)
        })

        test('if truthy supplied, return 0', () => {
            expect(
                activeIndex(true)
            ).toEqual(0)

            expect(
                activeIndex('some truth')
            ).toEqual(0)
        })
    })
})
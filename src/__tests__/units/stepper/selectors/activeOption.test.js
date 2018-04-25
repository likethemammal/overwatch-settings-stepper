import React from 'react'

import general from '@likethemammal/general-components'

const validations = general.__tests__._shared.validations

import {
    activeOption
} from '../../../../units/stepper/selectors'

describe('activeOption', () => {
    describe('given an activeIndex and option', () => {

        validations.NO_VALUE(activeOption)
        validations.NEGATIVE_NUMBER(activeOption)
        validations.NO_VALUE(activeOption.bind(null, 0))
        validations.NOT_ARRAY(activeOption.bind(null, 0))

        test('return the option at activeIndex', () => {
            expect(
                activeOption(0, ['tests'])
            ).toEqual('tests')
        })
    })
})

import general from '@likethemammal/overwatch-general'

const { validations } = general

import * as stepper_validations from './validations'

export const getNewActiveIndexFromStepLeft = (activeIndex) => {

    validations.INDEX_NONE(activeIndex)
    validations.INDEX_NOT_NUMBER(activeIndex)
    validations.INDEX_TOO_SMALL(activeIndex)

    if (activeIndex === 0) {
        return activeIndex
    }

    return activeIndex - 1
}

export const getNewActiveIndexFromStepRight = (activeIndex, options) => {

    validations.INDEX_NONE(activeIndex)
    validations.INDEX_TOO_SMALL(activeIndex)
    validations.OPTIONS_NONE(activeIndex, options)
    validations.INDEX_TOO_LARGE(activeIndex, options)

    if (activeIndex === options.length - 1) {
        return activeIndex
    }

    return activeIndex + 1

}

export const onStepLeft = (
    options,
    activeIndex,
    onStep,
    shouldShowLeftStepper,
) => {

    stepper_validations.NO_STEP_LEFT(shouldShowLeftStepper)

    onStep(
        getNewActiveIndexFromStepLeft(activeIndex, options)
    )
}

export const onStepRight = (
    options,
    activeIndex,
    onStep,
    shouldShowRightStepper,
) => {

    stepper_validations.NO_STEP_RIGHT(shouldShowRightStepper)

    onStep(
        getNewActiveIndexFromStepRight(activeIndex, options)
    )
}

export const onStepMain = (
    shouldShowRightStepper,
    onStepLeft,
    onStepRight,
) => shouldShowRightStepper ? onStepRight() : onStepLeft()



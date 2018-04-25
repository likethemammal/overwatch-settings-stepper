
import general from '@likethemammal/overwatch-general'

const { validations } = general

//selectors
export const activeOption = (activeIndex, options) => {

    validations.ACTIVE_INDEX_NONE(activeIndex)
    validations.OPTIONS_NONE(activeIndex, options)
    validations.ACTIVE_INDEX_TOO_LARGE(activeIndex, options)

    return options[activeIndex]
}

export const shouldShowLeftStepper = (activeIndex) => {
    validations.ACTIVE_INDEX_NONE(activeIndex)
    validations.ACTIVE_INDEX_NOT_NUMBER(activeIndex)
    validations.ACTIVE_INDEX_TOO_SMALL(activeIndex)

    return activeIndex !== 0
}

export const shouldShowRightStepper = (activeIndex, options) => {

    validations.ACTIVE_INDEX_NONE(activeIndex)
    validations.ACTIVE_INDEX_TOO_SMALL(activeIndex)
    validations.ACTIVE_INDEX_TOO_LARGE(activeIndex, options)
    validations.OPTIONS_NONE(activeIndex, options)

    return activeIndex < options.length - 1
}

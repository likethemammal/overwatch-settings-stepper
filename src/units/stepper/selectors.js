
import general from '@likethemammal/overwatch-general'

const { validations } = general

//selectors
export const shouldShowLeftStepper = (activeIndex) => {
    validations.INDEX_NONE(activeIndex)
    validations.INDEX_NOT_NUMBER(activeIndex)
    validations.INDEX_TOO_SMALL(activeIndex)

    return activeIndex !== 0
}

export const shouldShowRightStepper = (activeIndex, options) => {

    validations.INDEX_NONE(activeIndex)
    validations.INDEX_TOO_SMALL(activeIndex)
    validations.INDEX_TOO_LARGE(activeIndex, options)
    validations.OPTIONS_NONE(activeIndex, options)

    return activeIndex < options.length - 1
}

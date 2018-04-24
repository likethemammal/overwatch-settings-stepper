
import general from '@likethemammal/overwatch-general'

const { validations } = general

//actions
export const getNewActiveIndexFromStepLeft = (activeIndex) => {

    validations.ACTIVE_INDEX_NONE(activeIndex)
    validations.ACTIVE_INDEX_NOT_NUMBER(activeIndex)

    if (activeIndex === 0) {
        return activeIndex
    }

    return activeIndex - 1
}

export const getNewActiveIndexFromStepRight = (activeIndex, options) => {

    validations.ACTIVE_INDEX_NONE(activeIndex)
    validations.OPTIONS_NONE(activeIndex, options)
    validations.ACTIVE_INDEX_TOO_LARGE(activeIndex, options)

    if (activeIndex === options.length - 1) {
        return activeIndex
    }

    return activeIndex + 1

}

import general from '@likethemammal/overwatch-general'

const { validations } = general


//actions
export const getNewToggledFromStep = (activeIndex) => {

    validations.ACTIVE_INDEX_NONE(activeIndex)
    validations.ACTIVE_INDEX_NOT_NUMBER(activeIndex)

    return activeIndex === 0
}


//selectors
export const activeIndex = (toggled) => {
    return toggled ? 0 : 1
}
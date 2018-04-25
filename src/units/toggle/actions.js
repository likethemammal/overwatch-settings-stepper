
import general from '@likethemammal/overwatch-general'

const { validations } = general

export const getNewToggledFromStep = (activeIndex) => {

    validations.ACTIVE_INDEX_NONE(activeIndex)
    validations.ACTIVE_INDEX_NOT_NUMBER(activeIndex)

    return activeIndex === 0
}

export const onStep = (
    activeIndex,
    onToggle,
) => {
    onToggle(
        getNewToggledFromStep(activeIndex)
    )
}
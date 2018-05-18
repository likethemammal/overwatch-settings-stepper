
import general from '@likethemammal/overwatch-general'

const { validations } = general

export const getNewToggledFromStep = (activeIndex) => {

    validations.INDEX_NONE(activeIndex)
    validations.INDEX_NOT_NUMBER(activeIndex)
    validations.INDEX_TOO_SMALL(activeIndex)

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
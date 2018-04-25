import {
    createSelector
} from 'reselect'

import {
    activeOption as _activeOption,
    shouldShowLeftStepper as _shouldShowLeftStepper,
    shouldShowRightStepper as _shouldShowRightStepper,
} from '../units/stepper/selectors'

export const options = props => props.options
export const activeIndex =  props => props.activeIndex
export const onStep =  props => props.onStep

export const activeOption = createSelector(
    activeIndex,
    options,
    _activeOption
)

export const shouldShowLeftStepper = createSelector(
    activeIndex,
    _shouldShowLeftStepper
)

export const shouldShowRightStepper = createSelector(
    activeIndex,
    options,
    _shouldShowRightStepper
)

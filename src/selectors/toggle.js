
import {
    createSelector
} from 'reselect'

import {
    activeIndex as _activeIndex,
} from '../units/toggle/selectors'

export const toggled =  props => props.toggled
export const onToggle =  props => props.onToggle

export const activeIndex = createSelector(
    toggled,
    _activeIndex
)


import {
    createSelector
} from 'reselect'

import {
    activeIndex as _activeIndex,
} from '../units/toggle'

export const toggled =  props => props.toggled

export const activeIndex = createSelector(
    toggled,
    _activeIndex
)

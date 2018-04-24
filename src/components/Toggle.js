import React, { Component } from 'react'

import SettingsStepper from './SettingsStepper'

import {
    activeIndex as _activeIndex
} from '../selectors/toggle'

import {
    getNewToggledFromStep
} from '../units/toggle/actions'

export default class Toggle extends Component {

    static defaultProps = {
        toggled: false,
        onToggle: null,
        label: ''
    }

    onStep = (activeIndex) => {

        const toggled = getNewToggledFromStep(activeIndex)

        this.props.onToggle(
            toggled
        )

    }

    render() {

        const {
            label,
        } = this.props

        const activeIndex = _activeIndex(this.props)

        return <SettingsStepper
            label={label}
            onStep={this.onStep}
            activeIndex={activeIndex}
        />
    }
}

import React, { Component } from 'react'

import SettingsStepper from './SettingsStepper'

import {
    activeIndex as _activeIndex,
    onToggle as _onToggle,
} from '../selectors/toggle'

import {
    onStep as _onStep
} from '../units/toggle/actions'

export default class Toggle extends Component {

    static defaultProps = {
        toggled: false,
        onToggle: null,
        label: ''
    }

    onStep = (activeIndex) => {
        const onToggle = _onToggle(this.props)

        _onStep(
            activeIndex,
            onToggle,
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

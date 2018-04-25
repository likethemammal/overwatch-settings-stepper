import React, { Component } from 'react'

import css from './SettingsStepper.less'

import LeftSVG from 'svg-icon/dist/svg/mfglabs/chevron_left.svg'
import RightSVG from 'svg-icon/dist/svg/mfglabs/chevron_right.svg'

import general from '@likethemammal/general-components'

const { SVG } = general.components

import {
    onStep as _onStep,
    options as _options,
    activeIndex as _activeIndex,
    activeOption as _activeOption,
    shouldShowLeftStepper as _shouldShowLeftStepper,
    shouldShowRightStepper as _shouldShowRightStepper,
} from '../selectors/stepper'

import {
    onStepLeft as _onStepLeft,
    onStepRight as _onStepRight,
    onStepMain as _onStepMain,
} from '../units/stepper/actions'

//todo: props warning if activeIndex is larger than options length

export default class StepperSwitch extends Component {

    static defaultProps = {
        options: [
            'On',
            'Off',
        ],
        activeIndex: 0,
    }

    onStepLeft = () => {
        const activeIndex = _activeIndex(this.props)
        const shouldShowLeftStepper = _shouldShowLeftStepper(this.props)
        const options = _options(this.props)
        const onStep = _onStep(this.props)

        _onStepLeft(
            options,
            activeIndex,
            onStep,
            shouldShowLeftStepper,
        )
    }

    onStepRight = () => {
        const activeIndex = _activeIndex(this.props)
        const shouldShowRightStepper = _shouldShowRightStepper(this.props)
        const options = _options(this.props)
        const onStep = _onStep(this.props)

        _onStepRight(
            options,
            activeIndex,
            onStep,
            shouldShowRightStepper,
        )
    }

    onStepMain = () => {
        const shouldShowRightStepper = _shouldShowRightStepper(this.props)

        _onStepMain(
            shouldShowRightStepper,
            this.onStepLeft,
            this.onStepRight
        )
    }

    render() {

        const {
            label,
        } = this.props

        const activeOption = _activeOption(this.props)
        const shouldShowLeftStepper = _shouldShowLeftStepper(this.props)
        const shouldShowRightStepper = _shouldShowRightStepper(this.props)


        return <div className={css.container}>

            <div className={css.inner}>
                <div className={css.label}>
                    {label}
                </div>

                <div className={css.stepper}>
                    <button
                        className={css.left}
                        onClick={this.onStepLeft}
                        disabled={!shouldShowLeftStepper}
                    >
                        <SVG
                            raw={LeftSVG}
                        />
                    </button>
                    <div
                        className={css.active}
                        onClick={this.onStepMain}
                    >
                        {activeOption}
                    </div>
                    <button
                        className={css.right}
                        onClick={this.onStepRight}
                        disabled={!shouldShowRightStepper}
                    >
                        <SVG
                            raw={RightSVG}
                        />
                    </button>
                </div>
            </div>
        </div>
    }
}

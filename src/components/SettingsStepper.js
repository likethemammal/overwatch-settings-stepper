import React, { Component } from 'react'

import css from './SettingsStepper.less'

import _ from 'underscore'

import LeftSVG from 'svg-icon/dist/svg/mfglabs/chevron_left.svg'
import RightSVG from 'svg-icon/dist/svg/mfglabs/chevron_right.svg'

import general from '@likethemammal/general-components'

const { SVG } = general.components

import {
    activeOption as _activeOption,
    shouldShowLeftStepper as _shouldShowLeftStepper,
    shouldShowRightStepper as _shouldShowRightStepper,
} from '../selectors/stepper'

import {
    getNewActiveIndexFromStepLeft,
    getNewActiveIndexFromStepRight,
} from '../units/stepper/actions'

import * as validations from '../units/stepper/validations'

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
        const {
            activeIndex,
            onStep,
        } = this.props
        const shouldShowLeftStepper = _shouldShowLeftStepper(this.props)

        validations.NO_STEP_LEFT(shouldShowLeftStepper)

        onStep(
            getNewActiveIndexFromStepLeft(activeIndex)
        )
    }

    onStepRight = () => {
        const {
            options,
            activeIndex,
            onStep,
        } = this.props
        const shouldShowRightStepper = _shouldShowRightStepper(this.props)

        validations.NO_STEP_RIGHT(shouldShowRightStepper)

        onStep(
            getNewActiveIndexFromStepRight(activeIndex, options)
        )
    }

    render() {

        const {
            label,
        } = this.props

        const activeOption = _activeOption(this.props)
        const shouldShowLeftStepper = _shouldShowLeftStepper(this.props)
        const shouldShowRightStepper = _shouldShowRightStepper(this.props)

        const onMainStep = shouldShowRightStepper ? this.onStepRight : this.onStepLeft

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
                        onClick={onMainStep}
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

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
} from '../units/stepper'

//units

//required props are label and activeIndex,

//if step left, and activeIndex is zero, onStep should not be called

//if step left, and activeIndex is not zero, onStep should be called, and should return the value of the activeOption

//if step right, and activeIndex is the last option, onStep should not be called

//if step right, and activeIndex isnt the last option, onStep should be called, and return the value of the activeOption

//if no options are provided, default initial value should be 0

// if activeIndex is 0, left stepper should not be clickable

// if activeIndex is options.length, right stepper should not be clickable

//props warning if activeIndex is larger than options length


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

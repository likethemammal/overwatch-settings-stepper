import React from 'react'
import ReactDOM from 'react-dom'

import { SettingsStepper, Toggle } from '../lib'

class ToggleExample extends React.Component {
    state = {
        toggled: false,
    }

    onToggle = (toggled) => {

        //... so some logic

        this.setState({
            toggled
        })

    }

    render() {

        const { toggled } = this.state

        return <Toggle
            {...{
                toggled,
                onToggle: this.onToggle,
                label: 'v-sync',
            }}
        />
    }
}

class StepperExample extends React.Component {
    state = {
        activeIndex: 1,
    }

    onStep = (activeIndex) => {

        //... so some logic

        this.setState({
            activeIndex
        })

    }

    render() {

        const { activeIndex } = this.state

        return <SettingsStepper
            {...{
                activeIndex,
                onStep: this.onStep,
                label: 'difficulty',
                options: [
                    'Easy',
                    'Medium',
                    'Hard',
                    'Nightmare',
                    'Insane',
                    'Crazypants'
                ],
            }}
        />
    }
}

const Example = () => <div>
    <ToggleExample/>
    <StepperExample/>
</div>

ReactDOM.render(
    <Example />,
    document.getElementById('app')
)
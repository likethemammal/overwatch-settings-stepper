import React from 'react'
import ReactDOM from 'react-dom'

import { SettingsStepper, Toggle } from '../lib'

class Example extends React.Component {
    state = {
        toggled: false,
    }

    onToggle = (toggled) => {
        this.setState({
            toggled
        })
    }

    render() {

        const { toggled } = this.state

        return <Toggle
            {...{
                onToggle: this.onToggle,
                label: 'V-Sync',
                toggled,
            }}
        />
    }
}

ReactDOM.render(
    <Example />,
    document.getElementById('app')
)
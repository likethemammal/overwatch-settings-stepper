import React from 'react'
import ReactDOM from 'react-dom'

import { SettingsStepper, Toggle } from '../lib'

ReactDOM.render(
    <Toggle onToggle={console.log} toggled={false} />,
    document.getElementById('app')
)
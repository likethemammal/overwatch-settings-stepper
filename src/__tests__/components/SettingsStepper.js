import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import { Toggle, SettingsStepper } from '../../'


describe('SettingsStepper', () => {
    // Render a checkbox with label in the document
    const component = shallow(
        <SettingsStepper
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

})
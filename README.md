[![Build Status](https://travis-ci.org/likethemammal/overwatch-settings-stepper.svg?branch=master)](https://travis-ci.org/likethemammal/overwatch-settings-stepper)
[![Coverage Status](https://coveralls.io/repos/github/likethemammal/overwatch-settings-stepper/badge.svg?branch=master)](https://coveralls.io/github/likethemammal/overwatch-settings-stepper?branch=master)

overwatch-settings-stepper
=========

A React component modeling the Overwatch settings stepper UI element

## Installation

    npm install overwatch-settings-stepper

### Fonts to include

#### Futura No 2 D DemiBold

This font is used by Activision Blizzard for much of Overwatch's design. For this component to match the Overwatch design, including the font is **required**. It can be licensed from [MyFonts](http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/).

When using CSS font-face, the font-family should match whats below:

    font-family: 'Futura No 2 D DemiBold';

## Usage

Check out example/index.js for exact usage. Below is a description.

### Components

#### SettingsStepper

The SettingsStepper is the default component thats exported. It expects `options`, `onStep`, and `activeIndex`.

It is a **controlled** component, meaning when `onStep` is called a new `activeIndex` is fed to the parent, to determine the active visible option of the `options`.
 
#### Toggle

The Toggle is imported from within the module. It is an implementation of SettingsStepper, and a convenience component for those that doesnt want to implement a simple checkbox/toggle pattern. It expects `toggled` and `onToggled`.

It is a **controlled** component, meaning when `onToggle` is called a new `toggled` is fed to the parent, to determine the On or Off state.

### Import

    import SettingsStepper, { Toggle } from 'overwatch-settings-stepper'

### Props

#### SettingsStepper

| name        | required  | type           | default  | desc 
--- | --- | --- | --- | --- |
| label | | *string* | | Label for the component, positioned to the left of the stepper options |
| activeIndex | **`X`** | *integer* | 0 | Index of the active visible option, should be stored in state and changed from `onStep` |
| options | **`X`** | *array* | [ "On", "Off" ] | array of strings |
| onStep | **`X`** | *function* | null | Method called when stepper is progressed (clicked) forward or backward; Parameter provided is the new `activeIndex` to be set in state in the parent component.  |

#### Toggle

| name        | required  | type           | default  | desc 
--- | --- | --- | --- | --- |
| label | | *string* | | Label for the component, positioned to the left of the toggle options |
| toggled | **`X`** | *boolean* | false | Boolean that reflects whether the toggle is On or Off; Should be stored in parent component state, and changed from `onToggle` |
| onToggle | **`X`** | *function* | null | Method called when toggle is toggled (clicked); Parameter provided is the new `toggled` boolean, to be set in state in the parent component.  |

## Development

    npm run dev
    
#### Running example

    cd example/; npm run dev
    
Open [http://localhost:8080/](http://localhost:8080/)

### Tests

    npm test

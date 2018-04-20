[![Build Status](https://travis-ci.org/likethemammal/overwatch-settings-stepper.svg?branch=master)](https://travis-ci.org/likethemammal/overwatch-settings-stepper)
[![Coverage Status](https://coveralls.io/repos/github/likethemammal/overwatch-settings-stepper/badge.svg?branch=master)](https://coveralls.io/github/likethemammal/overwatch-settings-stepper?branch=master)

overwatch-settings-stepper
=========

A React component modeling the Overwatch settings stepper UI element

## Installation

    npm install overwatch-settings-stepper

### Fonts to include
#### Matching the Overwatch design

The font **Futura No 2 D DemiBold** is used by Activision Blizzard for much of Overwatch's design. For this component to look it's best, including the font is **required**. It can be licensed from [MyFonts](http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/).

When including through CSS font-face, the font-family should match whats below:

    font-family: 'Futura No 2 D DemiBold';

## Usage

### Props

| name        | type           | default  | desc 
--- | --- | --- | --- |
| defaultColor | *string* | #323C50 |  |
| activeColor | *string* | #FFFFFF |  |
| textColor | *string* | #00C3FF |  |
| items | *array* | null | array of objects, with required keys `id`, `label`, `icon`, `Component` |
|  *item*.**id** | *string* | null |  |
|  *item*.**label** | *string* | null |  |
|  *item*.**icon** | *string* | null |  |
|  *item*.**Component** | Component | null |  |

## Development

    npm run dev

### Tests

    npm test

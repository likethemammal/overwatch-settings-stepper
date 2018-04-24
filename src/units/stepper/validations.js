export const NO_STEP_LEFT = (
    shouldShowLeftStepper
) => {
    if (!shouldShowLeftStepper) {
        throw 'onStepLeft should not be called when left arrow is disabled'
    }
}

export const NO_STEP_RIGHT = (
    shouldShowRightStepper
) => {
    if (!shouldShowRightStepper) {
        throw 'onStepRight should not be called when right arrow is disabled'
    }
}


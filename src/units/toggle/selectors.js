
import general from '@likethemammal/overwatch-general'

const { validations } = general

export const activeIndex = (toggled) => {
    return toggled ? 0 : 1
}
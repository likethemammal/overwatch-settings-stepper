
import general from '@likethemammal/overwatch-general'

const { validations } = general

//selectors
export const activeIndex = (toggled) => {
    return toggled ? 0 : 1
}
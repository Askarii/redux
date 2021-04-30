const INCREMENT = ''
const DECREMENT = ''


export const increment = _ => ({
    type: INCREMENT
})

export const decrement = _ => ({
    type: DECREMENT
})

const initialState = {
    count: 0
}

//ACTIONS- decrement <-> increment
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}
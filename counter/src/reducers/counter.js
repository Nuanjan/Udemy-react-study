
const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + action.payload
        case "DECREMENT":
            while(state > 0)
            return state - 1
        default:
            return state
    }  
}
export default counterReducer;
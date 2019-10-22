import * as actionType from './action'


const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionType.INCREMENT:
           return{
            ...state,
            counter: state.counter + action.value
           }
        case actionType.DECREMENT:
            return{
                ...state,
                counter: state.counter - action.value
            }
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            } 
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionType.DELETE_RESULT:
                const updateArray = state.results.filter(result => result.id !== action.resultElId);
            return{
                ...state,
                results: updateArray
            }
    }
    return state;
}

export default reducer;
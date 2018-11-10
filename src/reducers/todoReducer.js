import { TODO_REQUEST, TODO_REQUEST_FAILED, TODO_REQUEST_SUCCESS, TODO_SELECTED_TASK } from '../actions/todoAction';
import { initState } from '../initState';

export function todosReducer(state = initState, action){
    switch (action.type){
        case TODO_REQUEST: 
            return {
                ...state, 
                ...action.payload
            }
        case TODO_REQUEST_FAILED: 
            return {
                ...state, 
                ...action.payload
            }
        case TODO_REQUEST_SUCCESS:
            return {
                ...state, 
                ...action.payload
            };
        case TODO_SELECTED_TASK:
            return {
                ...state, 
                selectedTaskIds: [...state.selectedTaskIds, action.payload]
            };
        default:
            return state;
    }
}

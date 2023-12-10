
import {Dispatch} from "redux";
import {StateType} from "./Store";


type ActionType = ReturnType<typeof setMaxCounterAC>
                | ReturnType<typeof increaseCounterAC>
                | ReturnType<typeof resetAC>
                | ReturnType<typeof setMinCounterAC>
                | ReturnType<typeof changeMaxInputValueAC>
                | ReturnType<typeof changeMinInputValueAC>

export type InStateType = typeof initialState

let initialState =  {
    min: 0,
    max: 1,
    count: 0,
    maxInputValue: 1,
    minInputValue: 0,
    error: false
}


export const Reducer = (state: InStateType = initialState, action: ActionType): InStateType => {
    switch (action.type) {
        case 'INCREASE':
            return state.count < state.max ? {...state, count: state.count + 1} : state
        case 'RESET':
            return {...state, count: state.min}
        case 'CHANGE-MAX':
            let condition = state.maxInputValue <= state.minInputValue || state.maxInputValue > 10
            let copyState = {...state}
            copyState.maxInputValue = action.payload.maxValue
            condition ? copyState.error = true : copyState.error = false
            return copyState
                // {...state, error: true, maxInputValue: action.payload.maxValue} :
                // {...state, maxInputValue: action.payload.maxValue, error: false}
        case 'CHANGE-MIN':
            return state.minInputValue >= state.maxInputValue || state.minInputValue < 0 ?
                {...state, error: true,  minInputValue: action.payload.minValue } : {...state, minInputValue: action.payload.minValue, error: false}
        case 'SET-MAX':
            return {...state, max: state.maxInputValue}
        case 'SET-MIN':
            return {...state, min: state.minInputValue}
        default:
            return state
    }
}

export const changeMaxInputValueAC = ( maxValue: number)=>{
    return {type: 'CHANGE-MAX', payload: {maxValue}} as const
}
export const changeMinInputValueAC = ( minValue: number)=>{
    return {type: 'CHANGE-MIN', payload: {minValue}} as const
}
export const increaseCounterAC = () => {
    return {type: 'INCREASE'} as const
}
export const resetAC = () => {
    return {type: 'RESET'} as const
}
export const setMaxCounterAC = () => {
    return {type: 'SET-MAX'} as const
}
export const setMinCounterAC = () => {
    return {type: 'SET-MIN'} as const
}





export const increaseCounterTC = () => {
    return (dispatch: Dispatch, getState: () => StateType) => {
        let currentValue = getState().counter.count
        localStorage.setItem('value', JSON.stringify(currentValue + 1))
        dispatch(increaseCounterAC())
    }
}
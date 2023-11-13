import {StateType} from "../App";

type setMaxCounterACType = ReturnType<typeof setMaxCounterAC>
type setMinCounterACType = ReturnType<typeof setMinCounterAC>
type increaseCounterACType = ReturnType<typeof increaseCounterAC>
type changeMaxInputValueACType = ReturnType<typeof changeMaxInputValueAC>
type changeMinInputValueACType = ReturnType<typeof changeMinInputValueAC>
type resetACType = ReturnType<typeof resetAC>
type ActionType = setMaxCounterACType
                | increaseCounterACType
                | resetACType
                | setMinCounterACType
                | changeMaxInputValueACType
                | changeMinInputValueACType



let initialState: StateType =  {
    min: 0,
    max: 1,
    count: 0,
    maxInputValue: 1,
    minInputValue: 0
}
export const Reducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE':
            return state.count < state.max ? {...state, count: state.count + 1} : state
        case 'RESET':
            return {...state, count: state.min}
        case 'CHANGE-MAX':
            return {...state, maxInputValue: action.payload.maxValue}
        case 'CHANGE-MIN':
            return {...state, minInputValue: action.payload.minValue}
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


import {StateType} from "../App";

type setMaxCounterACType = ReturnType<typeof setMaxCounterAC>
type setMinCounterACType = ReturnType<typeof setMinCounterAC>
type increaseCounterACType = ReturnType<typeof increaseCounterAC>
type resetACType = ReturnType<typeof resetAC>
type ActionType = setMaxCounterACType | increaseCounterACType | resetACType | setMinCounterACType




let initialState: StateType =  {
    min: 0,
    max: 1,
    count: 0}
export const Reducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE':
            return state.count < state.max ? {...state, count: state.count + 1} : state
        case 'RESET':
            return {...state, count: state.min}
        case 'SET-MAX':
            return {...state, max: action.payload.maxValue}
        case 'SET-MIN':
            return {...state, min: action.payload.minValue}
        default:
            return state
    }
}

export const setMaxCounterAC = ( maxValue: number)=>{
    return {type: 'SET-MAX', payload: {maxValue}} as const
}
export const setMinCounterAC = ( minValue: number)=>{
    return {type: 'SET-MIN', payload: {minValue}} as const
}
export const increaseCounterAC = () => {
    return {type: 'INCREASE'} as const
}
export const resetAC = () => {
    return {type: 'RESET'} as const
}


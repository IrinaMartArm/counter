import {increaseCounterAC, Reducer, resetAC, setMaxCounterAC, setMinCounterAC} from "./Reducer";
import {StateType} from "../App";


test('count should be increase', () => {

    const startState: StateType = {
        min: 0,
        max: 1,
        count: 0,
        maxInputValue: 5,
        minInputValue: 0
    }


    const action = increaseCounterAC()
    const endState = Reducer(startState, action)

    expect(endState.count).toBe(1)
})
test('count should be reset', () => {

    const startState: StateType = {
        min: 0,
        max: 1,
        count: 5,
        maxInputValue: 5,
        minInputValue: 0
    }


    const action = resetAC()
    const endState = Reducer(startState, action)

    expect(startState.count).toBe(5)
    expect(endState.count).toBe(0)
})
test('max and min should be set', () => {

    const startState: StateType = {
        min: 0,
        max: 1,
        count: 0,
        maxInputValue: 5,
        minInputValue: 2
    }


    const action = setMinCounterAC()
    const endState = Reducer(startState, action)

    expect(startState.min).toBe(0)
    expect(endState.min).toBe(2)

})
test('max and min should be set', () => {

    const startState: StateType = {
        min: 0,
        max: 1,
        count: 0,
        maxInputValue: 5,
        minInputValue: 2
    }


    const action = setMaxCounterAC()
    const endState = Reducer(startState, action)

    expect(startState.max).toBe(1)
    expect(endState.max).toBe(5)
})

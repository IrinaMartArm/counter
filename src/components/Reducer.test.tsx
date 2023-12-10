import {increaseCounterAC, InStateType, Reducer, resetAC, setMaxCounterAC, setMinCounterAC} from "./Reducer";


let startState: InStateType
beforeEach(() => {
    startState= {
        min: 0,
        max: 5,
        count: 2,
        maxInputValue: 6,
        minInputValue: 1,
        error: false
    }
})



test('count should be increase', () => {

    const action = increaseCounterAC()
    const endState = Reducer(startState, action)

    expect(endState.count).toBe(3)
})
test('count should be reset', () => {


    const action = resetAC()
    const endState = Reducer(startState, action)

    expect(startState.count).toBe(2)
    expect(endState.count).toBe(0)
})
test('max and min should be set', () => {


    const action = setMinCounterAC()
    const endState = Reducer(startState, action)

    expect(startState.min).toBe(0)
    expect(endState.min).toBe(1)

})
test('max and min should be set', () => {

    const action = setMaxCounterAC()
    const endState = Reducer(startState, action)

    expect(startState.max).toBe(5)
    expect(endState.max).toBe(6)
})

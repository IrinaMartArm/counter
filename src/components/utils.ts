import {StateType} from "./Store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter')
        if(serializedState === null) {
            return undefined
        }
        return  JSON.parse(serializedState)
    } catch (err) {
        return  undefined
    }
}

export  const saveState = (state: StateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('counter', serializedState)
    } catch {}
}
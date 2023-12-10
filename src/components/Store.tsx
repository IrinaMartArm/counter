import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {Reducer} from "./Reducer";
import {thunk} from "redux-thunk";
import {loadState, saveState} from "./utils";

const rootReducer = combineReducers({
    counter: Reducer
})

export type StateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState(
        {counter: store.getState().counter}
    )
})

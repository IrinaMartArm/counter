import {createStore} from "redux";
import {Reducer} from "./Reducer";



export type ReducerType = ReturnType<typeof Reducer>
export const store = createStore(Reducer)
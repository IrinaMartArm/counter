import {createStore} from "redux";
import {Reducer} from "./components/Reducer.tsx";


export type ReducerType = ReturnType<typeof Reducer>
export const store = createStore(Reducer)
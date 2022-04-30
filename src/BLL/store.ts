import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../Utils/LocalStorage-utils";


const rootReducer = combineReducers({
    counter: counterReducer,
});

export const store = createStore(rootReducer,loadState())

store.subscribe(()=>{
    saveState({
        counter:store.getState().counter
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {loginReducer} from "./login";
import {registrReducer} from "./registration";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    login: loginReducer,
    registr: registrReducer
})

export type RootState = ReturnType<typeof rootReducer>

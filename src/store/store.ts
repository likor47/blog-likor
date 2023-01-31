import {combineReducers, configureStore} from "@reduxjs/toolkit"
import postReducer, {postSlice} from './reducers/PostSlice'
import {postAPI} from "../services/PostService";


const rootReducer = combineReducers( {
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(postAPI.middleware);
        }
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof rootReducer>
// @ts-ignore
export type AppDispatch = AppStore['dispatch']
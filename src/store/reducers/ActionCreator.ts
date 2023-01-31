import {AppDispatch} from "../store";
import axios from "axios";
import {IPost} from "../../models";
import {postSlice} from "./PostSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(
    'post/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Не вдалось завантажити")
        }

    }
)
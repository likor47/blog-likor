import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IPost} from "../models";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000', prepareHeaders(headers) {
            return headers;
        },}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], any>({
            query: ({limit = 10, page = 1}) => ({
                url: `/posts`,
                params: {
                    _limit: limit,
                    _page: page
                },
            }),
            providesTags: result => ['Post']
        }),
        fetchPostsCount: build.query<IPost[], number>({
            query: () => ({
                url: `/posts`,
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})



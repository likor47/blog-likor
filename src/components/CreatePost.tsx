import React, {useState} from 'react'
import {IPost} from '../models'
import '../styles/Modal.scss'
import {postAPI} from "../services/PostService";
import {useGlobalState} from "../state";
import {Editor, EditorState} from 'draft-js';
import {useNavigate} from "react-router-dom";

interface CreatePostProps {
    onCreate: () => void
}

export function CreatePost({ onCreate }: CreatePostProps) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [error, setError] = useState('')
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const { data: posts} = postAPI.useFetchAllPostsQuery(100)
    const userCharLimit = 1200

    const navigate = useNavigate();

    const [darkTheme] = useGlobalState('darkTheme')
    const mode = localStorage.getItem('theme')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        // @ts-ignore
        if (localStorage.getItem('input').trim().length === 0) {
            setError('Please enter valid title.')
            return
        }
        const title = localStorage.getItem('input')
        const body = localStorage.getItem('body')
        await createPost({title, body} as  IPost)

        onCreate()
    }

    const titleInput = (event: any) => {
        setValue1(event.target.value)
        localStorage.setItem('input', event.target.value)
    }
    const bodyInput = (event: any) => {
        setValue2(event.target.value)
        localStorage.setItem('body', event.target.value)
    }

    return (
        <form className="modal_form" onSubmit={submitHandler}>
            <input
                type="text"
                className={mode === 'false' ? "title_input" : "title_input title_input__dark"}
                placeholder="Введіть назву посту"
                value={localStorage.getItem('input') || ''}
                onChange={titleInput}
            />
            <label className={mode === 'false' ? "file_label" : "file_label title_input__dark"} htmlFor="file_input">
                <i className="fa fa-2x fa-camera"></i>
                <input
                    id="file_input"
                    type="file"
                    className={mode === 'false' ? "file_input" : "file_input title_input__dark"}
                    value={value3}
                    onChange={event => setValue3(event.target.value)}
                />
            </label>
            <textarea
                className={mode === 'false' ? "body_input" : "body_input title_input__dark"}
                placeholder={`Текст посту (Максимум ${userCharLimit} символів)...`}
                maxLength={userCharLimit}
                value={localStorage.getItem('body') || ''}
                onChange={bodyInput}
                id="name"
            />

            <button type="submit" className="create_btn">Створити</button>
            <button className="create_btn" style={{marginLeft: '4px', backgroundColor: '#00cc00'}} onClick={() => navigate('/premium')}><i className="fa fa-star"></i></button>
        </form>
    )
}
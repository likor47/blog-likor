import React, {FC, useCallback, useContext, useEffect, useState} from 'react';
import '../../styles/Post.scss'
import '../../styles/General.scss'
import ModalW from '../ModalW';
import {ModalContext} from '../../context/ModalContext';
import {IPost} from '../../models';
import {CreatePost} from '../CreatePost';
import Loader from '../Loader';
import Navbar from '../Navbar';
import Footer from '../Footer';
import image from '../../images/oldtimes.jpg'
import userImage from '../../images/sergiy.jpg'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useNavigate} from 'react-router-dom';
import {postAPI} from '../../services/PostService';
import DropDown from '../DropDown';
import {createTheme, Pagination, ThemeProvider} from '@mui/material';
import Highlight from '../Highlighter';
import {useGlobalState} from '../../state';
import {darkMode, lightMode} from '../../theme'


const MainPage: FC = (): JSX.Element => {
    const [darkTheme] = useGlobalState('darkTheme')
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5)
    const { data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery({limit, page})
    const {data: count} = postAPI.useFetchPostsCountQuery(100)
    const {modal, open, close} = useContext(ModalContext)
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [searchTerm, setSearchTerm] = useState('')

    const mode = localStorage.getItem('theme')

    const pageQty = count && Math.ceil(count.length / limit)

    const createHandler = () => {
        close()
    }

    const removeHandler = (post: IPost) => {
        deletePost(post)
    }

    const updateHandler = (post: IPost) => {
        updatePost(post)
    }


    const navigate = useNavigate();

    const openUserPage = () => {
        navigate('/user')
    }


    const lighter = (str: string) => {
        return <Highlight filter={searchTerm} str={str}/>
    }

    return (
        <div className={mode === 'false' ? "wrapper" : "wrapper dark"}>

            <Navbar search={searchTerm} setSearch={setSearchTerm}/>

            <ThemeProvider theme={mode === 'true' ? darkMode : lightMode}>
            <div className="main">
                <div className="container">
                {isLoading && <Loader/>}
                {error && <h1 className="post__error">Сталась помилка...</h1>}
                <button className={"modal_btn"} onClick={open}><span className="modal_span">+</span><span className="modal_comment">Пост</span></button>
                <TransitionGroup>
                    {posts && posts.slice(0).reverse().filter((post) => {
                        if (searchTerm === '') {
                            return post
                        }
                        else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return post
                        }
                        else if (post.body.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return post
                        }
                    }).map(post =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post__transition"
                        >
                        <div
                            className={mode === 'false' ? "post" : "post post_dark"}
                            onClick={() => updateHandler(post)}
                            >
                            <button className={mode === 'false' ? "post__btn1" : "post__btn1 post__btn_dark"} onClick={() => removeHandler(post)}>✖</button>
                            <h1 className={mode === 'false' ? "post__title" : "post__title post__title_dark"} >{lighter(post.title)}</h1>
                            <div className={mode === 'false' ? "post__title_divider" : "post__title_divider post__title_divider_dark" }></div>

                                <div className="post__img_box">
                                    <img className="post__img" src={image} />
                                </div>
                            <hr className="post__hr"/>

                            <div className={mode === 'false' ? "post__body" : "post__body post__title_dark"}>{lighter(post.body)}</div>

                            <hr className="post__hr"/>

                            <div className="post__bottom">
                                <div className={mode === 'false' ? "post__author" : "post__author post__author_dark"} >Автор: <img src={userImage} onClick={openUserPage} className="post__author_image"/></div>
                                <div className="post__dropdown">
                                        <DropDown  post={post}/>
                                </div>
                            </div>

                        </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                {!isLoading && !error && <Pagination
                    count={pageQty}
                    className="post__pagination"
                    color="primary"
                    page={page}
                    onChange={(_, num) => setPage(num)}
                /> }

                {modal && <ModalW title="Додати пост" onClose={close}>
                    <CreatePost onCreate={createHandler}/>
                </ModalW>}
                </div>
            </div>
                </ThemeProvider>

            <Footer/>

        </div>

    );
};

export default MainPage;
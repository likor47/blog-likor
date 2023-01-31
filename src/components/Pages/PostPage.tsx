import React, {FC, useCallback, useEffect, useState} from 'react';
import '../../styles/General.scss'
import '../../styles/PostDetail.scss'
import Navbar from "../Navbar";
import Footer from "../Footer";
import userImage from '../../images/sergiy.jpg'
import {postAPI} from "../../services/PostService";
import {useNavigate, useParams} from "react-router-dom";
import {useGlobalState} from "../../state";


const postInfo = {
    author : 'Сергій',
    date:'13 грудня 2022'
}

const PostPage:FC = () => {

    const [darkTheme] = useGlobalState('darkTheme')

    const mode = localStorage.getItem('theme')

    const { data: posts} = postAPI.useFetchAllPostsQuery(100)

    const params = useParams()

    const navigate = useNavigate();

    const openUserPage = () => {
        navigate('/user')
    }

    return (
        <div className={ mode === 'false' ? "wrapper": "wrapper dark"} style={{overflowX: "hidden"}}>
            <Navbar search={false} setSearch={false}/>
                <div className="post_detail">
                    <h1 className={mode === 'false' ? "post_detail__title" : "post_detail__title post_detail__dark"}>{params.id && posts && posts[Number(params.id)-1].title}</h1>
                    <div className={mode === 'false' ? "post_detail__body" : "post_detail__body post_detail__dark"}>
                        <div className="post_detail__top">”</div>
                        {params.id && posts && posts[Number(params.id)-1].body}
                        <div className="post_detail__bottom">„</div>
                    </div>
                    <div className="post_detail__info">
                            <div className={mode === 'false' ? "post_detail__author" : "post_detail__author post_detail__dark"}  onClick={openUserPage}><span className="post_detail__bold">Автор: </span> {postInfo.author}<img src={userImage} className="post_detail__image"/></div>
                            <div className="post_detail__separator"></div>
                            <div className={mode === 'false' ? "post_detail__date" : "post_detail__date post_detail__dark"}><span className="post_detail__bold">Дата:</span>{postInfo.date}</div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default PostPage;
import React, {FC, useState} from 'react';
import '../../styles/User.scss'
import '../../styles/General.scss'
import Navbar from "../Navbar";
import Footer from "../Footer";
import {useNavigate} from "react-router-dom";
import {postAPI} from "../../services/PostService";
import Loader from "../Loader";
import {useGlobalState} from "../../state";
const logo = require('../../images/bigsergiy.jpg');

const User = {
    post: 6,
    role: 'Адміністратор',
    name: 'Сергій',
    online: false
}
const UserPage: FC = () => {

    const [darkTheme] = useGlobalState('darkTheme')

    const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100)

    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState('Прекрасний новий день');

    const navigate = useNavigate();

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setUpdated(message);
    };

    let mode = localStorage.getItem('theme')

    return (
        <div className={mode === 'false' ? "wrapper" : "wrapper dark"}>
            <Navbar search={false} setSearch={false}/>
            <div className="container">
                <div className="user">
                    <div className="user__info">
                        <h1 className="user__name">{User.name} <span className="user__badge" onClick={() => navigate(`/premium`)}>Premium</span></h1>
                        <div className="user__main">
                            <div className= "user__box">
                                <img className="user__image" src={String(logo)} alt="star"/>
                                <div className='status_circle'><div className="status_minus">-</div></div>
                            </div>
                            <div className="user__status">{updated}</div>
                        </div>
                        <div className={mode === 'false' ? "user__stats" : "user__stats user__stats_dark"}>
                            <div className="user__stat">Користувач: {User.name}</div>
                            <div className="user__stat">Кількість постів: {User.post}</div>
                            <div className="user__stat">Роль: {User.role}</div>
                            <div className="user__stat">{User.online ?<span className="online_status">Онлайн</span> : <span className="offline_status">Оффлайн</span>}</div>
                        </div>
                    </div>
                    <div className={darkTheme ? "user__story" : "user__story user__story_dark"}>
                        <h1 className="user__name">Розкажіть про себе</h1>
                        <div className="user__story_container">
                            <textarea className={mode === 'false' ? "user__text" : "user__text user__text_dark"} value={message} onChange={handleChange} placeholder="Що у вас нового?"/>
                            <button className="user__btn"  onClick={handleClick} >Опублікувати</button>
                        </div>
                        <h1 className="user__name">Недавні пости</h1>
                            {isLoading && <Loader/>}
                            {error && <h1 className="post__error" >Сталась помилка...</h1>}
                            <div className="user__posts">
                                {posts && posts.map(post => <div onClick={() => navigate(`/posts/${post.id}`)} className="user__post" key={post.id}>{post.title}</div>)}
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserPage;
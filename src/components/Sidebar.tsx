import React, {FC} from 'react';
import '../styles/Sidebar.scss'
import {postAPI} from "../services/PostService";
import {useGlobalState} from "../state";

const Sidebar: FC = (): JSX.Element => {

    const [darkTheme] = useGlobalState('darkTheme')
    const { data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery({})
    const mode = localStorage.getItem('theme')

    return (
        <div className={mode === 'false' ? "sidebar" : "sidebar sidebar_dark"}>
            <div className="sidebar__links">
                {posts && posts.map(post => <div className="sidebar__link">{post.title}</div>)}
            </div>
        </div>
    );
};

export default Sidebar;
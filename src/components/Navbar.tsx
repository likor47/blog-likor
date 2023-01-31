import React, {FC, useState} from 'react';
import '../styles/Navbar.scss'
import {Link, useNavigate} from 'react-router-dom';
import '../images/sergiy.jpg'
import {setGlobalState, useGlobalState} from "../state";

const Navbar = ({search, setSearch} : any) => {
    const [darkTheme] = useGlobalState('darkTheme')
    const navigate = useNavigate();
    const [display, setDisplay] = useState(true)

    const openUserPage = () => {
        navigate('/user')
    }
    const openAuthPage = () => {
        navigate('/auth')
    }

    const setThemeInStorage = (theme: boolean) => {
        localStorage.setItem('theme',  String(theme))
    }

    function darkThemeHandler() {
        setGlobalState('darkTheme', prev => !prev)

        setThemeInStorage((mode !== 'true'))

    }

    const mode = localStorage.getItem('theme')

    return (
        <div className={mode === 'false' ? "navbar" : "navbar navbar__dark"}>
            <Link className="navbar__btn" style={{marginRight: 6}} to="/">Головна</Link>
            <Link className="navbar__btn" style={{cursor: "help"}} to="/about"> <span className="navbar__btn_comment1">Про сайт</span><span className="navbar__btn_comment2">Довідка</span></Link>
            <button className={mode === 'true' ? "navbar__dark_mode" : "navbar__dark_mode navbar__dark_mode_dark"} onClick={darkThemeHandler}></button>

            <div className="navbar__search_container">
                <input
                    className={mode === 'false' ? "navbar__search" : "navbar__search navbar__search_dark"}
                    type="text"
                    placeholder="Пошук на сайті.."
                    onChange={e => setSearch(e.target.value)}
                />
                <button className="navbar__searchbtn"></button>
            </div>

            <div className="navbar__user" onClick={openUserPage}>
                <div className="navbar__username">Сергій</div>
                <button className="navbar__img" />
            </div>
            <div className="navbar__links">
                <button className="navbar__btn" onClick={openAuthPage}>
                    Вийти
                </button>
            </div>
            <section className="navbar__burger">
                <input id="menu-toggle" type="checkbox"/>
                <label className="navbar__menu_container" htmlFor="menu-toggle">
                    <div className="navbar__menu_button" onClick={() => setDisplay(prev => !prev)}></div>
                </label>
                <ul className={mode === 'false' ? "navbar__menu" : "navbar__menu navbar__menu_dark" } style={display ? {display: 'none'} : {display: 'flex'}}>
                    <li onClick={() => navigate('/')}>Головна</li>
                    <li onClick={() => navigate('/about')}>Про сайт</li>
                    <li onClick={openAuthPage}>Вийти</li>
                    <li>
                        <div>
                            <input type="checkbox" className="checkbox" id="checkbox" onChange={darkThemeHandler} checked={mode === 'false'}/>
                                <label htmlFor="checkbox" className="label">
                                    <i className="fas fa-moon"></i>
                                    <i className='fas fa-sun'></i>
                                    <div className='ball'/>
                                </label>
                        </div>
                    </li>
                </ul>
            </section>
            <button onClick={openUserPage} className="navbar__img2" />
        </div>

    );
};

export default Navbar;
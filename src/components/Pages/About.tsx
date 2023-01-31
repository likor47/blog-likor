import React, {FC, useEffect} from 'react';
import '../../styles/About.scss'
import '../../styles/General.scss'
import Navbar from "../Navbar";
import Footer from "../Footer";
import {useGlobalState} from "../../state";




const User = {
    body : 'Сайт-блог, створений користувачем Сергієм "Likor47" Герієм у 2022му році.',
    email: 'limonikcnanel@gmail.com',
    number: '+380968594602'
}
const About: FC= () => {

    let mode = localStorage.getItem('theme')

    const [darkTheme] = useGlobalState('darkTheme')

    return (
        <div className={mode === 'false' ? "wrapper" : "wrapper dark"}>
            <Navbar search={false} setSearch={false}/>
            <div className="container">
                <div className="bird-container bird-container--one">
                    <div className="bird bird--one"></div>
                </div>

                <div className="bird-container bird-container--two">
                    <div className="bird bird--two"></div>
                </div>

                <div className="bird-container bird-container--three">
                    <div className="bird bird--three"></div>
                </div>

                <div className="bird-container bird-container--four">
                    <div className="bird bird--four"></div>
                </div>
                <div className="about">
                    <h1 className={mode === 'false' ? "about__title" : "about__title about__title_dark"}>Про сайт</h1>
                    <div className={mode === 'false' ? "about__story" : "about__story about__story_dark"}>
                        <div>{User.body}</div>
                        <div className="about__separator"></div>
                        <div>Емейл: <a href="https://mail.google.com/" style={{color: '#ff9500'}}>{User.email}</a></div>
                        <div>Телефон: {User.number}</div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
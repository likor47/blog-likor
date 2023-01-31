import React, {FC, useContext} from 'react';
import '../../styles/Auth.scss'
import '../../styles/General.scss'
import {useNavigate} from "react-router-dom";
import Footer from "../Footer";
import {useGlobalState} from "../../state";

const AuthPage: FC = () => {

    const [darkTheme] = useGlobalState('darkTheme')

    const mode = localStorage.getItem('theme')

    const navigate = useNavigate()

    const login = () => {
        navigate('/')
    }

    return (
        <div className={ mode === 'false' ? "wrapper" : "wrapper dark"}>
            <div className="auth">
                <div className={ mode === 'false' ? "auth__window" : "auth__window auth__dark"}>
                    <h1 className={ mode === 'false' ? "auth__h" : "auth__h auth__h_dark"} >Увійдіть або зареєструйтесь</h1>
                    <form className="auth__form" onSubmit={login}>
                        <input className="auth__input" type="email" placeholder="Введіть емейл..."/>
                        <input className="auth__input" type="password" placeholder="Введіть пароль..."/>
                        <button className="auth__button" type="submit">Вхід</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default AuthPage;
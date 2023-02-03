import React, {FC} from 'react';
import {useGlobalState} from "../../state";
import '../../styles/General.scss'
import '../../styles/Premium.scss'
import Navbar from "../Navbar";
import Footer from "../Footer";
import {useNavigate} from "react-router-dom";


const PremiumPage: FC = () => {

    const [darkTheme] = useGlobalState('darkTheme')

    let mode = localStorage.getItem('theme')

    const navigate = useNavigate()

    return (
        <div className={mode === 'false' ? "wrapper" : "wrapper dark"}>
            <Navbar search={false} setSearch={false}/>
            <div className="premium__container">
                <div className="premium__card">
                    <div className="box">
                        <div className="content">
                            <h3>Default</h3>
                            <div>
                                <h2>D</h2>
                                <p> - 600 символів для ваших постів</p>
                                <p> - Звичайні можливості кастомізації постів</p>
                            </div>
                                <a href="#">Безкоштовно</a>
                        </div>
                    </div>
                </div>

                <div className="premium__card">
                    <div className="box">
                        <div className="content">
                            <h3>Advance</h3>
                            <div>
                                <h2>A</h2>
                                <p> - 200 додаткових символів для ваших постів</p>
                                <p> - Більше унікальних можливостей для кастомізації постів</p>
                            </div>
                            <a onClick={() => navigate('/payment')}>120 грн/міс</a>
                        </div>
                    </div>
                </div>

                <div className="premium__card">
                    <div className="box">
                        <div className="content">
                            <h3>Premium</h3>
                            <div>
                                <h2>P</h2>
                                <p> - 400 додаткових символів для ваших постів</p>
                                <p> - Ще більше унікальних можливостей для кастомізації постів</p>
                                <p> - Бейджик "Преміум" біля вашого імені</p>
                            </div>
                            <a onClick={() => navigate('/payment')}>250 грн/міс</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PremiumPage;
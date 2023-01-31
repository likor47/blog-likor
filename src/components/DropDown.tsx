import React, {useContext, useEffect, useRef, useState} from 'react';
import reportImage from "../images/report.png";
import reportImageWhite from "../images/report_white.png";
import {useNavigate} from "react-router-dom";
import {ModalContext} from "../context/ModalContext";
import ModalW from "./ModalW";
import Report from "./Report";
import "../styles/DropDown.scss"
import {useGlobalState} from "../state";

const DropDown = (props: any) => {

    const [darkTheme] = useGlobalState('darkTheme')

    const {modal1, open1, close1} = useContext(ModalContext)

    const [openDrop, setOpenDrop] = useState(false);

    const navigate = useNavigate();

    const mode = localStorage.getItem('theme')

    const menuRef = useRef(null)

    useEffect(() => {

        const handler = (event: { target: any; }) =>  {

            // @ts-ignore
            if (!menuRef.current.contains(event.target)) {
                setOpenDrop(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }


    })


    return (
        <>
            <button ref={menuRef} className={mode === 'false' ? "post__btn2" : "post__btn2 post__btn_dark"} onClick={() => setOpenDrop(prev => !prev)}>•••
                {openDrop ? (
                <ul  className={mode === 'false' ? "dropdown__menu" : "dropdown__menu dropdown__menu_dark" }>
                    <li className="dropdown__menu_item">
                        <button onClick={() => navigate(`/posts/${props.post.id}`)} style={mode === 'false' ? {color: 'black'} : {color: 'white'}}>Читати...</button>
                    </li>
                    <li className="dropdown__menu_item">
                        <button onClick={open1} style={mode === 'false' ? {color: 'black'} : {color: 'white'}}>Поскаржитись <img src={ mode === 'false' ? reportImage : reportImageWhite} className="post__report"/></button>
                    </li>
                </ul>
                ) : null}
            </button>
            {modal1 && <ModalW title="" onClose={close1}>
                <Report/>
            </ModalW>}
        </>
    );
};

export default DropDown;
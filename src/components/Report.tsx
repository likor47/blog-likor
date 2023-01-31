import React, {FC, useState} from 'react';
import '../styles/Report.scss'
import {ReactSpoiler} from "react-simple-spoiler";


const reports = [
    {id: 1, text: 'Насильство або надмірна жорстокість', body: 'Наприклад, зображення крові або травм'},
    {id: 2, text: 'Розпалювання ненависті', body: 'Наприклад, образливі звернення, символи ненависті'},
    {id: 3, text: 'Травля', body: 'Наприклад, цілеспрямовані образи, пропаганда образ, сексуальні домагання'},
    {id: 4, text: 'Контент 18+', body: 'Наприклад, матеріали сексуального характеру, повна або часткова нагота'},
    {id: 5, text: 'Спам, аферизм або боти', body: 'Наприкалд, шкідливі посилання, фішинг'},
    {id: 6, text: 'Тероризм', body: 'Наприклад, терорестичні акти, терорестичні організації, вербування або пропаганда'},
]

const Report: FC = () => {

    const [sent, setSent] = useState(false)
    const [status, setStatus] = useState(0)

    const radioHandler = (status : number) => {
        setStatus(status)
    }

    return (
        <div>

                    <div className="report__title">Чому ви надсилаєте цю скаргу?</div>
                    <div className="report__body">
                        {reports.map(report => (
                        <div className="report__element" key={report.id}>
                            <label className="report__container">{report.text}
                                <input type="radio" name="radio" checked={status === report.id} onClick={(e) => radioHandler(report.id)}/>
                                <span className="report__checkmark"></span>
                            </label>
                            {status === report.id && <div className="report__spoiler">{report.body}</div>}

                        </div>))}

                    </div>
                    <button className="report__button" onClick={() => setSent(true)}>Надіслати</button>

               {!sent ? <div></div> : <div className="report__success">Скаргу надіслано!</div> }

        </div>
    );
};

export default Report;
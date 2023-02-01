import React, {FC} from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import {useGlobalState} from "../../state";

const PaymentPage: FC = (): JSX.Element => {

    const [darkTheme] = useGlobalState('darkTheme')
    const mode = localStorage.getItem('theme')

    return (
        <div className={mode === 'false' ? "wrapper" : "wrapper dark"}>
            <Navbar search={false} setSearch={false}/>
                <div>Оплата</div>
            <Footer/>
        </div>
    );
};

export default PaymentPage;
import React, {FC} from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import {useGlobalState} from "../../state";
import '../../styles/Payment.scss'

const PaymentPage: FC = (): JSX.Element => {

    const [darkTheme] = useGlobalState('darkTheme')
    const mode = localStorage.getItem('theme')

    return (
        <div className={mode === 'false' ? "wrapper" : "wrapper dark"}>
            <Navbar search={false} setSearch={false}/>
                <div className="payment__main">
                    <h1>Оплата</h1>
                    <div className="payment__icon">
                        <i className="fa fa-cc-visa" style={{color: 'navy'}}></i>
                        <i className="fa fa-cc-amex" style={{color: 'blue'}}></i>
                        <i className="fa fa-cc-mastercard" style={{color: 'red'}}></i>
                        <i className="fa fa-cc-discover" style={{color: 'orange'}}></i>
                    </div>
                    <form>
                        <label htmlFor="cname">Ім'я на карті</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                        <label htmlFor="ccnum">Номер кредитної карти</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                        <div>
                            <div>
                                <label htmlFor="expmonth">Дата</label>
                                <input type="text" id="expyear" name="expyear" placeholder="10/22"/>
                            </div>
                            <div>
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" placeholder="352"/>
                            </div>
                        </div>
                    </form>
                </div>
            <Footer/>
        </div>
    );
};

export default PaymentPage;
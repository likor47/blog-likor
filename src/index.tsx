import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ModalState} from "./context/ModalContext";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);


root.render(

    <Provider store={store}>
        <ModalState>
                <App />
        </ModalState>
    </Provider>
);

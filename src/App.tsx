import React, {useEffect, useState} from 'react';
import MainPage from "./components/Pages/MainPage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import About from "./components/Pages/About";
import UserPage from "./components/Pages/UserPage";
import AuthPage from "./components/Pages/AuthPage";
import PostPage from "./components/Pages/PostPage";
import SecretPage from "./components/Pages/SecretPage";
import PremiumPage from "./components/Pages/PremiumPage";
import PaymentPage from "./components/Pages/PaymentPage";


function App() {


    return (
        <BrowserRouter>

              <Routes>
                  <Route path="/"  element={<MainPage />}  />
                  <Route path="/about" element={<About />}  />
                  <Route path="/user" element={<UserPage />}  />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/secret" element={<SecretPage />} />
                  <Route path="/premium" element={<PremiumPage />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/posts/:id" element={<PostPage />} />
              </Routes>

        </BrowserRouter>

  );

}

export default App;

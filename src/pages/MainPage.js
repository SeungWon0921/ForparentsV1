import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MainContainer2 from '../container/MainContainer2';
import GlobalStyle from '../GlobalStyles';

const MainPage = () => {
    const [isOpen, setIsOpen] =useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
}
    return(
        <>
        <Helmet>
        <title>포페런츠 || 트레블헬퍼</title>
        </Helmet>
        <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <MainContainer2/>
        <Footer/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        </>
    );
}

export default MainPage;
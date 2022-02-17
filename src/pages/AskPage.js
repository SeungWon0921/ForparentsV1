import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GlobalStyle from '../GlobalStyles';
import { Helmet } from 'react-helmet';
import AskContainerTop from '../container/AskContainerTop';



const AskPage = () => {
    const [isOpen, setIsOpen] =useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
}
    return(
        <>
        <Helmet>
        <title>트레블헬퍼 || 문의하기</title>
        </Helmet>
        <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <AskContainerTop/>
        <Footer/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        </>
    );
}

export default AskPage;
import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GlobalStyle from '../GlobalStyles';
import { Helmet } from 'react-helmet';
import ServiceTopContainer from '../container/ServiceTopContainer';
import ServiceContContainer from '../container/ServiceContContainer1';


const ServicePage = () => {
    const [isOpen, setIsOpen] =useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
}
    return(
        <>
        <Helmet>
        <title>트레블헬퍼 || 서비스 소개</title>
        </Helmet>
        <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <ServiceTopContainer/>
        <ServiceContContainer/>
        <Footer/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        </>
    );
}

export default ServicePage;
import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GlobalStyle from '../GlobalStyles';
import { Helmet } from 'react-helmet';
import ServiceTopContainer from '../container/ServiceTopContainer';
import ServiceContContainer2 from '../container/ServiceContContainer2';


const CompanyPage = () => {
    const [isOpen, setIsOpen] =useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
}
    return(
        <>
        <Helmet>
        <title>트레블헬퍼 || 회사소개</title>
        </Helmet>
        <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <ServiceTopContainer/>
        <ServiceContContainer2/>
        <Footer/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        </>
    );
}

export default CompanyPage;
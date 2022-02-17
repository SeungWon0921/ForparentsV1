import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../GlobalStyles';
import HelperTopContainer from '../container/HelperContainerTop';
import HelperContContainer from '../container/HelperContContainer1';
import Navbar_b from '../components/Navbar_b';


const HelperPage = () => {
    const [isOpen, setIsOpen] =useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
}
    return(
        <>
                <Helmet>
        <title>트레블헬퍼 || 헬퍼소개</title>
        <meta
    name="description"
    content="포페런츠에서 부모님께 나들이를 선물해보세요"/>
    <meta name="keywords" content="포페런츠, 팀포페런츠, ForParents,트레블헬퍼, 헬퍼, 나들이,시니어 나들이, 시니어 여행"/>
    <meta property="og:url" content="forparents.co.kr/intro"/>
    <meta property="og:url" content="www.forparents.co.kr/intro"/>
    <link rel="canonical" href="http://www.forparents.co.kr/intro"/>
        </Helmet>
        <GlobalStyle/>
        <Navbar_b toggle={toggle}/>
        <HelperTopContainer/>
        <HelperContContainer/>
        <Footer/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        </>
    );
}

export default HelperPage;
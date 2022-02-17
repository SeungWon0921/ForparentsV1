import React, { useEffect, useReducer, useRef } from 'react';
import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import { FaBars } from "react-icons/fa";
import "./Navbar.css";


const Nav = styled.nav`
    height: 60px;
    display:flex;
    text-align: center;
    align-items: center;
    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: transparent;
    img:nth-child(1){
        margin-left:8%;
        height:27.9px;
        position:fixed;
    }
    img:nth-child(2){
        display:none;
    }

    @media screen and (max-width: 900px){
        img:nth-child(1){
            display:none;
        }
        img:nth-child(2){
            display:block;
            height:34px;
            position: fixed;
            left: 35px;
            top: 16px;
        }
    }
`;
const NavLink = css `
    color: #fff;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;
const Logo = styled(Link)`
    ${NavLink}
    `;



const MenuBars = styled(FaBars)`
    display: none;
    @media screen and (max-width: 900px){
        display: block;
        color: #fff;
        height:40px;
        width:40px;
        cursor: pointer;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-50%, 30%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 900px){
        display: none ;
    }
`;

const Dropdown_2 = styled.div`
    width= 100%;
    height = 300px;
    background-color = #fff; 
    opacity: ${({isOpen})=> (isOpen ? '1' : '0')};
    top: ${({isOpen})=> (isOpen ? '0' : '-100%')}; 
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right:24px;
    @media screen and (max-width: 900px){
        display: none;
    }
`;
const Navbar_b = ({toggle}) => {

    return (
        <Nav>
            <Logo to='/'>
                <img src = '/images/logo_b.png'/>
                <img src='/images/m_logo_b.png'/>
                <div className='m_logo'>
                    FOR PARENTS
                </div>
            </Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                <div className="box_inner">
                <ul className="gnb box_inner">
                    <li className='home'><Link style={{color:'#000'}} to="/">홈</Link></li>
                    <li className='sogae'><a style={{color:'#000'}} >소개</a>
                    <ul className='sogae_sub'>
                        <li><Link to='/intro'>서비스 소개</Link></li>
                        <li><Link to='/intro/company'>회사 소개</Link></li>
                    </ul>
                    </li>
                    
                    <li ><Link style={{color:'#000'}} to="/service">트레블헬퍼</Link></li>
                    <li className="reservation"><a onClick={()=> window.open('http://naver.me/Fql4XzSx')}>신청서작성</a></li>
                    <li className='reservation'><Link to='/ask'>문의하기</Link></li>
                </ul>
                </div>
            </NavMenu>
            <NavBtn>
            </NavBtn>
        </Nav>
    );
};

export default Navbar_b;



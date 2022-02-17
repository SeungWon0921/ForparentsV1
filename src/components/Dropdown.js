import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { MenuData } from '../data/MenuData';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height:100%;
background: rgba(255,255,255,0.5);
display:grid;
align- items: center;
top: 0;
right:0;
transition: 0.7s ease-in-out;
opacity: ${({isOpen})=> (isOpen ? '1' : '0')};
top: ${({isOpen})=> (isOpen ? '0' : '-100%')};
`;
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const CloseIcon = styled(FaTimes)`
    color:#000;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5,80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 460px){
        grid-template-rows: repeat(5,60px);
    }
`;
const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color:#cd2;
    }
`;
const BtnWrap = styled.div`
    display: flex;
    font-size:1.2rem;
    justify-content: space-around;
    
`;
const Dropdown = ({isOpen, toggle}) => {
return(
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {MenuData.map((item, index)=> (
                    <DropdownLink to={item.link} key = {index}>
                        {item.title}
                    </DropdownLink>
                ))}
                <a className="shin" onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>신청서작성</a>
                <a className="shin" onClick={()=> window.open('http://naver.me/5mrUl7On','_blank')}>헬퍼신청하기</a>
            </DropdownMenu>
            <BtnWrap>
                    <li className="contact">
                    <a href="tel:010-5497-4817">전화하기</a></li><li className="kakao"><a onClick={()=> window.open('https://pf.kakao.com/_KxdKxfb/chat','_blank')}>카카오톡</a></li>
            </BtnWrap>
        </DropdownWrapper>
    </DropdownContainer>
)
}

export default Dropdown;
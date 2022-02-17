import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <div class="foot_area">
                <ul class="foot_list clear">
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보취급방침</a></li>
                </ul>
                <h2>For Parents | 포페런츠</h2>
                <p class="addr">서울특별시 서대문구 연세로50 경영관 209호 이글루 <span class="gubun">/</span> <span class="br_line">대표전화 <span class="space0">010-5497-4817</span> <span class="gubun">/</span> <br></br><span class="br_line">E-mail : <span class="space0">team.forparents@gmail.com</span></span></span></p>
                <p class="copy">Copyright(c) ForParents all right reserved</p>
                <ul class="snslink">
                    <li><a onClick={()=> window.open('https://pf.kakao.com/_KxdKxfb/chat','_blank')}>Kakao</a></li>
                    <li><a href="#">facebook</a></li>
                    <li><a onClick={()=> window.open('https://www.instagram.com/forparents_official/','_blank')}>instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;


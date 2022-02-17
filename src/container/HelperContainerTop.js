import React from 'react';
import "./HelperContainerTop.css";
import styled from 'styled-components';
import {AiFillRightCircle} from 'react-icons/ai';

const HelperTopContainer = () => {
    const GoIcon3 = styled(AiFillRightCircle)`
    position: absolute;
    color:#000;
    margin: 3px 5px;
    width:1.5vw;
    height:1.5vw;
    @media screen and (max-width:900px) {
        display:none;
    }
`
    return(
        <div className="Container">
            <div className="Hel_Main_area">
                <div className='Hel_txt_area'>
                    <div className='Main_txt'>
                    <h1>포페런츠의 모든 <span>헬퍼</span>는</h1>
                    <h1><span>사회복지사</span>입니다.</h1>
                    <br/><br/>
                    </div>
                    <div className='Sub_txt'>
                        <p>트레블헬퍼(Travel Helper)란, 혼자 여행이 어려운 어르신 및 교통약자를 위하여<br/> 고용된 나들이 도우미를 뜻합니다.</p>
                    </div>
                    <div className="H_btn">
                    <p><a style={{background: "#424895"}} onClick={()=> window.open('http://naver.me/5mrUl7On','_blank')}>헬퍼 등록하기</a></p>
                </div>
                </div>
                <div className='Img_area'>
                    <img src="/images/image9.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default HelperTopContainer;
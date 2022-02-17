import React from 'react';
import './ServiceContContainer.css';
import styled from 'styled-components';
import {AiFillRightCircle} from 'react-icons/ai';

const ServiceContContainer = () => {
    const GoIcon = styled(AiFillRightCircle)`
    position: absolute;
    color:#000;
    margin: 2px 5px;
    @media screen and (max-width:900px) {
        display:none;
    }
`
    const GoIcon2 = styled(AiFillRightCircle)`
    color:#000;
    width:2vw;
    height:2vw;
    margin-right:8px;
`
    return(
        <div className='Container'>
            <div className='Main_Cont_area'>
                <div className='Main_Cont_txt'>
                <h1>진행과정</h1>
                <div><h2><GoIcon2/>서비스 요청</h2>
                    <p>원하는 옵션을 선택하여 자녀분이 For Parents에 신청합니다.</p></div>
                    <div><h2><GoIcon2/>사전상담</h2>
                    <p>For Parents에 등록된 전문적인 헬퍼가 배정되고,</p>
                    <p>나들이에 필요한 어르신에 관한 정보 및 주의사항을 공유합니다.</p></div>
                    <div><h2><GoIcon2/>나들이 컨설팅</h2>
                    <p>For Parents의 사례관리를 바탕으로 컨설팅이 진행되고,</p> <p>헬퍼에게 가이드라인이 제공됩니다.</p></div>
                    <div><h2><GoIcon2/>나들이 동행</h2>
                    <p>어르신의 즐거운 나들이를 위해 전문적인 헬퍼가 동행합니다.</p> <p>요청이 있을 시, 자녀분께 나들이 과정을 공유합니다.</p></div>
                    <div><h2><GoIcon2/>서비스 후 관리</h2>
                    <p>진행된 나들이에 관해 어르신의 만족도가 심층 상담을 통해 기록되고,</p><p> 자녀분께 상담지 결과가 보고됩니다.</p></div>
                </div>
                <div className='Main_Cont_img'>
                    <img src='/images/JinHang.jpg'/>
                    <img src='/images/JingHang2.jpg'/>
                    <img src='/images/JinHang3.jpg'/>
                </div>
            </div>
            <div className="Ser_btn_bottom">
                    <p><a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>신청하기<GoIcon/></a></p>
                </div>
                <div className='Main_Cont_m_img'>
                    <img src='/images/JinHang.jpg'/>
                    <img src='/images/JingHang2.jpg'/>
                    <img src='/images/JinHang3.jpg'/>
                </div>
        </div>
    );
};

export default ServiceContContainer;
import React from 'react';
import "./ServiceTopContainer.css";

const ServiceTopContainer = () => {
    return(
        <div className="Container">
            <div className="Ser_Main_area">
                <div className='Ser_txt_area'>
                    <div className='Main_txt'>
                    <h1>포페런츠는 <span>트레블헬퍼</span> 서비스로</h1>
                    <h1>어르신의 무료함과 외로움을</h1>
                    <h1>해결하고자 합니다.</h1>
                    <br/><br/>
                    </div>
                    <div className='Sub_txt'>
                        <p>트레블헬퍼(Travel Helper)란, 혼자 여행이 어려운 어르신 및 교통약자를 위하여 고용된 나들이 도우미를 뜻합니다.</p>
                        <br/><br/>
                        <p>첫째, 포페런츠의 모든 헬퍼는 사회복지사로 전문성을 가진 사회복지사가 부모님을 안전하고 편안하게 모십니다.<br/><br/></p> 
                        <p>둘째, 기존의 패키지 여행사와는 달리 소수의 어르신들을 모시고 프라이빗한 나들이를 보장합니다.<br/><br/>
                        </p>
                        <p> 셋째 : 꼼꼼한 가이드라인을 통해 자체적으로 카페, 식당 등 ‘어르신 친화 가게’를 선정하여 보다 검증된 여행지를 제공합니다.</p>
                    </div>
                </div>
                <div className='Img_area'>
                    <img src="/images/Service.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default ServiceTopContainer;
import React from 'react';
import './ServiceContContainer2.css';
import styled from 'styled-components';
import {AiFillRightCircle} from 'react-icons/ai';

const ServiceContContainer2 = () => {
    const GoIcon = styled(AiFillRightCircle)`
    position: absolute;
    color:#000;
    margin: 2px 5px;
    
`
    const GoIcon2 = styled(AiFillRightCircle)`
    color:#000;
    width:1.8vw;
    height:1.8vw;
    margin-right:8px;
`
    return(
        <div className='Container'>
            <div className='Main_Cont2_area'>
                <div className='Main_Cont2_txt'>
                <h1>핵심가치</h1>
                <div><h2><GoIcon2/>즐거움</h2>
                    <p>포페런츠의 트레블헬퍼는 빡빡한 일정 속 고단한 여행이 아닌, 부모님의 즐거움이 우선되어야 한다는 철학을 갖고 있습니다.</p></div>
                    <div><h2><GoIcon2/>안전</h2>
                    <p>포페런츠는 고객의 안전함을 최우선으로 고려합니다. 포페런츠의 꼼꼼한 사례관리 상담과 체계적인 가이드라인은 든든한 안전망을 제공합니다.</p></div>
                    <div><h2><GoIcon2/>편안함</h2>
                    <p>포페런츠는 고객을 편안히 모시도록 하겠습니다. 넓고 쾌적한 차량과 이동 중 헬퍼의 케어는 고객의 신체는 물론 심리적 안정감을 제공합니다.</p>
                    </div>
                </div>
                <div className='Main_Cont2_img'>
                    <img src='/images/Gachi.png'/>
                </div>
            </div>
            <div className='Main_Cont2_area2'>
                <div className='Main_Cont2_img'>
                    <img src='/images/BI.png'/>
                </div>
                <div className='Main_Cont2_txt'>
                    <h3>BI / CI</h3>
                    <p>For Parents의 약자 FP를 부모님의 선물을 준비하는 마음으로 선물로 형상화하였습니다. 청색, 황색, 회색 3색을 각각 Active Navy, Pleasure Yellow, Eternal Silver 컬러로 명명하였습니다. 이는 활력, 기쁨, 영원함으로 For Parents가 바라는 시니어의 속성을 담고 있습니다.</p>
                </div>
                <div className='Main_Cont2_m_img'>
                    <img src='/images/BI.png'/>
                </div>
            </div>
        </div>
    );
};

export default ServiceContContainer2;
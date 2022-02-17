import React, { useEffect, useState } from 'react';
import './MainContainer2.css';
import {AiFillRightCircle} from 'react-icons/ai';
import styled, { css } from 'styled-components';

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
    width:3vw;
    height:3vw;
    vertical-align:middle;
    margin-right:8px;

`

const MainContainer2 = () => {
    const [position, setPosition] =useState(0);
    function onScroll(){
        setPosition(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener("scroll",onScroll);
        return () => {
            window.removeEventListener("scroll",onScroll);
        }
    },[])
    return(
        <div className="Container">
            <div className="Main_area">
                <div className="Main_txt">
                <h2>부모님 나들이는</h2>
                <h2><span style={{color:'#424895'}}>포페런츠</span>와 함께</h2>
                <div className='Main_sub_txt'>
                    <p>여러분의 부모님만을 위한 특별한 선물.</p>
                    <p>클릭 한번으로 부모님께 행복을 선물하세요.</p>
                </div>
                <div className="btn">
                    <p><a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>신청하기<GoIcon/></a></p>
                </div>
                </div>
            </div>
            <section className='fir_sec'>
            <div className='fir_cont_area'>
                <div className='img_sec'>
                    <img src='/images/image3.jpg'/>
                </div>
                <div className='txt_sec'>
                    <p className='title'>여러분의 부모님,</p>
                    <p className='title'><span>건강</span>하신가요?</p>
                    <p className='sub_txt'>경제적 욕구를 충족시켜주기를 원하는 어르신들은 전체 노인인구 중 1/4에 불과하고 나머지 3/4은 여가 선용을 위한 욕구가 가장 높다고 합니다. 이것을 통해 우리는 어르신들의 삶의 질에 대한 욕구가 다양해지고 변화되어 가고 있음을 알 수 있습니다.<br/><br/>최근 코로나19로 인한 사회적 거리두기로 인해 어르신들의 사회적 상호작용, 외부 활동 , 운동량 등이 감소되는 경향을 보입니다. 이것은 자연스레 어르신들의 신체기능 감소, 우울, 만성 질환 악화로 이어지게 됩니다.</p>
                    <div className="btn">
                    <p><a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>신청하기<GoIcon/></a></p>
                </div>
                </div>
                <div className='m_img_sec'>
                    <img src='/images/image3.jpg'/>
                </div>
            </div>
            </section>
            <section className='sec_sec'>
            <div className='sec_cont_area'>
                <div className='txt_sec'><p className='title'>부모님을 위한 선물,</p>
                <p className='title'><span>트레블헬퍼</span></p>
                <p className='sub_txt'>어르신들을 위해 포페런츠에서 준비했습니다. 어르신들의 안전하고 즐거운 나들이를 위해 전문 사회복지사가 동행하고, 편안한 차량 또한 마련되어 있습니다.<br/><br/>클릭 한번으로 부모님꼐 행복을 선물하세요.</p>
                <div className="btn">
                    <p><a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>신청하기<GoIcon/></a></p>
                </div>
                </div>
                <div className='img_sec'>
                    <img src='/images/image9.jpg'/>
                </div>
            </div>
            </section>
            <section className='thr_sec'>
            <div className='thr_cont_area'>
            <div className='img_sec'>
            <img src='/images/image8.jpg'/>
            <img src='/images/subimage.png'/>
            </div>
                <div className='txt_sec'>
                    <p className='title'><span>즐거움, 안전, 편안함</span>을</p>
                    <p className='title'>여러분께 약속드립니다.</p>
                    <div className='sub_txt_1'><h1><GoIcon2/><span>헬퍼</span></h1>
                    <p className='sub_txt'>제약이 많은 어르신도 나들이가 가능하도록 전문성을 가진 사회복지사가 동행합니다.</p></div>
                    <div><h1><GoIcon2/><span>프라이빗</span></h1>
                    <p className='sub_txt'>타인과 섞여 불편한 패키지 여행과 달리, 지인들과 함께 원하는 코스로 선택할 수 있는 프라이빗 서비스입니다.</p></div>
                    <div><h1><GoIcon2/><span>편안한 여행</span></h1>
                    <p className='sub_txt'>안락한 차량으로 부모님을 안전하고 편안하게 모십니다.</p></div>
                </div>
                <div className='m_img_sec'>
            <img src='/images/subimage.png'/>
            </div>
            </div>
            </section>
            <div className="btn_bottom">
                    <p><a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>신청하기<GoIcon/></a></p>
                </div>
        </div>
    );
}

export default MainContainer2;
import React from 'react';
import "./AskContainerTop.css";

const AskContainerTop = () => {
    return(
        <div className="Container">
        <div className="Ask_Main_area">
            <div className='Ask_txt_area'>
                <div className='Main_txt'>
                <h1>포페런츠는 언제나</h1>
                <h1><span>고객님의 의견</span>에 귀기울이고 있습니다</h1>
                <br/><br/>
                </div>
                <div className='Sub_txt'>
                    <p>문의사항이 있으시다면, 주저하지 말고 연락주세요.<br/> '자주 하는 질문'도 참고 부탁드립니다.</p>
                </div>
                <div className="A_btn">
                <p><a onClick={()=> window.open('https://pf.kakao.com/_KxdKxfb/chat','_blank')}>문의하기</a></p>
            </div>
            </div>
        </div>
    </div>
    );
};

export default AskContainerTop;
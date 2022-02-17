import React, { useState } from "react";
import { HelperData } from "../data/HelperData";
import './HelperContContainer1.css';

const HelperContContainer = () => {
    const [the, SetThe] =useState(false)
    const The = () => SetThe(!the)
    return(
        <div className="Container">
            <div className="Main_H_Cont_area">
                <h1>소속 헬퍼</h1>
            </div>
            <div className={the==false ? 'Member_area' :'Member_area_the'}>
            {HelperData.map((item, index)=> (
                <div className="img_area">
                    <div className="img_line">
                    <img src={item.img}/>
                    </div>
                    <p className="Member_name">{item.name}</p>
                    <p className="Member_detail">성별 : {item.gender}<br/>
                    지역 : {item.area}<br/>
                    경력 : {item.gyong}
                    </p>
                    </div>
                ))}
            </div>
            <div className={the==false ? 'the_btn' : 'the_btn_off'}><a onClick={The}>더보기</a></div>
            <div className={the==true ? 'dot_btn' : 'dot_btn_off'}><a onClick={The}>닫기</a></div>
        </div>
    );
};

export default HelperContContainer;
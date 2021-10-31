import React from 'react';
import PropTypes from 'prop-types';
import brand1 from '../../assets/images/BrandLogo/brand1.png'
import brand2 from '../../assets/images/BrandLogo/brand2.png'
import brand3 from '../../assets/images/BrandLogo/brand3.png'
import brand4 from '../../assets/images/BrandLogo/brand4.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import badge from '../../assets/images/badge2020.png'


const Issue = props => {
    return (
        <div className="issue">
            <div className="issue__header container">

                <div className="issue__header-title"> HAPPENED'S ISSUE</div>
                <div className="issue__header-content">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</div>
                <button className="issue__button button__show"> SEE MORE </button>
            </div>
            <div className="issue__brand">
                <div className="issue_brand-item slider d-flex justify-content-around">
                    <img className="badge-slider" src={badge} alt="badge img" />
                    <div className="slide__title" > WHPN ISSUE </div>
                    <button className="slide__button" > <i class="fas fa-arrow-right "></i>  </button>
                </div>
                <div className="issue_brand-item">
                    <div className="brand-name"> B Brand </div>
                    <img src={brand1} className="issue_brand-img" alt="Brand Logo" />
                </div>
                <div className="issue_brand-item">
                    <div className="brand-name"> C Brand </div>
                    <img src={brand2} className="issue_brand-img" alt="Brand Logo" />
                </div>
                <div className="issue_brand-item">
                    <div className="brand-name"> D Brand </div>
                    <img src={brand3} className="issue_brand-img" alt="Brand Logo" />
                </div>
                <div className="issue_brand-item">
                    <div className="brand-name"> E Brand </div>
                    <img src={brand4} className="issue_brand-img" alt="Brand Logo" />
                </div>

            </div>
            <img className="dice1" src={dice1} alt="dice img" />
            <img className="dice2" src={dice2} alt="dice img" />
        </div>
    );
};


export default Issue;
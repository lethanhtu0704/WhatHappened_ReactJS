import React from 'react';
import BagImage from '../../assets/images/bag-banner.png'
import SoapImage from '../../assets/images/soap-banner.png'
import BoxImage from '../../assets/images/box-banner.png'
import Badge from '../../assets/images/badge.png'
const ProductBanner = props => {
    return (
        <div className="banner3">
            <div className="container">
                <div className="row">
                    <div className="banner3__text col-12">
                        <div className="banner3__text-title"> BEST PRODUCT </div>
                        <p className="banner3__text-content"> How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first  </p>
                    </div>
                </div>
            </div>

            <div className="container banner3__img">
                <div className="banner3__img-product">
                    <div className="banner3__badge">
                        <div className="banner3__badge-content">
                            <img src={Badge} alt="Badge" />
                            <div className="banner3__badge-number">01 </div>
                        </div>

                    </div>
                    <img src={SoapImage} alt="best product" />
                    <div className="banner3__description">
                        <div className="banner3__description-content">
                            <h4 className="banner3__description-text">How to create mobile-optimized</h4>
                            <div className="banner3__description-link"></div>
                        </div>
                    </div>
                </div>
                <div className="banner3__img-product">
                    <div className="banner3__badge">
                        <div className="banner3__badge-content">
                            <img src={Badge} alt="Badge" />
                            <div className="banner3__badge-number">03</div>
                        </div>

                    </div>
                    <img src={BagImage} alt="best product" />
                    <div className="banner3__description">
                        <div className="banner3__description-content">
                            <h4 className="banner3__description-text">How to create mobile-optimized</h4>
                            <div className="banner3__description-link"></div>
                        </div>
                    </div>
                    <div className="banner3__badge">
                        <div className="banner3__badge-content">
                            <img src={Badge} alt="Badge" />
                            <div className="banner3__badge-number">02</div>
                        </div>
                    </div>
                </div>
                <div className="banner3__img-product">
                    <div className="banner3__badge">
                        <div className="banner3__badge-content">
                            <img src={Badge} alt="Badge" />
                            <div className="banner3__badge-number">03</div>
                        </div>
                    </div>
                    <img src={BoxImage} alt="best product" />
                    <div className="banner3__description">
                        <div className="banner3__description-content">
                            <h4 className="banner3__description-text">How to create mobile-optimized</h4>
                            <div className="banner3__description-link"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductBanner;
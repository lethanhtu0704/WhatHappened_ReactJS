import React from 'react';
import logo1 from "../../assets/images/N-Logo.png"
import logo2 from "../../assets/images/facebook-logo.png"
import logo3 from "../../assets/images/w-logo.png"

const Footer = props => {
    return (
        <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className="col-xl-3 col-sm-4 col-lg-4 col-md-12 col-sm-4  col-12 col large-footer">
                        <h5 className="headin5_amrc col_white_amrc pt2">what happened</h5>
                        {/* headin5_amrc */}
                        <ul className="footer_ul_amrc">
                            <li><a href="/#">[공지] 개인 정보 처리 방침 변경 사전 안내</a></li>
                            <li><a href="/#">[공지] 29CM 강남 스토어 영업 종료</a></li>
                            <li><a href="/#">[공지] 개인 정보 처리 방침 변경 사전 안내</a></li>
                            <li><a href="/#">공지] iOS 10 이하 버전 지원 중단 안내</a></li>
                            <li><a href="/#">[공지] 개인 정보 처리 방침 변경 사전 안내</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-5 col-sm-4 col-lg-5 col-md-0 none-mobile  col-6 col">
                    </div>
                    <div className="col-xl-1 col-sm-4 col-md-3 col-lg-2  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">about us</h5>
                        {/*headin5_amrc*/}
                        <ul className="footer_ul_amrc">
                            <li><a href="/#">회사 소개</a></li>
                            <li><a href="/#">인재 채용</a></li>
                            <li><a href="/#">상시 할인 혜택</a></li>
                        </ul>
                        {/*footer_ul_amrc ends here*/}
                    </div>
                    <div className="col-xl-1 col-sm-4 col-md-3 col-lg-2  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">my order</h5>
                        {/*headin5_amrc*/}
                        <ul className="footer_ul_amrc">
                            <li><a href="/#">내 주문</a></li>
                            <li><a href="/#">주문 배송</a></li>
                            <li><a href="/#">취소 / 교환 / 반품 내역</a></li>
                            <li><a href="/#">상품 리뷰 내역</a></li>
                            <li><a href="/#">증빙 서류 발급</a></li>
                        </ul>
                        {/*footer_ul_amrc ends here*/}
                    </div>

                    <div className="col-xl-1 col-sm-4 col-md-3 col-lg-2  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">my acc</h5>
                        {/*headin5_amrc*/}
                        <ul className="footer_ul_amrc">
                            <li><a href="/#">회원 정보 수정</a></li>
                            <li><a href="/#">회원 등급</a></li>
                            <li><a href="/#">마일리지 현황</a></li>
                            <li><a href="/#">쿠폰</a></li>
                        </ul>
                        {/*footer_ul_amrc ends here*/}
                    </div>
                    <div className="col-xl-1 col-sm-4 col-md-3 col-lg-2  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">help</h5>
                        {/*headin5_amrc ends here*/}
                        <ul className="footer_ul_amrc">
                            <li><a href="/#">1 : 1 상담 내역</a></li>
                            <li><a href="/#">상품 Q&A 내역</a></li>
                            <li><a href="/#">공지 사항</a></li>
                            <li><a href="/#">자주하는 질문</a></li>
                            <li><a href="/#">고객의 소리</a></li>
                        </ul>
                        {/*footer_ul2_amrc ends here*/}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer_bottom">
                    <div className="footer_text">
                        <div> © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr</div>
                        <div>서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</div>
                    </div>
                    <div className="footer_icon">
                        <img className="footer_icon-item" src={logo1} alt="logo brand" />
                        <img className="footer_icon-item" src={logo2} alt="logo brand" />
                        <img className="footer_icon-item" src={logo3} alt="logo brand" />
                    </div>
                </div>

            </div>
        </footer>

    );
};


export default Footer;
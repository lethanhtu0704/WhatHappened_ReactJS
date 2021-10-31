import React from 'react';
import twobook from '../../assets/images/brandStoryImg/2book.png';
import calendar from '../../assets/images/brandStoryImg/calendar.png';
import pot from '../../assets/images/brandStoryImg/flower-pot.png';
import leftImg from '../../assets/images/brandStoryImg/left-storyImg.png';
import note from '../../assets/images/brandStoryImg/note.png';
import rotateBook from '../../assets/images/brandStoryImg/rotate-book.png';

const Story = props => {
    return (
        <div className="story">
            <div >
                <div className="story__header container mt-5">
                    <div className="row text-center">
                        <div className="col-12">
                            <h3 className="story__header-title text-center ">BRAND STORY</h3>
                            <span className="story__header-content">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</span>
                        </div>

                    </div>

                </div>
                <div className="story__content">
                    <div className="story__content-orange">
                        <img className="story__img-leftImg" src={leftImg} alt="Decorate img" />
                    </div>
                    <div className="story__content-white">
                        <div className="container">

                            <div className="story__content-white-item ">
                                <div className="row">
                                    <div className="story__content-title col-12"> What Happened’s Brand story </div>
                                    <div className="story__content-desc col-12"> 청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                                        봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                        긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                        인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                        아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.  </div>
                                    <button className="story__content-button button__show"> SEE MORE </button>
                                </div>

                            </div>


                        </div>


                    </div>

                </div>

                <img className="story__img-twobook" src={twobook} alt="Decorate img" />
                <img className="story__img-calendar" src={calendar} alt="Decorate img" />
                <img className="story__img-pot" src={pot} alt="Decorate img" />
                <img className="story__img-note" src={note} alt="Decorate img" />
                <img className="story__img-rotateBook" src={rotateBook} alt="Decorate img" />
            </div>
        </div>
    );
};



export default Story;
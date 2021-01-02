import React from 'react';

import Header from 'components/common/Header';

export default function MyPost() {
    return (
        <div className="auth__page">
            <Header />
            <main className="auth__page__main">
                <section className="auth__page__main__section">
                    <div className="my__post__page__header">
                        <h1>드라마 제목 에피소드</h1>
                        <button>작성 완료</button>
                    </div>
                    <div className="my__post__page__body">
                        <div className="drama__info">
                            <h1>제목</h1>
                            <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="드라마 이미지"/>
                            <p className="drama__details__info">
                                회차 정보 : ...
                            </p>
                            <p className="drama__item__info">
                                아이템 정보 : ...
                            </p>
                        </div>
                        <div className="item">
                            <h2>아이템 제목</h2>
                            <div className="item__image__list">
                                <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="드라마 이미지"/>
                                <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="드라마 이미지"/>
                            </div>
                            <p className="item__info">
                                아이템 설명: 
                            </p>
                            <div className="item__short__link">
                                숏 링크 : 
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
            <footer className="auth__page__footer">

            </footer>
        </div>
    )
}

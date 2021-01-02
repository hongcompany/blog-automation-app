import React from 'react';
import { Link } from 'react-router-dom';

export default function DramaList() {
    return (
        <div className="auth__page">
            <header className="auth__page__header">
                <h1>Blog Automation</h1>
                <nav className="auth__page__header__nav">
                    <ul className="auth__page__header__nav__link__list">
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/drama">드라마</Link></li>
                        <li><span>로그아웃</span></li>
                    </ul>
                </nav>
            </header>
            <main className="auth__page__main">
                <section className="auth__page__main__section">
                    <section className="drama__list__page">
                        <h3>방영 중인 드라마</h3>
                        <div className="drama__list__page__filter">
                            <ul>
                                <li>포스팅 중</li>
                                <li>포스팅 완료</li>
                                <li>전체</li>
                            </ul>
                        </div>
                        <div className="drama__list__page__drama__list">
                            {/* for */}
                            <article className="drama">
                                <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="드라마 이미지"/>
                                <h5 className="drama__title">제목</h5>
                                <div className="drama__info">
                                    <span>방송사</span>| 
                                    <span>요일</span>|
                                    <span>시간</span>|
                                    <span>시청률</span>|
                                    <span>구독 수</span>
                                </div>
                                <span className="drama__posting__status">포스팅 중</span>
                            </article>
                        </div>
                    </section>
                </section>
            </main>
            <footer className="auth__page__footer">

            </footer>
        </div>
    )
}

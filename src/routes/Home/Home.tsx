import React from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

export default function Home() {
    return (
        <div className="auth__page">
            <Header />
            <main className="auth__page__main">
                <section className="auth__page__main__section">
                    <section className="home__page__drama__list__section">
                        <h3>포스팅 중인 드라마</h3>
                        <div className="home__page__drama__list">
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
                    <section className="home__page__drama__table__section">
                        <h3>포스팅 해야 될 글</h3>
                        <table className="home__page__drama__table">
                            <thead>
                                <tr>
                                    <th className="posting__drama__title">드라마 제목</th>
                                    <th className="posting__drama__episode__no">에피소드</th>
                                    <th className="posting__drama__button">포스팅 하기</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>바람피면 죽는다</td>
                                    <td>2회</td>
                                    <td><button>GO</button></td>
                                </tr>
                                <tr>
                                    <td>바람피면 죽는다</td>
                                    <td>3회</td>
                                    <td><button>GO</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    )
}

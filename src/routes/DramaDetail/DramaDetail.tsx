import React from 'react';

import Header from 'components/common/Header';

export default function DramaDetail() {
    return (
        <div className="auth__page">
            <Header />
            <main className="auth__page__main">
                <section className="auth__page__main__section">
                    <section className="drama__detail__page">
                        <div className="drama__detail__page__header">
                            <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="드라마 이미지"/>
                            <h3>드라마 제목</h3>
                            <p>
                                드라마 소개 내용
                            </p>
                            <p>
                                드라마 등장 인물
                            </p>
                            <div className="">
                                <label htmlFor="isTotalCompleted">전체 포스팅 완료 여부</label> 
                                X
                            </div>
                        </div>
                        <div className="drama__detail__page__body">
                        <table className="post__status__table">
                            <thead>
                                <tr>
                                    <th className="episode__no">회차</th>
                                    <th className="button">포스팅 하기</th>
                                    <th className="post__status">포스트 여부</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1회</td>
                                    <td><button>UPDATE</button></td>
                                    <td>O</td>
                                </tr>
                                <tr>
                                    <td>2회</td>
                                    <td><button>CREATE</button></td>
                                    <td>X</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </section>
                </section>
            </main>
            <footer className="auth__page__footer">

            </footer>
        </div>
    )
}

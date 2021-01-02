import React from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import DramaCard from 'components/drama/DramaCard';

export default function Home() {
    const dramaList = [
        {
            id : 0,
            imageUrl: `${process.env.PUBLIC_URL}/favicon.ico`,
            title: "바람피면 죽는다",
            broadCaster: "KBS",
            broadCastDate: "2020",
            rating: 3.2,
            status: "포스팅 중"
        },
    ]

    return (
        <div className="auth__page">
            <Header />
            <main className="auth__page__main">
                <section className="auth__page__main__section">
                    <section className="home__page__drama__list__section">
                        <h3>포스팅 중인 드라마</h3>
                        <div className="home__page__drama__list">
                            {
                                (dramaList.length > 0) && (
                                    dramaList.map(drama => <DramaCard key={drama.id} 
                                        id={drama.id}
                                        imageUrl={drama.imageUrl}
                                        title={drama.title}
                                        broadCaster={drama.broadCaster}
                                        broadCastDate={drama.broadCastDate}
                                        rating={drama.rating} 
                                        status={drama.status} />)
                                )
                            }
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

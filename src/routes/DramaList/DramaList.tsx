import React from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import DramaCard from 'components/drama/DramaCard';

export default function DramaList() {
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
                </section>
            </main>
            <Footer />
        </div>
    )
}

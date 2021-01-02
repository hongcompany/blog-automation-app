import React from 'react'

type DramaCardProps = {
    id: number,
    imageUrl: string,
    title: string,
    broadCaster: string,
    broadCastDate: string,
    rating: number,
    status: string,
};

export default function DramaCard({id, imageUrl, title, broadCaster, broadCastDate, rating, status}: DramaCardProps) {
    return (
        <article className="drama">
            <img src={imageUrl} alt={title}/>
            <h5 className="drama__title">{title}</h5>
            <div className="drama__info">
                <span>{broadCaster}</span>| 
                <span>{broadCastDate}</span>|
                <span>{rating}</span>
                {/* <span>시간</span>|
                <span>구독 수</span> */}
            </div>
            <span className="drama__posting__status">{status}</span>
        </article>
    )
}

DramaCard.defaultProps = {
    imageUrl: "",
    title: "",
    broadCaster: "",
    broadCastDate: "",
    rating: 0.0,
    status: "",
};
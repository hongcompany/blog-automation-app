import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigator() {
    return (
        <nav className="auth__page__header__nav">
            <ul className="auth__page__header__nav__link__list">
                <li><Link to="/">홈</Link></li>
                <li><Link to="/drama">드라마</Link></li>
                <li><span>로그아웃</span></li>
            </ul>
        </nav>
    )
}

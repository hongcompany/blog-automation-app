import React from 'react'
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return (
        <div className="login__form__wrapper">
            <div className="login__form__header">
                블로그 포스팅 자동화 솔루션
            </div>
            <form className="login__form">
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button type="submit">로그인</button>
            </form>
            <div className="login__form__footer">
                Blog Automation이 처음이신가요? <Link to="/signup">회원가입</Link>
            </div>
        </div>
    )
}

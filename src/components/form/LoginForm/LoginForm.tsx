import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (id === "") {
            setError("아이디 값이 비어 있습니다.");
            return;
        }

        if (password === "") {
            setError("비밀번호 값이 비어 있습니다.");
            return;
        }

        setId("");
        setPassword("");
    }

    return (
        <div className="login__form__wrapper">
            <div className="login__form__header">
                블로그 포스팅 자동화 솔루션
            </div>
            <form className="login__form" onSubmit={onSubmit}>
                <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                {error}
                <button type="submit">로그인</button>
            </form>
            <div className="login__form__footer">
                Blog Automation이 처음이신가요? <Link to="/signup">회원가입</Link>
            </div>
        </div>
    )
}

import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function SignUpForm() {
    const history = useHistory();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [accessKey, setAccessKey] = useState("");
    const [secretKey, setSecretKey] = useState("");
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

        if (accessKey === "") {
            setError("AccessKey 값이 비어 있습니다.");
            return;
        }

        if (secretKey === "") {
            setError("SecretKey 값이 비어 있습니다.");
            return;
        }

        setId("");
        setPassword("");
        setAccessKey("");
        setSecretKey("");
        setError("");
        history.push("/");
    }

    return (
        <div className="sign__up__form__wrapper">
            <div className="sign__up__form__header">
                회원가입
            </div>
            <form className="sign__up__form" onSubmit={onSubmit}>
                <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="AccessKey" value={accessKey} onChange={(e) => setAccessKey(e.target.value)} />
                <input type="password" placeholder="SecretKey" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
                {error}
                <button type="submit">회원가입</button>
            </form>
            <div className="sign__up__form__footer">
                
            </div>
        </div>
    )
}

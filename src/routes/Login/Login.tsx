import React from 'react';

import LoginForm from 'components/form/LoginForm';

export default function Login() {
    return (
        <div className="un__auth__page">
            <header className="un__auth__page__header">
                <h1>Blog Automation</h1>
            </header>
            <main className="un__auth__page__main">
                <section className="un__auth__page__main__section">
                    <LoginForm />
                </section>
            </main>
            <footer className="un__auth__page__footer">

            </footer>
        </div>
    )
}

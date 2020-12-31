import React from 'react';

import SignUpForm from 'components/form/SignUpForm';

export default function SignUp() {
    return (
        <div className="un__auth__page">
            <header className="un__auth__page__header">
                <h1>Blog Automation</h1>
            </header>
            <main className="un__auth__page__main">
                <section className="un__auth__page__main__section">
                    <SignUpForm />
                </section>
            </main>
            <footer className="un__auth__page__footer">

            </footer>
        </div>
    )
}

import React from 'react';
import Router from 'components/Router';

function App() {
    return (
        <div className="App">
            <header className="App__header">
                <h1>Hong Company Blog Automation</h1>
            </header>
            <nav className="App__nav">
            </nav>
            <main className="App__main">
                <section className="App__main__section">
                    <Router/>
                </section>
            </main>
            <footer className="App__footer">
            </footer>
        </div>
    );
}

export default App;

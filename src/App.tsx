import React from 'react';

import Router from 'components/Router';

import "App.css";

function App() {
    const isAuth = true;
    return (
        <div id="App">
            <Router isAuth={isAuth}/>
        </div>
    );
}

export default App;

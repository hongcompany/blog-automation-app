import React from 'react';

import Router from 'components/Router';

function App() {
    const isAuth = true;
    return (
        <div className="App">
            <Router isAuth={isAuth}/>
        </div>
    );
}

export default App;

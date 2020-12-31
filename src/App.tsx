import React from 'react';
import Router from 'components/Router';

function App() {
  return (
    <div className="App">
      <h1>Hong Company Blog Automation</h1>
      <Router isAuth={false} />
    </div>
  );
}

export default App;

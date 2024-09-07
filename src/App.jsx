import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main/Main'; // Import the Main component

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;

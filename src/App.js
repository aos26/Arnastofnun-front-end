import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Word from './Game';
import Header from './components/layout/Header';


function App() {
  return (
    <Router>
    <div className="App">
     <Header />
      <div className="container mx-auto">
        <Route path="/" exact component={Word}/>

      </div>
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Word from './Game';
import Header from './components/layout/Header';
import MainMenu from './MainMenu';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { isMobile } from 'react-device-detect';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="App">
          <Header isMobile={isMobile} />
          <div className="container mx-auto">
            <Route path="/game" exact component={Word} />
            <Route path="/" exact component={MainMenu} />
          </div>
        </div>
      </Router>
    </DndProvider>

  );
}

export default App;

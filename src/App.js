import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Word from './Game';
import Header from './components/layout/Header';
import MainMenu from './MainMenu';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import About from './About';
import { isMobile } from 'react-device-detect';
import { withOrientationChange } from 'react-device-detect';


function App(props) {
  const { isLandscape } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="App">
          <Header isMobile={isMobile} />
          <div className="container mx-auto">
            <Route path="/game" exact component={() => <Word isLandscape={isLandscape}/>} />
            <Route path="/" exact component={MainMenu} />
            <Route path="/about" exact component={About} />
          </div>
        </div>
      </Router>
    </DndProvider>

  );
}

App = withOrientationChange(App);

export default App;

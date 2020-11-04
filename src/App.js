import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Word from './Game';
import Header from './components/layout/Header';
import MainMenu from './MainMenu';
import AppBackground from './components/layout/AppBackground';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import About from './About';
import { isMobile } from 'react-device-detect';


function App() {
	const router = useRef(null);
	const [isFront, setIsFront] = useState(true);

	useEffect(() => {
		setIsFront(router.current.history.location.pathname == '/')

		router.current.history.listen((event) => {
			setIsFront(event.pathname == '/');
		});
	});

	return (
		<DndProvider backend={HTML5Backend}>
			<Router ref={router}>
				<div className={'App h-100'+(isFront ? ' front' : '')}>

					<AppBackground />

					{/*<Header isMobile={isMobile} />*/}
					<div className="mx-auto h-100">
						<div className="row d-flex h-100">
							<div className={'col-12 h-sm-100'+(isFront ? ' col-md-6' : isMobile ? ' col-md-2' :  ' col-md-4' )}>
								<Header />
							</div>
							<div className={'col-12'+(isFront ? ' col-md-6 h-sm-100' : isMobile ? ' col-md-10' :  ' col-md-8')}>
								<Route path="/game" exact component={() => <Word />} />
								<Route path="/" exact component={MainMenu} />
								<Route path="/about" exact component={About} />
							</div>
						</div>
					</div>
				</div>
			</Router>
		</DndProvider>
	);
}

//App = withOrientationChange(App);

export default App;

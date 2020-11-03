import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Word from './Game';
import Header from './components/layout/Header';
import MainMenu from './MainMenu';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import About from './About';
import { isMobile } from 'react-device-detect';


function App() {
	const router = useRef(null);
	const [isFront, setFront] = useState(true);

	useEffect(() => {
		setFront(router.current.history.location.pathname == '/')
		router.current.history.listen((event) => {
			console.log('route changed')
			console.log(event)

			setFront(event.pathname == '/');
		});
		if (router && router.history) {
		}
	});

	return (
		<DndProvider backend={HTML5Backend}>
			<Router ref={router}>
				<div className={'App h-100'+(isFront ? ' front' : '')}>

					<div className="app-background" />

					{/*<Header isMobile={isMobile} />*/}
					<div className="mx-auto h-100">
						<div className="row d-flex h-100">
							<div className={'col h-100'+(isFront ? ' col-6' : ' col-4')}>
								<Header />
							</div>
							<div className={'col'+(isFront ? ' col-6 h-100' : ' col-8')}>
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

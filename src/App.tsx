import React, { useState } from 'react';

import { OutputPage } from './components/OutputPage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageTabs from './components/PageTabs';

export default function App() {
	const [submitResponse, setSubmitRespnse] = useState();
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact>
						<PageTabs setSubmitRespnse={setSubmitRespnse} />
					</Route>
					<Route path='/availableTicket' exact>
						<OutputPage submitResponse={submitResponse} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

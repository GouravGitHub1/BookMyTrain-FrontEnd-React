import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './theme';

ReactDOM.render(
	<Theme>
		<App />
	</Theme>,
	document.querySelector('#root')
);

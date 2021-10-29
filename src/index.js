import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './theme';

ReactDOM.render(
	<Theme>
		{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
		{/* <CssBaseline /> */}
		<App />
	</Theme>,
	document.querySelector('#root')
);

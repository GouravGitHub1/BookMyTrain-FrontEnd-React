import React, { useState } from 'react';
// import Container from '@mui/material/Container'
// import Avatar from '@mui/material/Avatar'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import ImageList from '@mui/material/ImageList'
// import ImageListItem from '@mui/material/ImageListItem'
import { OutputPage } from './components/OutputPage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageTabs from './components/PageTabs';

// import Link from '@mui/material/Link'
// import ProTip from './ProTip'

// function Copyright() {
// 	return (
// 		<Typography variant='body2' color='text.secondary' align='center'>
// 			{'Copyright © '}
// 			<Link color='inherit' href='https://mui.com/'>
// 				Your Websit
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	)
// }
// const a = Array.from(
// 	{
// 		length: 80,
// 	},
// 	() => 1
// )

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

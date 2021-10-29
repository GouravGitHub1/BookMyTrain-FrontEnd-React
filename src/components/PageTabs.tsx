import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AvailableTicket } from './AvailableTicket';
import { FindSeat } from './FindSeat';
import { BookTicket } from './BookTicket';
import { Breakpoint } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}
function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role='tabpanel' hidden={value !== index} {...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export default function PageTabs({
	setSubmitRespnse,
}: {
	setSubmitRespnse: any;
}) {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [loading, setLoading] = useState(true);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	const [tickets, setTickets] = useState([]);
	React.useEffect(() => {
		axios
			.get('https://bookmytrainspringmongo.herokuapp.com/api/bookingdata')
			.then((response) => {
				setTickets(response.data);
				setLoading(false);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);
	return (
		<Box sx={{ bgcolor: 'background.paper' }}>
			<>
				<AppBar position='static'>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor='secondary'
						textColor='inherit'
						variant='fullWidth'
					>
						<Tab label='Avaialble Seats' />
						<Tab label='Book Tickets' />
						<Tab label='Find your Seats' />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<AvailableTicket
						width={'md' as Breakpoint}
						redirectedPage='tab'
						ticketArray={tickets}
						loading={loading}
					/>
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<BookTicket setSubmitRespnse={setSubmitRespnse} />
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<FindSeat />
				</TabPanel>
			</>
		</Box>
	);
}

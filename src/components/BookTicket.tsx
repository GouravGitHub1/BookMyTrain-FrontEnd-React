import React, { useCallback, useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
export const BookTicket = ({ setSubmitRespnse }: { setSubmitRespnse: any }) => {
	const [name, setName] = useState('');
	const [ticket, setTicket] = useState(1);
	const [amount, setAmount] = useState(120);
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setName(event.target.value);
		},
		[]
	);

	const handleTicketChange = useCallback((event) => {
		if (event.target.value < 1) setTicket(1);
		else if (event.target.value > 7) setTicket(7);
		else {
			setTicket(event.target.value);
			setAmount(event.target.value * 120);
		}
	}, []);

	const handleSubmit = useCallback(() => {
		setLoading(true);
		axios
			.post('https://bookmytrainspringmongo.herokuapp.com/api/bookseat/', {
				seatsRequired: ticket,
				userName: name,
			})
			.then((response) => {
				setSubmitRespnse(response.data);
				setLoading(false);
				history.push('/availableTicket');
			})
			.catch((error) => {
				alert(error);
			});
	}, [history, name, setSubmitRespnse, ticket]);
	return (
		<Container maxWidth='md'>
			{loading ? (
				<Stack direction='column' justifyContent='center' alignItems='center'>
					<div>
						<CircularProgress size={100} />
					</div>
				</Stack>
			) : (
				<Box sx={{ my: 6 }}>
					<TextField
						label='Enter Your Name'
						fullWidth
						value={name}
						onChange={handleChange}
						margin='normal'
					/>
					<TextField
						label='Enter Number of Tickets'
						type='number'
						fullWidth
						value={ticket}
						onChange={handleTicketChange}
						margin='normal'
					/>
					<TextField
						label='Ticket Amount'
						value={amount}
						fullWidth
						margin='normal'
						InputProps={{
							readOnly: true,
						}}
						helperText='Price of One Ticket is 120'
					/>
					<Button
						variant='contained'
						fullWidth
						style={{ marginTop: '15px' }}
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</Box>
			)}
		</Container>
	);
};

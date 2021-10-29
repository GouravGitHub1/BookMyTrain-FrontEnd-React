import React, { useCallback, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CircularProgress, Stack, Typography } from '@mui/material';
import axios from 'axios';

export const FindSeat = () => {
	const [pnr, setPnr] = useState('');
	const [showDetail, setShowDetail] = useState(false);
	const [apiResponse, setApiResponse] = useState([]);
	const [loading, setLoading] = useState(false);
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setPnr(event.target.value);
		},
		[]
	);
	let userName = '';
	let date = '';
	const details = useMemo(() => {
		return (
			<Container sx={{ my: 10 }}>
				<Stack direction='row' justifyContent='center' spacing={1}>
					<Typography variant='h6'>Seat Numbers:</Typography>
					{apiResponse.map((item: any) => {
						// eslint-disable-next-line react-hooks/exhaustive-deps
						userName = item.bookedUser;
						// eslint-disable-next-line react-hooks/exhaustive-deps
						date = item.bookingDate;
						return (
							<Typography variant='h6' style={{ color: 'blue' }}>
								{item.seatNumber}
							</Typography>
						);
					})}
				</Stack>
				<Stack direction='row' justifyContent='center' spacing={2}>
					<Typography variant='h6'>User Name:</Typography>
					<Typography variant='h6' style={{ color: 'blue' }}>
						{userName}
					</Typography>
				</Stack>
				<Stack direction='row' justifyContent='center' spacing={2}>
					<Typography variant='h6'>Booking Date:</Typography>
					<Typography variant='h6' style={{ color: 'blue' }}>
						{date.substring(0, 10)}
					</Typography>
				</Stack>
			</Container>
		);
	}, [apiResponse]);
	const handleSubmit = useCallback(() => {
		setLoading(true);
		axios
			.get(
				`https://bookmytrainspringmongo.herokuapp.com/api/bookingdata/${pnr}`
			)
			.then((response) => {
				console.log(response);
				if (response.data.length < 1) {
					alert('Invalid PNR');
					setShowDetail(false);
					setLoading(false);
					return;
				}
				setApiResponse(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
		setShowDetail(true);
	}, [pnr]);

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
						label='Enter Your PNR'
						fullWidth
						value={pnr}
						onChange={handleChange}
						margin='normal'
					/>
					<Button
						variant='contained'
						fullWidth
						style={{ marginTop: '15px' }}
						onClick={handleSubmit}
					>
						Submit
					</Button>
					{showDetail ? details : <></>}
				</Box>
			)}
		</Container>
	);
};

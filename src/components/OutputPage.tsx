import React from 'react';
import Container from '@mui/material/Container';
import { AvailableTicket } from './AvailableTicket';

import Box from '@mui/material/Box';

import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export const OutputPage = ({ submitResponse }: { submitResponse: any }) => {
	return (
		<Container maxWidth='xl'>
			<Box sx={{ my: 6 }}>
				<Stack direction='row' justifyContent='space-around' spacing={4}>
					<div>
						<Typography sx={{ my: 2 }}>
							Your PNR Number is
							<Typography sx={{ color: 'blue' }}>
								{submitResponse.pnrNumber}
							</Typography>
						</Typography>
						<Typography sx={{ my: 2 }}>
							Seat No is
							{submitResponse.allocatedSeats.map((item: number) => (
								<Typography sx={{ color: 'blue' }}>{item}</Typography>
							))}
						</Typography>
					</div>
					<div>
						<AvailableTicket
							width='lg'
							redirectedPage='output'
							ticketArray={submitResponse.seatMatrix}
							loading={false}
							pnr={submitResponse.pnrNumber}
						/>
					</div>
					<div>
						<Button
							variant='contained'
							style={{ marginTop: '15px' }}
							component={Link}
							to='/'
							color='secondary'
							fullWidth
						>
							Close
						</Button>
					</div>
				</Stack>
			</Box>
		</Container>
	);
};

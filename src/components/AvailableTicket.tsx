import React, { useCallback } from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Breakpoint, Stack, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const AvailableTicket = ({
	width,
	redirectedPage,
	ticketArray,
	loading,
	pnr,
}: {
	width: false | Breakpoint | undefined;
	redirectedPage: string;
	ticketArray: any;
	loading: boolean;
	pnr?: string | null;
}) => {
	const seatColor = useCallback((item, pnr) => {
		if (pnr === item.pnr) {
			return 'green';
		} else {
			if (item.status === 'booked') {
				return 'red';
			} else if (item.status === 'available') {
				return 'grey';
			}
		}
	}, []);
	return (
		<div>
			<Container maxWidth={width}>
				{loading ? (
					<Stack direction='column' justifyContent='center' alignItems='center'>
						<div>
							<CircularProgress size={100} />
						</div>
					</Stack>
				) : (
					<Stack direction='row' justifyContent='space-between' spacing={2}>
						<Box sx={{ my: 6 }}>
							<Stack
								direction='row'
								justifyContent='flex-start
'
							>
								<Avatar
									sx={{ bgcolor: 'red', margin: 2, width: 30, height: 30 }}
									variant='square'
								>
									<div></div>
								</Avatar>
								<Typography sx={{ my: 2 }}>Booked</Typography>
							</Stack>
							<Stack
								direction='row'
								justifyContent='flex-start
'
							>
								<Avatar
									sx={{ bgcolor: 'grey', margin: 2, width: 30, height: 30 }}
									variant='square'
								>
									<div></div>
								</Avatar>
								<Typography sx={{ my: 2 }}>Available</Typography>
							</Stack>
							{redirectedPage === 'output' ? (
								<Stack
									direction='row'
									justifyContent='flex-start
'
								>
									<Avatar
										sx={{ bgcolor: 'green', margin: 2, width: 30, height: 30 }}
										variant='square'
									>
										<div></div>
									</Avatar>
									<Typography sx={{ my: 2 }}>Booked By User</Typography>
								</Stack>
							) : (
								<></>
							)}
						</Box>
						<Box sx={{ my: 6 }}>
							<ImageList cols={7}>
								{ticketArray.map((item: any) => (
									<ImageListItem key={item._id}>
										<Avatar
											sx={{ bgcolor: seatColor(item, pnr) }}
											variant='square'
										>
											{item.seatNumber}
										</Avatar>
									</ImageListItem>
								))}
							</ImageList>
						</Box>
					</Stack>
				)}
			</Container>
		</div>
	);
};

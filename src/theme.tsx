import React, { FunctionComponent, ReactElement } from 'react';
import {
	createTheme,
	ThemeProvider,
	StyledEngineProvider,
} from '@mui/material/styles';
import StylesProvider from '@mui/styles/StylesProvider';
import CssBaseline from '@mui/material/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = () =>
	createTheme({
		palette: {
			primary: {
				light: '#d7deff',
				main: '#3758fb',
				dark: '#1736a9',
			},
			secondary: {
				light: '#fdc5d7',
				main: '#e9055b',
				dark: '#91054d',
			},
			success: {
				light: '#d2f9ea',
				main: '#26d293',
				dark: '#008454',
				contrastText: '#333',
			},
			error: {
				light: '#fcd4d0',
				main: '#d9240f',
				dark: '#a71809',
			},
			warning: {
				light: '#fffad7',
				main: '#fbe637',
				dark: '#917205',
				contrastText: '#333',
			},
			text: {
				primary: 'rgba(0, 0, 0)',
				secondary: 'rgba(0, 0, 0, 0.5)',
			},
		},

		typography: {
			fontFamily: 'Roboto, Helvetica, Segoe UI, Arial, sans-serif',
			h1: {
				fontFamily: 'Poppins, Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			h2: {
				fontFamily: 'Poppins, Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			h3: {
				fontFamily: 'Poppins, Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			h4: {
				fontFamily: 'Poppins, Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			h5: {
				fontFamily: 'Poppins, Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			h6: {
				fontFamily: 'Poppins, Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			subtitle1: {
				fontFamily: 'Roboto, Poppins, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			subtitle2: {
				fontFamily: 'Roboto, Poppins, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			button: {
				fontFamily: 'Poppins, Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 500,
			},
			caption: {
				fontFamily: 'Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				fontWeight: 300,
			},
		},
	});

const MuiTheme: FunctionComponent<{
	children: ReactElement;
	// eslint-disable-next-line react/prop-types
}> = ({ children }) => {
	return (
		<StylesProvider>
			<CssBaseline />
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme()}>{children}</ThemeProvider>
			</StyledEngineProvider>
		</StylesProvider>
	);
};

export default MuiTheme;

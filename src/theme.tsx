import React, { FunctionComponent, ReactElement } from 'react';
import {
	createTheme,
	ThemeProvider,
	StyledEngineProvider,
} from '@mui/material/styles';
import StylesProvider from '@mui/styles/StylesProvider';
import {
	yellow,
	grey,
	orange,
	lightGreen,
	lightBlue,
} from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = () =>
	createTheme({
		palette: {
			contrastThreshold: 4.5, // WCAG 2 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
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
			information: {
				light: '#c6ecfc',
				main: '#37bbfb',
				dark: '#005ba4',
				contrastText: '#333',
				background: '#EBF8FE',
			},
			table: {
				header: grey[200],
				body: 'rgba(0, 0, 0, 0.87)',
				border: 'rgba(0, 0, 0, 0.12)',
			},
			common: {
				highlight: yellow[50],
			},
			text: {
				primary: 'rgba(0, 0, 0)',
				secondary: 'rgba(0, 0, 0, 0.5)',
			},
			timesheetLabel: {
				container: '#D9EBF7',
				nonEmptylabel: '#007AC9',
				chipClickableColor: '#ffffff',
			},
			timesheetLabelTable: {
				headerBackgroundColor: '#ffffff',
			},
			repliconBlue: {
				light: '#D9EBF7',
				main: '#007AC9',
				dark: '#00375A',
			},
			syncBackgroundStatus: {
				white: '#FFFFFF',
			},
			notesLabel: {
				all: grey[300],
				inbox: '#d7deff',
				inboxHalfOpacity: 'rgba(215, 222, 255, 0.5)',
				private: orange[100],
				privateHalfOpacity: 'rgba(255, 224, 178, 0.5)',
				accepted: lightGreen[100],
				acceptedHalfOpacity: 'rgba(220, 237, 200, 0.5)',
				trash: lightBlue[100],
			},
		},
		heading: {
			gradient:
				'linear-gradient(#2699FB, #00C2D7, #00C2D7, #00C2D7, #00C2D7, #00C2D7, #00C2D7, #00C2D7, #00C2D7)',
		},
		shadow: {
			paper: 'rgba(0,0,0,36%) 0px 0 12px 0px',
			menu: 'rgba(0,0,0,50%) 12px -12px 12px -15px',
			export: 'rgba(0,0,0,0.38) 1px 1px 5px 1px ',
		},
		skelton: {
			color: '#bdbdbd',
		},
		typography: {
			useNextVariants: true,
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
		transition: {
			timing: '0.6s',
		},
		overrides: {
			MuiInputBase: {
				input: {
					fontFamily: 'Roboto, Helvetica, Segoe UI, Arial, sans-serif',
				},
			},
			MuiSelect: {
				selectMenu: {
					height: undefined,
				},
			},
			MuiFormControlLabel: {
				label: {
					fontSize: '0.8125rem',
				},
			},
			MuiOutlinedInput: {
				root: {
					backgroundColor: '#fff',
				},
			},
			MuiCheckbox: {
				root: {
					width: 36,
					height: 36,
					color: 'rgba(0, 0, 0, 0.36)',
					'&:hover': {
						color: 'rgba(0, 0, 0, 1)',
					},
				},
			},
			MuiTooltip: {
				tooltip: {
					fontSize: 13,
				},
			},
			MuiPickersBasePicker: {
				pickerView: { marginBottom: 16 },
			},
		},
		padding: {
			input: '20px 12px 6px 12px',
		},
	} as any);

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

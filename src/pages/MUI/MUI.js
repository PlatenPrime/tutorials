import React from 'react';
import { Box, Stack, ThemeProvider, Typography } from '@mui/material';
import { theme } from '../../theme';
import MUISideBar from './MUIComponents/MUISideBar';
import MUIFeed from './MUIComponents/MUIFeed';
import MUIRightBar from './MUIComponents/MUIRightBar';
import MUINavBar from './MUIComponents/MUINavBar';


const MUI = () => {




	return (
		<ThemeProvider theme={theme}>
			<Box>
				<MUINavBar />
				<Stack direction="row" spacing={2} justifyContent="space-between">
					<MUISideBar />
					<MUIFeed />
					<MUIRightBar />

				</Stack>



			</Box>

		</ThemeProvider>






	);
};

export default MUI;
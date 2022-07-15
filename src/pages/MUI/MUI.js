import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
import { theme } from '../../theme';
import MUISideBar from './MUIComponents/MUISideBar';
import MUIFeed from './MUIComponents/MUIFeed';
import MUIRightBar from './MUIComponents/MUIRightBar';
import MUINavBar from './MUIComponents/MUINavBar';
import MUIAdd from './MUIComponents/MUIAdd';


const MUI = () => {


	const [mode, setMode] = useState("light")

	const darkTheme = createTheme(
		{
			palette: {
				mode: mode,
			}





		}
	)







	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={"background.default"} color={"text.primary"} >
				<MUINavBar />
				<Stack direction="row" spacing={2} justifyContent="space-between">
					<MUISideBar setMode={setMode} mode={mode} />
					<MUIFeed />
					<MUIRightBar />

				</Stack>
				<MUIAdd />


			</Box>

		</ThemeProvider>






	);
};

export default MUI;
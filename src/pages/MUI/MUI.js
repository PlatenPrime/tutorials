import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { theme } from '../../theme';

const MUI = () => {

	const MyButton = styled(Button)(
		{
			backgroundColor: "black",
			color: "#f0f",
			margin: "10px",
			padding: "10px",
			"&:hover": {
				backgroundColor: "blue",
			},
			"&:disabled": {
				backgroundColor: "gray",
			}
		}
	)




	return (
		<ThemeProvider theme={theme}>
			<div>
				<h1>This is an incredible page to practice with MUI library</h1>
				<Button variant="outlined" color='success'>Hello World</Button>
				<Button variant="text" color='secondary'>Text</Button>
				<Button startIcon={<DeleteIcon />} variant="contained">Contained</Button>
				<Button endIcon={<SendIcon />} color='secondary' variant="outlined">Outlined</Button>
				<Typography variant="h2" component="h4">
					Heading
				</Typography>
				<Button variant='contained'
					sx={{
						backgroundColor: "black",
						color: "#f0f",
						margin: "10px",
						padding: "10px",
						"&:hover": {
							backgroundColor: "blue",
						},
						"&:disabled": {
							backgroundColor: "gray",
						},


					}}
				>My Unique button</Button>
				<MyButton color='secondary'>My Button</MyButton>
				<MyButton>My Button</MyButton>
				<MyButton>My Button</MyButton>
				<MyButton>My Button</MyButton>
			</div>

		</ThemeProvider>






	);
};

export default MUI;
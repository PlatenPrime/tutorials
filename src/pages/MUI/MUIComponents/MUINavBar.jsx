import { AppBar, Box, InputBase, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';



const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});


const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",


}));


const Icons = styled(Box)(({ theme }) => ({
	backgroundColor: "white",

}));


const MUINavBar = () => {
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography variant='h6'
					sx={{
						display: {
							xs: "none",
							sm: "block"
						}
					}}
				>
					Platen
				</Typography>
				<CastForEducationIcon sx={{
					display: {
						xs: "block",
						sm: "none"
					}
				}} />
				<Search>
					<InputBase placeholder='Search...' />
				</Search>
				<Icons>
					Icons
				</Icons>
			</StyledToolbar>
		</AppBar>
	);
};

export default MUINavBar;
import { Box } from '@mui/material';
import React from 'react';

const MUISideBar = () => {
	return (
		<Box bgcolor="yellow" flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
			SideBar
		</Box>
	);
};

export default MUISideBar;

import { Box } from '@mui/system';
import React from 'react';
import MUIPost from './MUIPost';

const MUIFeed = () => {
	return (
		<Box flex={4} p={2}>
			<MUIPost />
			<MUIPost />
			<MUIPost />
			<MUIPost />

		</Box>
	);
};

export default MUIFeed;